<template>
	<div class="tours-container">
		<Slider :step="step">
			<template v-for="(tour, index) in toursData" :key="index">
				<div v-if="step === tour.value">
					<Small v-if="size === 'small'" :options="tour" />
					<Medium v-if="size === 'medium'" :options="tour" />
					<Big v-if="size === 'big'" :options="tour" />
				</div>
			</template>
		</Slider>
	</div>
	<div class="slider-control">
		<ArrowControl @prev="changeSlide('prev')" @next="changeSlide('next')" />
	</div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { Slider, ArrowControl } from '@/components';
import Small from './responsive/Small.vue';
import Medium from './responsive/Medium.vue';
import Big from './responsive/Big.vue';
import tours from '@/utils/tours.json';

const toursData = ref(tours);

const step = ref(1);

const size = ref('big');
const windowWidth = ref(window.innerWidth);

const changeSlide = (direction) => {
	if (direction === 'prev' && step.value > 1) {
		step.value--;
	} else if (direction === 'next' && step.value < toursData.value.length) {
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
	} else if (window.innerWidth <= 1200) {
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
	height: 100vh;
	padding: 33px;
	position: relative;
	overflow: hidden;
}

.slider-control {
	display: flex;
	justify-content: center;
	position: relative;
	width: 100%;
	bottom: 30px;
}

@media (max-width: 745px) {
	.tours-container {
		height: 108vh;
	}
}

@media (max-width: 700px) {
	.tours-container {
		height: 100vh;
	}
}

@media (max-width: 530px) {
	.tours-container {
		height: 95vh;
		padding: 20px;
	}
}

@media (max-width: 522px) {
	.tours-container {
		height: 105vh;
	}
}

@media (max-width: 500px) {
	.tours-container {
		height: 85vh;
	}
}

@media (max-width: 472px) {
	.tours-container {
		height: 90vh;
	}
}

@media (max-width: 400px) {
	.tours-container {
		margin-bottom: 20px;
	}
}

@media (max-width: 376px) {
	.tours-container {
		height: 105vh;
	}
}

@media (max-width: 363px) {
	.tours-container {
		height: 90vh;
	}
}
</style>
