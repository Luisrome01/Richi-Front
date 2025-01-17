<template>
	<div class="review-container">
		<div class="highlight"></div>
		<div class="title">What our clients say about us</div>
		<ArrowButton class="create-review-button" @click="openModal" subtitle="Add your review" :arrowImage="ARROW_DIAGONAL" />
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
</script>

<style scoped>
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
