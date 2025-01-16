<template>
	<div class="controls-container">
		<div class="control" @click="prev">
			<img :src="ARROW_LEFT" alt="Prev" />
		</div>
		<div class="control next" @click="next">
			<img :src="ARROW_LEFT" alt="Next" />
		</div>
	</div>
</template>

<script setup>
import { ARROW_LEFT } from '@/utils/media';

const emit = defineEmits(['prev', 'next']);

const prev = () => emit('prev');
const next = () => emit('next');
</script>

<style scoped>
.controls-container {
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	gap: 18px;
	z-index: 6;
}

.control {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 57px;
	height: 57px;
	border-radius: 100%;
	background: linear-gradient(135deg, #ffffff 100%, #ededed 0%);
	box-shadow:
		-9px 9px 18px rgba(224, 224, 224, 0.2),
		9px -9px 18px rgba(224, 224, 224, 0.2),
		-9px -9px 18px rgba(255, 255, 255, 0.9),
		9px 9px 23px rgba(224, 224, 224, 0.9),
		inset 1px 1px 2px rgba(255, 255, 255, 0.3),
		inset -1px -1px 2px rgba(224, 224, 224, 0.5);
	cursor: pointer;
}

.control img {
	width: 24px;
	height: 24px;
	transform: rotate(0deg);
}

.next {
	background: #005c99;
	box-shadow:
		1px 1px 2px rgba(0, 101, 168, 0.3),
		-1px -1px 2px rgba(0, 83, 138, 0.5),
		inset -5px 5px 10px rgba(0, 83, 138, 0.2),
		inset 5px -5px 10px rgba(0, 83, 138, 0.2),
		inset -5px -5px 10px rgba(0, 101, 168, 0.9),
		inset 5px 5px 13px rgba(0, 83, 138, 0.9);
}

.control.next img {
	transform: rotate(180deg);
	filter: invert(1) brightness(255%) contrast(100%) grayscale(0);
}
</style>
