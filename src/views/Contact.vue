<template>
	<div class="contact-container">
		<div class="background-border">
			<div class="inputs-container">
				<Input placeholder="Escribe aquí..." />
				<TextArea placeholder="Escribe tu mensaje aquí..." />
				<ArrowButton subtitle="Send a Message" :arrowImage="ARROW_DIAGONAL" />
				<ArrowButton @click="openModal" subtitle="Crear Reseña" :arrowImage="ARROW_DIAGONAL" />
			</div>
		</div>
		<Modal v-model="showModal" title="Create review" description="Share your experience with us! Fill out the form below to leave a review of your unforgettable Aruba adventure.">
			<div class="content">
				<Input placeholder="Escribe aquí..." />
			</div>
		</Modal>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { Input, TextArea, ArrowButton, Modal } from '@/components';
import { ARROW_DIAGONAL } from '@/utils/media';

const showModal = ref(false);

const openModal = () => {
	showModal.value = true;
};
</script>

<style scoped>
.contact-container {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
}

.background-border {
	width: 100%;
	height: 100%;
	background: #f1f1f1;
	border-radius: 10px;
	padding: 20px;
}

.inputs-container {
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-bottom: 30px;
}

.redirect-container {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
}

.redirect img {
	width: 20px;
	height: 20px;
}

.content {
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 25px;
}
</style>
