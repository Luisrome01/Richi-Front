<template>
	<div class="slide">
		<div class="header">
			<div class="container">
				<div class="text-container">
					<div class="title">{{ options.title }}</div>
					<div class="highlight"></div>
				</div>
				<div class="description">{{ options.description }}</div>
			</div>
		</div>
		<div class="row-2">
			<div class="specifics">
				<div class="section">
					<img :src="DURATION" alt="Clock" />
					<div class="section-text">
						<div class="name">Duration</div>
						<div class="quantity">{{ options.duration }} hours</div>
					</div>
				</div>
				<div class="section">
					<img :src="CAR" alt="Clock" />
					<div class="section-text">
						<div class="name">Departure times</div>
						<div class="quantity" v-for="(departure, index) in options.departures" :key="index">
							{{ departure }}
						</div>
					</div>
				</div>
				<div class="section">
					<img :src="LIST" alt="Clock" />
					<div class="section-text">
						<div class="name">Requirements</div>
						<div class="quantity" v-for="(requirement, index) in options.requirements" :key="index">
							{{ requirement }}
						</div>
					</div>
				</div>
			</div>
			<div class="column-2">
				<div class="image-container">
					<img :src="VEHICLE" alt="ATV" />
				</div>
				<div v-if="!price" class="place">
					<div class="place-name">{{ formattedOptions.locations[0].option }}</div>
					<img :src="formattedOptions.locations[0].icon" alt="Cave Pool" />
				</div>
				<div v-if="price" class="price-container">
					<div class="context">All for the following price:</div>
					<div class="context price">USD {{ options.price }}</div>
					<div class="redirect" @click="scrollToContact()">
						<img :src="ARROW_DIAGONAL" alt="Arrow" />
					</div>
				</div>
			</div>
		</div>
		<div v-if="!price" class="price-section">
			<div class="price-container">
				<div class="context">All for the following price:</div>
				<div class="context price">USD {{ options.price }}</div>
				<div class="redirect" @click="scrollToContact()">
					<img :src="ARROW_DIAGONAL" alt="Arrow" />
				</div>
			</div>
		</div>
		<div v-if="price" class="place-container">
			<div v-for="(location, index) in formattedOptions.locations" :key="index" :class="['place', location.placeClass]">
				<div class="place-name">{{ location.option }}</div>
				<img :src="location.icon" :alt="location.option" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, defineProps, toRefs, watch, onMounted, onUnmounted } from 'vue';
import { VEHICLE, DURATION, CAR, LIST, ARROW_DIAGONAL } from '@/utils/media';
import { formatOptions } from '@/utils/helpers';

const props = defineProps({
	options: Object,
});

const { options } = toRefs(props);
const formattedOptions = ref(formatOptions(options.value));

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
	price.value = value >= 501;
});

/**
 * Asigna la imagen de las olas dependiendo del ancho de la ventana.
 */
onMounted(() => {
	price.value = window.innerWidth >= 501;
	window.addEventListener('resize', updateWindowWidth);
	formattedOptions.value.locations.pop();
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
	width: fit-content;
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
	width: calc(100% + 16px);
	height: 28.75px;
	top: -31px;
	background: #ffffff;
	border-radius: 50px;
	transform: rotate(-1deg);
	z-index: 6;
}

.description {
	font-family: 'Stolzl Regular';
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
	font-family: 'Stolzl Medium';
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

@media (max-width: 501px) {
	.slide {
		padding: 30px;
	}

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
		width: 290px;
		height: 81px;
		border-radius: 20px;
		padding: 13px 20px;
		margin-top: 20px;
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

@media (max-width: 405px) {
	.price-container {
		margin-top: 0;
	}
}

@media (max-width: 370px) {
	.redirect {
		display: none;
	}

	.image-container {
		display: none;
	}

	.place {
		display: none;
	}
}

@media (max-width: 346px) {
	.price-container {
		height: 75px;
	}

	.context {
		font-size: 12px;
	}

	.context.price {
		font-size: 20px;
	}
}
</style>
