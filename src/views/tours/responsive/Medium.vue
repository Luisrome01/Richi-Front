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
			<div class="image-container">
				<img :src="formattedOptions.icon" alt="ATV" />
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
			</div>
			<div class="section requirements">
				<img :src="LIST" alt="Clock" />
				<div class="section-text">
					<div class="name">Requirements</div>
					<div class="quantity" v-for="(requirement, index) in options.requirements" :key="index">
						{{ requirement }}
					</div>
				</div>
			</div>
			<div class="price-container">
				<div class="context">All for the following price:</div>
				<div class="context price">USD {{ options.price }}</div>
				<div class="redirect" @click="scrollToContact()">
					<img :src="ARROW_DIAGONAL" alt="Arrow" />
				</div>
			</div>
		</div>
		<div class="place-container">
			<div v-for="(location, index) in formattedOptions.locations" :key="index" :class="['place', location.placeClass]">
				<div class="place-name">{{ location.option }}</div>
				<img :src="location.icon" :alt="location.option" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, defineProps, toRefs } from 'vue';
import { DURATION, CAR, LIST, ARROW_DIAGONAL } from '@/utils/media';
import { formatOptions } from '@/utils/helpers';

const props = defineProps({
	options: Object,
});

const { options } = toRefs(props);
const formattedOptions = ref(formatOptions(options.value));

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
}

.text-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: fit-content;
	height: fit-content;
}

.title {
	font-family: 'Outfit';
	font-size: 34px;
	line-height: 43px;
	color: #292b2e;
	z-index: 7;
}

.highlight {
	position: relative;
	width: calc(100% + 25px);
	height: 50px;
	top: -48px;
	background: #ffffff;
	border-radius: 50px;
	transform: rotate(-1deg);
	z-index: 6;
}

.description {
	font-family: 'Outfit';
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
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;
	color: #005c99;
}

.quantity {
	font-family: 'Outfit';
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
	font-family: 'Outfit';
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
	font-family: 'Outfit';
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
	width: 266px;
}

.place-container {
	display: flex;
	flex-direction: row;
	justify-content: center;
	position: relative;
	width: 100%;
	top: 50px;
	gap: 60px;
	z-index: 5;
}

.place {
	display: flex;
	flex-direction: column;
	position: relative;
	width: 224px;
	height: 199px;
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
	font-family: 'Outfit';
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
		font-size: 13px;
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
		top: 40px;
		gap: 30px;
	}

	.place-name {
		font-size: 16px;
	}
}

@media (max-width: 750px) {
	.price-container {
		width: 200px;
		height: 70px;
		padding: 10px 15px;
	}

	.context {
		font-size: 13px;
	}

	.context.price {
		font-size: 20px;
	}

	.redirect {
		display: none;
	}
}
</style>
