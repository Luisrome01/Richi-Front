<template>
	<div class="review-container">
		<div class="highlight"></div>
		<div class="title">What our clients say about us</div>
		<ArrowButton
			class="create-review-button"
			@click="openModal"
			subtitle="Create Review"
			:arrowImage="ARROW_DIAGONAL"
		/>
		<Modal
			v-model="showModal"
			title="Create review"
			description="Share your experience with us! Fill out the form below to leave a review of your unforgettable Aruba adventure."
		>
			<div class="content">
				<div class="form-row">
					<div class="form-group">
						<label for="name">Name and Last Name</label>
						<Input id="name" v-model="formData.name" placeholder="Name and Last Name" />
					</div>
					<div class="form-group">
						<label for="email">Email</label>
						<Input id="email" v-model="formData.email" placeholder="Email" />
					</div>
				</div>
				<TextArea v-model="formData.message" placeholder="Enter your message..." />
				<div class="star-rating">
					<span
						v-for="star in 5"
						:key="star"
						class="star"
						:class="{ selected: star <= formData.rating }"
						@click="setRating(star)"
					>
						★
					</span>
				</div>
				<ArrowButton
					class="right-arrow-button"
					subtitle="Crear Reseña"
					:arrowImage="ARROW_DIAGONAL"
					@click="submitReview"
				/>
				<div v-if="successMessage" class="success-message">{{ successMessage }}</div>
			</div>
		</Modal>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { Input, TextArea, ArrowButton, Modal } from '@/components';
import { ARROW_DIAGONAL } from '@/utils/media';

const showModal = ref(false);
const successMessage = ref('');
const formData = ref({
	name: '',
	email: '',
	message: '',
	rating: 0,
});

const openModal = () => {
	showModal.value = true;
	successMessage.value = '';
};

const setRating = (star) => {
	formData.value.rating = star;
	console.log(`${star} estrella${star > 1 ? 's' : ''} seleccionada`);
};

const validateEmail = (email) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

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
				showModal.value = false; // Cierra el modal tras éxito
			}, 1000);
		} else {
			const errorData = await response.json();
			throw new Error(
				`Failed to create review: ${errorData.message || response.statusText}`
			);
		}
	} catch (error) {
		successMessage.value = `Error: ${error.message}`;
		console.error('Error creating review:', error);
	}
};
</script>

<style scoped>
/* Estilos de la pantalla principal */
.review-container {
	display: flex;
	justify-content: center;
	height: 100vh;
	padding: 33px;
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

.create-review-button {
	position: absolute;
	width: 199px;
	height: 42px;
	left: 1180px;
	top: 4023px;
	cursor: pointer;
}

/* Estilos del modal */

.content {
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-top: 20px;
}

.form-row {
	display: flex;
	width: 100%;
	gap: 20px;
}

.form-group {
	display: flex;
	flex-direction: column;
	width: 48%;
}

label {
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	color: #292B2E;
	margin-bottom: 8px;
}

input, .TextArea {
	width: 100%;
}

.right-arrow-button {
	align-self: flex-end;
	margin-top: 20px;
}

.star-rating {
	display: flex;
	gap: 10px;
	justify-content: center;
	margin-top: 10px;
}

.star {
	font-size: 24px;
	color: #292B2E80;
	cursor: pointer;
	transition: color 0.3s ease;
}

.star.selected {
	color: #005C99;
}

.success-message {
	margin-top: 10px;
	color: #005C99;
	font-size: 16px;
	text-align: center;
}
</style>
