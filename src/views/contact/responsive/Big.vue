<template>
	<div class="contact-container">
		<div class="background-border">
			<div class="form-container">
				<div>
					<div class="section-name">Contact us</div>
					<div class="description">Have questions or ready to book your unforgettable Aruba adventure? Fill out the form below:</div>
				</div>
				<form ref="contactForm" :action="form" method="POST" class="connect-details">
					<div class="section">
						<div class="combined">
							<div class="label">First Name</div>
							<Input name="first_name" placeholder="Enter your first name" required />
						</div>
						<div class="combined">
							<div class="label">Last Name</div>
							<Input name="last_name" placeholder="Enter your last name" required />
						</div>
					</div>
					<div class="section">
						<div class="combined">
							<div class="label">Email</div>
							<Input type="email" name="email" placeholder="Enter your email" required />
						</div>
						<div class="combined">
							<div class="label">Phone Number</div>
							<Input name="phone_number" placeholder="Enter your phone number" />
						</div>
					</div>
					<div class="combined">
						<div class="label">Message</div>
						<TextArea name="message" placeholder="Enter your message" required />
					</div>
					<div class="send-button">
						<ArrowButton subtitle="Send a message" :arrowImage="ARROW_DIAGONAL" @click="submitForm" />
						<input type="hidden" name="_next" value="http://localhost:5173/" />
						<input type="hidden" name="_captcha" value="false" />
					</div>
				</form>
			</div>
			<div class="info-container">
				<div class="title">Hi! We are always here to help you.</div>
				<div class="options">
					<div class="option">
						<img :src="EMAIL" alt="Email" />
						<div class="option-details">
							<div class="name">Email</div>
							<div class="value">richitoursrental@gmail.com</div>
						</div>
					</div>
					<div class="option">
						<img :src="MESSAGE" alt="Message" />
						<div class="option-details">
							<div class="name">SMS / WhatsApp</div>
							<div class="value">+297 740 4943</div>
						</div>
					</div>
					<div class="option">
						<img class="qr" :src="QR_IMAGE" alt="QR" @click="toggleModal" />
						<div class="option-details">
							<div class="name">QR Code</div>
							<div class="value">Click the preview to scan it</div>
						</div>
					</div>
				</div>
				<div class="separator"></div>
				<div class="connect-details">
					<div class="subtitle">Connect with us</div>
					<div class="buttons">
						<a :href="'https://www.facebook.com/share/fCbEgPQg1PgBzrKk/?mibextid=LQQJ4d'" target="_blank" rel="noopener noreferrer">
							<img :src="FACEBOOK" alt="Facebook" />
						</a>
						<a :href="'https://www.instagram.com/richi_toursrental/profilecard/?igsh=MW92dXpub2Y4Y2RzZw=='" target="_blank" rel="noopener noreferrer">
							<img :src="INSTAGRAM" alt="Instagram" />
						</a>
						<a :href="'https://g.page/r/CVZKth4QqEKDEBM/review'" target="_blank" rel="noopener noreferrer">
							<img :src="GOOGLE" alt="Google" />
						</a>
						<a :href="'https://www.instagram.com/richi_toursrental/profilecard/?igsh=MW92dXpub2Y4Y2RzZw=='" target="_blank" rel="noopener noreferrer">
							<img :src="TRIPADVISOR" alt="Trip Advisor" />
						</a>
					</div>
				</div>
			</div>
		</div>
		<Modal v-model="showModal" title="QR Code" description="Scan the QR code to start a conversation with us." width="350px">
			<div class="modal-content">
				<img class="qr-expanded" :src="QR_IMAGE" alt="QR" @click="toggleModal" />
			</div>
		</Modal>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { Input, TextArea, ArrowButton, Modal } from '@/components';
import { ARROW_DIAGONAL, EMAIL, MESSAGE, FACEBOOK, INSTAGRAM, QR_IMAGE, TRIPADVISOR, GOOGLE } from '@/utils/media';

const form = import.meta.env.VITE_FORM_URL;

const showModal = ref(false);

/**
 * Muestra u oculta el modal con el código QR.
 */
const toggleModal = () => {
	showModal.value = !showModal.value;
};

/**
 * Envía el formulario de información de contacto.
 */
const submitForm = () => {
	const form = document.querySelector('form');
	if (form) {
		form.submit();
	}
};
</script>

<style scoped>
.contact-container {
	height: 100vh;
	padding: 33px 33px 0px;
}

.background-border {
	position: relative;
	width: 90vw;
	height: 761px;
	background: #f1f1f1;
	border-radius: 50px;
}

.form-container {
	display: flex;
	flex-direction: column;
	width: calc(100% - 456px);
	padding: 55px;
	padding-right: 0px;
	gap: 30px;
}

.section-name {
	font-family: 'Outfit';
	font-weight: 500;
	font-size: 36px;
	color: #005c99;
}

.description {
	width: calc(100% - 110px);
	font-family: 'Outfit';
	font-size: 20px;
	color: #292b2e;
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
	font-family: 'Outfit';
	font-weight: 500;
	font-size: 16px;
	color: #292b2e;
}

.send-button {
	display: flex;
	justify-content: flex-end;
}

.info-container {
	position: absolute;
	display: flex;
	flex-direction: column;
	width: 456px;
	right: -80px;
	top: 50%;
	transform: translateY(-50%);
	background: #005c99;
	border-radius: 31px;
	gap: 35px;
	padding: 45px;
}

.title {
	font-family: 'Outfit';
	font-weight: 500;
	font-size: 24px;
	line-height: 29px;
	color: #ffffff;
}

.options {
	display: flex;
	flex-direction: column;
	gap: 25px;
}

.option {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	padding: 25px 30px;
	gap: 25px;
	height: 86px;
	background: rgba(57, 129, 177, 0.51);
	border-radius: 22px;
}

.option img {
	width: 35px;
	height: 35px;
}

.qr {
	border-radius: 5px;
	cursor: pointer;
	object-fit: cover;
	transition: transform 0.3s ease-in-out;
}

.qr-expanded {
	width: 250px;
	height: 250px;
	margin-top: 15px;
	object-fit: cover;
}

.qr:hover {
	transform: scale(1.1);
}

.option-details {
	display: flex;
	flex-direction: column;
}

.name {
	font-family: 'Outfit';
	font-weight: 500;
	font-size: 15px;
	color: #ffffff;
}

.value {
	font-family: 'Outfit';
	font-size: 15px;
	color: #ffffff;
}

.separator {
	width: 100%;
	border: 2px solid rgba(57, 129, 177, 0.51);
}

.connect-details {
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 25px;
}

.subtitle {
	font-family: 'Outfit';
	font-weight: 500;
	font-size: 15px;
	color: #ffffff;
}

.buttons {
	display: flex;
	flex-direction: row;
	gap: 30px;
}

.buttons img {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 24px;
	height: 24px;
}

.content {
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 25px;
}

.modal-content {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
}
</style>
