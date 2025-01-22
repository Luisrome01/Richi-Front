<template>
	<div class="review-container">
		<div class="highlight"></div>
		<div class="title">What our clients say about us</div>
		<div class="slider-container">
			<Slider :step="currentStep">
				<div v-if="currentStep === 1" class="reviews">
					<Review v-for="review in firstPage" :rating="review.rating" :name="review.name" :description="review.description" :date="review.date" :key="review.id" />
				</div>
				<div v-else-if="currentStep === 2" class="reviews">
					<Review v-for="review in secondPage" :rating="review.rating" :name="review.name" :description="review.description" :date="review.date" :key="review.id" />
				</div>
				<div v-else class="reviews">
					<Review v-for="review in thirdPage" :rating="review.rating" :name="review.name" :description="review.description" :date="review.date" :key="review.id" />
				</div>
			</Slider>
			<SliderControl :step="currentStep" :totalSteps="totalSteps" @setStep="currentStep = $event">
				<div class="create-review-button">
					<ArrowButton @click="openModal" subtitle="Add your review" :arrowImage="ARROW_DIAGONAL" />
				</div>
			</SliderControl>
		</div>
		<Modal v-model="showModal" title="Create review" description="Share your experience with us! Fill out the form below to leave a review of your unforgettable Aruba adventure.">
			<div class="content">
				<div class="form">
					<div class="section">
						<div class="combined">
							<div class="label">First Name</div>
							<Input placeholder="Enter your first name" />
						</div>
						<div class="combined">
							<div class="label">Last Name</div>
							<Input placeholder="Enter your last name" />
						</div>
					</div>
					<div class="combined">
						<div class="label">Description</div>
						<TextArea placeholder="Enter your review" v-model="formData.message" />
					</div>
					<div class="combined">
						<div class="label">Rating</div>
						<div class="star-rating">
							<span v-for="star in 5" :key="star" class="star" :class="{ selected: star <= formData.rating }" @click="setRating(star)"> ★ </span>
						</div>
					</div>
				</div>
				<ArrowButton class="right-arrow-button" subtitle="Post your review" :arrowImage="ARROW_DIAGONAL" @click="submitReview" />
				<div v-if="successMessage" class="success-message">{{ successMessage }}</div>
			</div>
		</Modal>
	</div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { Input, TextArea, ArrowButton, Modal, Slider, SliderControl, Review } from '@/components';
import { ARROW_DIAGONAL } from '@/utils/media';

const reviews = ref([
	{ id: 1, name: 'John Doe', rating: 5, description: 'Amazing experience!', date: '2021-10-01' },
	{ id: 2, name: 'Jane Smith', rating: 4, description: 'Beautiful place, great service!', date: '2021-11-15' },
	{ id: 3, name: 'Alex Johnson', rating: 5, description: 'Absolutely loved it! Highly recommend.', date: '2022-02-20' },
	{ id: 4, name: 'Emily Davis', rating: 3, description: 'It was okay, but could be better.', date: '2022-03-05' },
	{ id: 5, name: 'Michael Brown', rating: 4, description: 'Great value for the price!', date: '2022-04-12' },
	{ id: 6, name: 'Sarah Wilson', rating: 5, description: 'A trip I will never forget!', date: '2022-05-30' },
	{ id: 7, name: 'David Martinez', rating: 4, description: 'Nice experience, but a bit crowded.', date: '2022-06-10' },
	{ id: 8, name: 'Sophia Garcia', rating: 5, description: 'Perfect getaway destination!', date: '2022-07-22' },
	{ id: 9, name: 'Chris Lee', rating: 3, description: 'Average experience, but the staff were friendly.', date: '2022-08-18' },
	{ id: 10, name: 'Emma Thompson', rating: 5, description: 'Exceeded all my expectations!', date: '2022-09-04' },
	{ id: 11, name: 'Daniel White', rating: 4, description: 'Wonderful place, would visit again.', date: '2022-10-09' },
]);

const currentStep = ref(1);
const reviewsPerPage = 6;

const firstPage = ref([]);
const secondPage = ref([]);
const thirdPage = ref([]);

/**
 * Distribuye las reselñas en las páginas correspondientes, según la calificación y la fecha.
 */
