<template>
	<div class="tours-container">
		<Slider :step="step">
			<div v-if="step === 1" class="slide">
				<SingleTour />
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
import { ref } from 'vue';
import SingleTour from './SingleTour.vue';
import TwoSeater from './TwoSeater.vue';
import FourSeater from './FourSeater.vue';
import { Slider, ArrowControl } from '@/components';

const step = ref(1);

const changeSlide = (direction) => {
	if (direction === 'prev' && step.value > 1) {
		step.value--;
	} else if (direction === 'next' && step.value < 3) {
		step.value++;
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
