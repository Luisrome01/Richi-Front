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

defineEmits(['update:modelValue']);

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
	font-family: 'Stolzl Regular';
	font-size: 14px;
	color: #292b2e;
	background: transparent;
	outline: none;
}

.input::placeholder {
	color: #292b2e80;
}
</style>
