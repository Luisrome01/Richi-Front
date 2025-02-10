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
						<a :href="'https://www.instagram.com/richi_toursrental/profilecard/?igsh=MW92dXpub2Y4Y2RzZw=='" target="_blank" rel="noopener noreferrer">
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
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	gap: 30px;
	padding: 33px;
}

.background-border {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: fit-content;
	gap: 33px;
}

.form-container {
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 55px;
	gap: 30px;
	background: #f1f1f1;
	border-radius: 50px;
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
	display: flex;
	flex-direction: column;
	width: 100%;
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
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 25px;
}

.option {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	padding: 25px 30px;
	gap: 25px;
	width: 100%;
	max-width: 340px;
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

@media (max-width: 900px) {
	.description {
		width: 100%;
		font-size: 18px;
	}
}

@media (max-width: 700px) {
	.description {
		font-size: 16px;
	}

	.section {
		flex-direction: column;
	}
}

@media (max-width: 500px) {
	.form-container {
		gap: 15px;
		padding: 25px;
		border-radius: 15px;
	}

	.section-name {
		font-size: 26px;
	}

	.description {
		font-size: 12px;
	}

	.label {
		font-size: 10px;
	}

	.connect-details {
		gap: 15px;
	}

	.section {
		gap: 15px;
	}

	.info-container {
		padding: 25px;
		border-radius: 15px;
		gap: 20px;
	}

	.title {
		font-size: 20px;
	}

	.name {
		font-size: 12px;
	}

	.value {
		font-size: 12px;
	}
}

@media (max-width: 450px) {
	.section-name {
		font-size: 20px;
	}

	.description {
		font-size: 10px;
	}
}

@media (max-width: 380px) {
	.option {
		padding: 15px 20px;
		width: 100%;
		height: 66px;
		gap: 20px;
	}

	.option img {
		width: 30px;
		height: 30px;
	}

	.value {
		font-size: 10px;
	}
}
</style>
