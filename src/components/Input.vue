<template>
	<input :placeholder="placeholder" :class="['input', attrs.class]" v-bind="inputAttrs" :value="modelValue" @input="onInput" />
</template>

<script setup>
import { defineProps, defineEmits, computed, useAttrs } from 'vue';

defineProps({
	modelValue: {
		type: String,
		default: '',
	},
	placeholder: {
		type: String,
		default: '',
	},
});

const emit = defineEmits(['update:modelValue']);

const attrs = useAttrs();

const inputAttrs = computed(() => {
	return { ...attrs, class: undefined };
});

/**
 * Emite un evento para actualizar el valor del modelo.
 */
const onInput = (event) => {
	emit('update:modelValue', event.target.value);
};
</script>

<style scoped>
.input {
	height: 64px;
	padding: 10px 20px;
	border: 1.5px solid #bebebe;
	border-radius: 100px;
	font-family: 'Outfit';
	font-weight: 400;
	font-size: 16px;
	color: #292b2e;
	background: transparent;
	outline: none;
}

.input::placeholder {
	color: #292b2e80;
}

@media (max-width: 700px) {
	.input {
		height: 51px;
		font-size: 12px;
	}
}

@media (max-width: 500px) {
	.input {
		height: 41px;
		font-size: 10px;
	}
}
</style>
