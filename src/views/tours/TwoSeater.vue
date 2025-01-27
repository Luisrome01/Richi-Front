<template>
	<div class="header">
		<div class="text-container">
			<div class="title">UTV Tour, 2 Seater</div>
			<div class="title">Information</div>
			<div class="highlight"></div>
		</div>
		<div class="specifics">
			<div class="section">
				<img :src="DURATION" alt="Clock" />
				<div class="section-text">
					<div class="name">Duration</div>
					<div class="quantity">3 hours</div>
				</div>
			</div>
			<div class="section">
				<img :src="CAR" alt="Clock" />
				<div class="section-text">
					<div class="name">Departure times</div>
					<div class="quantity">9:00 AM - 12:00 PM</div>
					<div class="quantity">2:00 PM - 5:00 PM</div>
				</div>
			</div>
		</div>
		<div class="section">
			<img :src="LIST" alt="Clock" />
			<div class="section-text">
				<div class="name">Requirements</div>
				<div class="quantity">Drivers License</div>
				<div class="quantity">Tennis shoes</div>
				<div class="quantity">Swimsuit</div>
				<div class="quantity">& Good vibes!</div>
			</div>
		</div>
		<div class="price-container">
			<div class="context">All for the following price:</div>
			<div class="context price">USD 260.00</div>
			<div class="redirect" @click="scrollToContact()">
				<div class="subtitle">Book now</div>
				<img :src="ARROW_DIAGONAL" alt="Arrow" />
			</div>
		</div>
	</div>
	<div class="description">
		Explore Aruba's beauty and history with our <span class="highlighted">guided tour</span>, featuring iconic <span class="highlighted">attractions</span> like the Bushiribana Gold Mill Ruins, the serene Cave Pool, the picturesque Baby Natural
		Bridge, the historic Alto Vista Chapel, the majestic California Lighthouse, and the cultural gem Tres Tapi. Experience the best of the island in one unforgettable journey!
	</div>
	<div class="image-container">
		<img :src="VEHICLE" alt="ATV" />
	</div>
	<div class="place-container">
		<div class="place first">
			<div class="place-name">Bushiribana Gold Mill Ruins</div>
			<img :src="GOLD_MILL" alt="Ruins" />
		</div>
		<div class="place second">
			<div class="place-name">Baby Natural Bridge</div>
			<img :src="BRIDGE" alt="Baby Natural Bridge" />
		</div>
		<div class="place third">
			<div class="place-name">Tres Tapi</div>
			<img :src="TAPI" alt="Tres Tapi" />
		</div>
	</div>
	<div class="line-container">
		<img :src="LINE" alt="Line" />
	</div>
</template>

<script setup>
import { VEHICLE, DURATION, CAR, LIST, ARROW_DIAGONAL, GOLD_MILL, BRIDGE, TAPI } from '@/utils/media';

/**
 * Maneja el scroll hacia la sección de contacto.
 */
const scrollToContact = () => {
	const section = document.getElementById('contact');
	if (section) {
		section.scrollIntoView({ behavior: 'smooth' });
	}
};
</script>

<style scoped>
.header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.text-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* width: 283px; */
	height: fit-content;
}

.title {
	font-family: 'Stolzl Regular';
	font-size: 36px;
	line-height: 43px;
	color: #292b2e;
	z-index: 7;
}

.highlight {
	position: relative;
	width: 283px;
	height: 50px;
	top: -45px;
	background: #ffffff;
	border-radius: 50px;
	transform: rotate(-1deg);
	z-index: 6;
}

.description {
	font-family: 'BR Omny Regular';
	width: 605px;
	font-size: 18px;
	line-height: 22px;
	text-align: justify;
	color: #292b2e;
	z-index: 10;
}

.description p {
	margin: 0 0 16px 0;
}

.highlighted {
	font-family: 'BR Omny SemiBold';
}

.specifics {
	display: flex;
	flex-direction: column;
	gap: 30px;
}

.section {
	display: flex;
	flex-direction: row;
	height: fit-content;
	gap: 25px;
}

.section img {
	width: 35px;
	height: 35px;
}

.section-text {
	display: flex;
	flex-direction: column;
	gap: 5px;
}

.name {
	font-family: 'Stolzl Medium';
	font-size: 15px;
	line-height: 18px;
	color: #005c99;
}

.quantity {
	font-family: 'Stolzl Regular';
	font-size: 15px;
	line-height: 18px;
	color: #292b2e;
}

.price-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 396px;
	height: 135px;
	background: #005c99;
	padding: 25px;
	border-radius: 31px;
}

.context {
	width: 100%;
	font-family: 'Stolzl Regular';
	font-size: 20px;
	color: #ffffff;
}

.context.price {
	font-family: 'Stolzl Medium';
	font-size: 32px;
}

.redirect {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	position: absolute;
	width: 138px;
	height: 42px;
	left: 244px;
	top: 78px;
	gap: 10px;
	background: #ffffff;
	border-radius: 40px;
	cursor: pointer;
}

.subtitle {
	font-family: 'Stolzl Regular';
	font-size: 14px;
	display: flex;
	align-items: center;
	text-align: center;
	color: #292b2e;
}

.redirect img {
	width: fit-content;
	height: 20px;
	filter: invert(1) brightness(255%) contrast(100%) grayscale(0);
}

.image-container {
	position: absolute;
	left: 0;
	top: 350px;
	z-index: 5;
}

.image-container img {
	width: 400px;
}

.place-container {
	display: flex;
	flex-direction: row;
	position: relative;
	width: 100%;
	left: 50px;
	top: 50px;
	gap: 60px;
	z-index: 5;
}

.place {
	display: flex;
	flex-direction: column;
	position: relative;
	width: 275px;
	left: 366px;
	transition: transform 0.5s;
}

.place img {
	width: 100%;
	height: 100%;
	border-radius: 31px;
	object-fit: cover;
}

.place-name {
	position: absolute;
	width: 100%;
	padding: 30px;
	font-family: 'Stolzl Regular';
	font-size: 20px;
	line-height: 107%;
	color: #ffffff;
}

.first {
	height: 244px;
}

.second {
	height: 336px;
	top: -150px;
}

.third {
	height: 301px;
	top: -30px;
}

.place:hover {
	transform: scale(1.05);
}

.line-container {
	position: absolute;
	top: 260px;
	left: -50px;
	width: 100vw;
	height: 100%;
	z-index: 1;
	overflow: hidden;
}

.line-container img {
	width: 100%;
	height: 460px;
	display: block;
}
</style>
