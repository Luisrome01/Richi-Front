<template>
	<div class="tours-container">
		<Slider :step="step">
			<div v-if="step === 1" class="slide">
				<SingleTour />
			</div>
			<div v-else-if="step === 2" class="slide">
				<NewTour />
			</div>
		</Slider>
	</div>
	<div class="slider-control">
		<ArrowControl @prev="changeSlide('prev')" @next="changeSlide('next')" />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import SingleTour from './SingleTour.vue';
import NewTour from './NewTour.vue';
import { Slider, ArrowControl } from '@/components';

const step = ref(1);

const changeSlide = (direction) => {
	if (direction === 'prev') {
		step.value = step.value === 1 ? 1 : step.value - 1;
	} else {
		step.value = step.value === 2 ? 2 : step.value + 1;
	}
};
</script>

<style scoped>
.tours-container {
	width: 100%;
	height: 100vh;
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
	gap: 50px;
	z-index: 5;
}

.slider-control {
	display: flex;
	justify-content: center;
	position: relative;
	width: 100%;
	bottom: 30px;
}
</style>
