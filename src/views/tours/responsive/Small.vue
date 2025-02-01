<template>
	<div class="slide">
		<div class="header">
			<div class="container">
				<div class="text-container">
					<div class="title">ATV Single Tour</div>
					<div class="highlight"></div>
				</div>
				<div class="description">
					Explore Aruba's beauty and history with our <span class="highlighted">guided tour</span>, featuring iconic <span class="highlighted">attractions</span> like the Bushiribana Gold Mill Ruins, the serene Cave Pool, the picturesque Baby Natural
					Bridge, the historic Alto Vista Chapel, the majestic California Lighthouse, and the cultural gem Tres Tapi. Experience the best of the island in one unforgettable journey!
				</div>
			</div>
		</div>
		<div class="row-2">
			<div class="specifics">
				<div class="section">
					<img :src="DURATION" alt="Clock" />
					<div class="section-text">
						<div class="name">Duration</div>
						<div class="quantity">4 hours</div>
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
			</div>
			<div class="column-2">
				<div class="image-container">
					<img :src="VEHICLE" alt="ATV" />
				</div>
				<div v-if="!price" class="place">
					<div class="place-name">Cave Pool</div>
					<img :src="CAVE" alt="Cave Pool" />
				</div>
				<div v-if="price" class="price-container">
					<div class="context">All for the following price:</div>
					<div class="context price">USD 150.00</div>
					<div class="redirect" @click="scrollToContact()">
						<img :src="ARROW_DIAGONAL" alt="Arrow" />
					</div>
				</div>
			</div>
		</div>
		<div v-if="!price" class="price-section">
			<div class="price-container">
				<div class="context">All for the following price:</div>
				<div class="context price">USD 150.00</div>
				<div class="redirect" @click="scrollToContact()">
					<img :src="ARROW_DIAGONAL" alt="Arrow" />
				</div>
			</div>
		</div>
		<div v-if="price" class="place-container">
			<div class="place">
				<div class="place-name">Cave Pool</div>
				<img :src="CAVE" alt="Cave Pool" />
			</div>
			<div class="place">
				<div class="place-name">Alto Vista Chapel</div>
				<img :src="CHAPEL" alt="Alto Vista Chapel" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { VEHICLE, DURATION, CAR, LIST, ARROW_DIAGONAL, CAVE, CHAPEL, LIGHTHOUSE, LINE } from '@/utils/media';

const price = ref(false);
const windowWidth = ref(window.innerWidth);

/**
 * Maneja el scroll hacia la sección de contacto.
 */
const scrollToContact = () => {
	const section = document.getElementById('contact');
	if (section) {
		section.scrollIntoView({ behavior: 'smooth' });
	}
};

/**
 * Actualiza el ancho de la ventana.
 */
const updateWindowWidth = () => {
	windowWidth.value = window.innerWidth;
};

/**
 * Captura el cambio en el ancho de la ventana.
 */
watch(windowWidth, (value) => {
	price.value = value >= 472;
});

/**
 * Asigna la imagen de las olas dependiendo del ancho de la ventana.
 */
onMounted(() => {
	price.value = window.innerWidth >= 472;
	window.addEventListener('resize', updateWindowWidth);
});
onUnmounted(() => {
	window.removeEventListener('resize', updateWindowWidth);
});
</script>

<style scoped>
.slide {
	display: flex;
	flex-direction: column;
	position: relative;
	width: 100%;
	height: 592px;
	background: #f1f1f1;
	border-radius: 50px;
	padding: 50px;
	/* gap: 50px; */
	z-index: 5;
}

.header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.container {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.text-container {
	display: flex;
	flex-direction: column;
	width: 283px;
	height: fit-content;
}

.title {
	position: relative;
	font-family: 'Stolzl Regular';
	font-size: 20px;
	color: #292b2e;
	left: 8px;
	z-index: 7;
}

.highlight {
	position: relative;
	width: 172.5px;
	height: 28.75px;
	top: -31px;
	background: #ffffff;
	border-radius: 50px;
	transform: rotate(-1deg);
	z-index: 6;
}

.description {
	font-family: 'BR Omny Regular';
	width: 750px;
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

.row-2 {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.column-2 {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	position: relative;
	top: -30px;
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

.image-container img {
	width: 205px;
}

.place-container {
	display: flex;
	flex-direction: row;
	justify-content: center;
	position: relative;
	width: 100%;
	height: 139px;
	top: 50px;
	gap: 60px;
	z-index: 5;
	margin-bottom: 20px;
}

.place {
	display: flex;
	flex-direction: column;
	position: relative;
	width: 100%;
	height: 100%;
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

@media (max-width: 1100px) {
	.header {
		gap: 50px;
	}

	.description {
		position: relative;
		top: -20px;
		width: 100%;
		font-size: 14px;
	}
}

@media (max-width: 1000px) {
	.header {
		gap: 30px;
	}

	.description {
		margin-bottom: 10px;
	}

	.specifics {
		gap: 20px;
	}

	.section img {
		width: 22px;
		height: 22px;
	}

	.name,
	.quantity {
		font-size: 12px;
	}

	.requirements {
		position: relative;
		left: -20px;
	}

	.price-container {
		justify-content: left;
		width: 255px;
		height: 81px;
		border-radius: 20px;
		padding: 13px 20px;
	}

	.context {
		font-size: 14px;
	}

	.context.price {
		font-size: 24px;
	}

	.redirect {
		width: 31px;
		height: 31px;
		top: 39px;
		left: 215px;
	}

	.place-container {
		justify-content: space-between;
		top: 20px;
		gap: 30px;
	}

	.place-name {
		font-size: 16px;
	}
}

@media (max-width: 600px) {
	.description {
		font-size: 12px;
	}

	.price-container {
		width: 200px;
		height: 65px;
		padding: 10px 15px;
	}

	.context {
		font-size: 12px;
	}

	.context.price {
		font-size: 20px;
	}

	.redirect {
		display: none;
	}
}

@media (max-width: 500px) {
	.row-2 {
		gap: 30px;
	}

	.column-2 {
		justify-content: center;
		align-items: end;
	}
	.image-container img {
		width: 200px;
	}
}

@media (max-width: 472px) {
	.description {
		line-height: 140%;
	}

	.image-container img {
		width: 150px;
	}

	.column-2 {
		position: absolute;
		top: 200px;
		right: 0px;
		gap: 20px;
	}

	.price-section {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin-top: 30px;
	}

	.price-container {
		justify-content: left;
		width: 100%;
		height: 81px;
		border-radius: 20px;
		padding: 13px 20px;
	}

	.context {
		font-size: 14px;
	}

	.context.price {
		font-size: 24px;
	}

	.redirect {
		display: flex;
		width: 31px;
		height: 31px;
		top: 39px;
		left: 248px;
	}

	.place-container {
		justify-content: space-between;
		top: 20px;
		gap: 30px;
	}

	.place {
		position: relative;
		width: 130px;
		height: 130px;
		right: 20px;
	}

	.place-name {
		font-size: 12px;
		padding: 20px;
	}
}
</style>
