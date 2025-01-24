<template>
	<transition :name="animation" mode="out-in">
		<slot :key="currentStep"></slot>
	</transition>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
	step: {
		type: Number,
		required: true,
	},
});

const currentStep = ref(props.step);
const animation = ref('slide-left');

watch(
	() => props.step,
	(newStep, oldStep) => {
		currentStep.value = newStep;

		if (newStep > oldStep) {
			animation.value = 'slide-left';
		} else {
			animation.value = 'slide-right';
		}
	},
);
</script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active {
	transition:
		transform 0.3s ease,
		opacity 0.3s ease;
}
.slide-left-enter-from {
	transform: translateX(100%);
	opacity: 0;
}
.slide-left-enter-to {
	transform: translateX(0);
	opacity: 1;
}
.slide-left-leave-from {
	transform: translateX(0);
	opacity: 1;
}
.slide-left-leave-to {
	transform: translateX(-100%);
	opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
	transition:
		transform 0.3s ease,
		opacity 0.3s ease;
}
.slide-right-enter-from {
	transform: translateX(-100%);
	opacity: 0;
}
.slide-right-enter-to {
	transform: translateX(0);
	opacity: 1;
}
.slide-right-leave-from {
	transform: translateX(0);
	opacity: 1;
}
.slide-right-leave-to {
	transform: translateX(100%);
	opacity: 0;
}
</style>
