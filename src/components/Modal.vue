<template>
	<div class="modal-overlay" v-if="modelValue" @click="closeModal">
		<div class="modal-content" :style="width ? { width } : {}" @click.stop>
			<button @click="closeModal" class="close-button">
				<img :src="CLOSE" alt="Close" />
			</button>
			<div class="modal-title">{{ title }}</div>
			<div class="modal-description">{{ description }}</div>
			<div class="modal-body">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script setup>
import { defineEmits, watch, toRefs } from 'vue';
import { CLOSE } from '@/utils/media';

const props = defineProps({
	modelValue: {
		type: Boolean,
		required: true,
	},
	title: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	width: {
		type: String,
		required: false,
	},
});

const { modelValue } = toRefs(props);

const emit = defineEmits(['update:modelValue']);

const closeModal = () => {
	emit('update:modelValue', false);
};

watch(
	() => modelValue,
	(newVal) => {
		document.body.style.overflow = newVal ? 'hidden' : '';
	},
);
</script>

<style scoped>
.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	backdrop-filter: blur(5px);
	z-index: 1000;
}

.modal-content {
	position: absolute;
	background: #ffffff;
	border-radius: 50px;
	display: flex;
	flex-direction: column;
	padding: 42px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.close-button {
	position: absolute;
	width: 40px;
	height: 40px;
	right: 42px;
	top: 42px;
	background: #f1f1f1;
	border-radius: 50%;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 12;
}

.close-button img {
	width: 20px;
	height: 20px;
}

.modal-title {
	position: relative;
	width: 100%;
	font-family: 'Stolzl Medium';
	font-size: 25px;
	color: #005c99;
}

.modal-description {
	position: relative;
	max-width: 661px;
	font-family: 'Stolzl Regular';
	font-size: 15px;
	color: #292b2e;
	padding-right: 50px;
	margin-top: 5px;
}

.modal-body {
	margin-top: 15px;
}
</style>
