<template>
	<div class="extra-control">
		<div v-if="totalSteps" class="control-container">
			<span v-for="step in steps" :key="step" :class="['slide-control', { selected: step === currentStep }]" @click="setStep(step)"></span>
		</div>
		<slot></slot>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
	step: {
		type: Number,
		required: true,
	},
	totalSteps: {
		type: Number,
		required: false,
	},
});

const currentStep = ref(props.step);
const steps = computed(() => Array.from({ length: props.totalSteps }, (_, i) => i + 1));

const emit = defineEmits(['setStep']);

/**
 * Emite un evento para cambiar el paso actual.
 */
const setStep = (step) => {
	currentStep.value = step;
	emit('setStep', step);
};
</script>

<style scoped>
.extra-control {
	display: flex;
	flex-direction: row;
	justify-content: center;
}

.control-container {
	display: flex;
	justify-content: center;
	gap: 10px;
	margin-top: 20px;
}

.slide-control {
	width: 57px;
	height: 6px;
	background: #d9d9d9;
	border-radius: 100px;
	cursor: pointer;
	transition: background 0.3s ease;
}

.slide-control.selected {
	background: #005c99;
}
</style>