const distributeReviews = () => {
	const sortedReviews = [...reviews.value].sort((a, b) => {
		if (b.rating === a.rating) {
			return new Date(b.date) - new Date(a.date);
		}
		return b.rating - a.rating;
	});

	firstPage.value = sortedReviews.slice(0, reviewsPerPage);
	secondPage.value = sortedReviews.slice(reviewsPerPage, reviewsPerPage * 2);
	thirdPage.value = sortedReviews.slice(reviewsPerPage * 2, reviewsPerPage * 3);
};

/**
 * Calcula el número total de pasos en el slider.
 */
const totalSteps = computed(() => {
	let steps = 0;
	if (firstPage.value.length > 0) steps += 1;
	if (secondPage.value.length > 0) steps += 1;
	if (thirdPage.value.length > 0) steps += 1;
	return steps;
});

/**
 * Constantes reactivas para el modal de creación de reseñas.
 */
const showModal = ref(false);
const successMessage = ref('');
const formData = ref({
	name: '',
	email: '',
	message: '',
	rating: 0,
});

/**
 * Muestra el modal de creación de reseñas.
 */
const openModal = () => {
	showModal.value = true;
	successMessage.value = '';
};

/**
 * Establece la calificación de la reseña.
 * @param {number} star - La calificación de la reseña.
 */
const setRating = (star) => {
	formData.value.rating = star;
	console.log(`${star} estrella${star > 1 ? 's' : ''} seleccionada`);
};

/**
 * Valida el formato del correo electrónico.
 * @param {string} email - El correo electrónico a validar.
 * @returns {boolean} - Verdadero si el correo electrónico es válido, falso en caso contrario.
 */
const validateEmail = (email) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

/**
 * Realiza una solicitud de red para crear una reseña.
 */
const submitReview = async () => {
	if (!formData.value.name || !formData.value.email || !formData.value.message) {
		successMessage.value = 'All fields are required!';
		return;
	}

	if (!validateEmail(formData.value.email)) {
		successMessage.value = 'Invalid email format!';
		return;
	}

	try {
		const response = await fetch('http://localhost:5000/api/reviews', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData.value),
		});

		if (response.ok) {
			successMessage.value = 'Review created successfully!';
			formData.value = { name: '', email: '', message: '', rating: 0 };
			setTimeout(() => {
				showModal.value = false;
			}, 1000);
		} else {
			const errorData = await response.json();
			throw new Error(`Failed to create review: ${errorData.message || response.statusText}`);
		}
	} catch (error) {
		successMessage.value = `Error: ${error.message}`;
		console.error('Error creating review:', error);
	}
};

onMounted(() => {
	distributeReviews();
});
</script>

<style scoped>
.review-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: fit-content;
	padding: 60px 33px;
}

.highlight {
	position: relative;
	width: 301px;
	height: 66px;
	left: 77px;
	top: -7px;
	background: #f1f1f1;
	border-radius: 50px;
	transform: rotate(-1deg);
}

.title {
	position: absolute;
	width: 473px;
	height: 107px;
	font-family: 'Stolzl Medium';
	font-size: 48px;
	line-height: 104%;
	text-align: center;
	color: #005c99;
}

.slider-container {
	overflow: hidden;
}

.reviews {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: 100%;
	height: 100%;
	grid-gap: 20px;
	padding-top: 90px;
	padding-bottom: 45px;
}

.create-review-button {
	display: flex;
	justify-content: flex-end;
	width: 100%;
}

.content {
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-top: 20px;
}

.form {
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 20px;
}

.section {
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	width: 100%;
	gap: 30px;
}

.combined {
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 10px;
}

.label {
	font-family: 'Stolzl Medium';
	font-size: 16px;
	color: #292b2e;
}

.right-arrow-button {
	align-self: flex-end;
}

.star-rating {
	display: flex;
	justify-content: flex-start;
	gap: 10px;
}

.star {
	line-height: 30px;
	font-size: 30px;
	color: #292b2e80;
	cursor: pointer;
	transition: color 0.3s ease;
}

.star.selected {
	color: #005c99;
}

.success-message {
	font-family: 'Stolzl Regular';
	font-size: 16px;
	text-align: center;
	margin-top: 10px;
	color: #005c99;
}
</style>
