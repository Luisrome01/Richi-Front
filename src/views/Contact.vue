<template>
	<div class="contact-container">
		<div class="background-border">
			<div class="form-container">
				<div>
					<div class="section-name">Contact us</div>
					<div class="description">Have questions or ready to book your unforgettable Aruba adventure? Fill out the form below:</div>
				</div>
				<div class="connect-details">
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
					<div class="section">
						<div class="combined">
							<div class="label">Email</div>
							<Input placeholder="Enter your email" />
						</div>
						<div class="combined">
							<div class="label">Phone Number</div>
							<Input placeholder="Enter your phone number" />
						</div>
					</div>
					<div class="combined">
						<div class="label">Message</div>
						<TextArea placeholder="Enter your message" />
					</div>
				</div>
				<div class="send-button">
					<ArrowButton subtitle="Send a message" :arrowImage="ARROW_DIAGONAL" />
				</div>
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
						<!-- <img :src="" alt="Code" /> -->
						<div class="option-details">
							<div class="name">QR Code</div>
							<div class="value">Scan this to start a new chat</div>
						</div>
					</div>
				</div>
				<div class="separator"></div>
				<div class="connect-details">
					<div class="subtitle">Connect with us</div>
					<div class="buttons">
						<img :src="FACEBOOK" alt="Facebook" />
						<img :src="INSTAGRAM" alt="Instagram" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { Input, TextArea, ArrowButton } from '@/components';
import { ARROW_DIAGONAL, EMAIL, MESSAGE, FACEBOOK, INSTAGRAM } from '@/utils/media';
</script>

<style scoped>
.contact-container {
	height: 100vh;
	padding: 33px;
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
	font-family: 'Stolzl Medium';
	font-size: 36px;
	color: #005c99;
}

.description {
	width: calc(100% - 110px);
	font-family: 'Stolzl Regular';
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
	font-family: 'Stolzl Medium';
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
	font-family: 'Stolzl Medium';
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

.option-details {
	display: flex;
	flex-direction: column;
}

.name {
	font-family: 'Stolzl Medium';
	font-size: 15px;
	color: #ffffff;
}

.value {
	font-family: 'Stolzl Regular';
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
	font-family: 'Stolzl Medium';
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
</style>
