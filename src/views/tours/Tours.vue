<template>
	<div class="tours-container">
		<Slider :step="step">
			<div v-if="step === 1">
				<Small v-if="size === 'small'" />
				<Medium v-if="size === 'medium'" />
				<Big v-if="size === 'big'" />
			</div>
			<div v-else-if="step === 2" class="slide">
				<TwoSeater />
			</div>
			<div v-else-if="step === 3" class="slide">
				<FourSeater />
			</div>
		</Slider>
	</div>
	<div class="slider-control">
		<ArrowControl @prev="changeSlide('prev')" @next="changeSlide('next')" />
	</div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import Small from './responsive/Small.vue';
import Medium from './responsive/Medium.vue';
import Big from './responsive/Big.vue';

import TwoSeater from './TwoSeater.vue';
import FourSeater from './FourSeater.vue';
import { Slider, ArrowControl } from '@/components';

const step = ref(1);

const size = ref('big');
const windowWidth = ref(window.innerWidth);

const changeSlide = (direction) => {
	if (direction === 'prev' && step.value > 1) {
		step.value--;
	} else if (direction === 'next' && step.value < 3) {
		step.value++;
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
	if (value <= 700) {
		size.value = 'small';
	} else if (value <= 1200) {
		size.value = 'medium';
	} else {
		size.value = 'big';
	}
});

/**
 * Asigna la imagen de las olas dependiendo del ancho de la ventana.
 */
onMounted(() => {
	if (window.innerWidth <= 700) {
		size.value = 'small';
	} else if (value <= 1200) {
		size.value = 'medium';
	} else {
		size.value = 'big';
	}
	window.addEventListener('resize', updateWindowWidth);
});
onUnmounted(() => {
	window.removeEventListener('resize', updateWindowWidth);
});
</script>

<style scoped>
.tours-container {
	width: 100%;
	height: 114vh;
	padding: 33px;
	position: relative;
	overflow: hidden;
}

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

.slider-control {
	display: flex;
	justify-content: center;
	position: relative;
	width: 100%;
	bottom: 30px;
}

@media (max-width: 700px) {
	.tours-container {
		padding: 20px;
	}

	.slide {
		height: 100%;
		border-radius: 30px;
		padding: 30px;
	}
}
</style>
