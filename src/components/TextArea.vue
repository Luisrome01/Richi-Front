<template>
	<textarea :placeholder="placeholder" :class="['text-area', attrs.class]" v-bind="textAreaAttrs" :value="modelValue" @input="onInput"></textarea>
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

const textAreaAttrs = computed(() => {
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
.text-area {
	display: flex;
	align-items: flex-start;
	height: 138px;
	border: 1.5px solid #bebebe;
	border-radius: 30px;
	padding: 20px;
	font-family: 'Outfit';
	font-weight: 400;
	font-size: 16px;
	color: #292b2e;
	resize: none;
	outline: none;
	background: transparent;
	box-sizing: border-box;
}

.text-area::placeholder {
	color: #292b2e80;
}

@media (max-width: 700px) {
	.text-area {
		height: 108px;
		font-size: 12px;
	}
}

@media (max-width: 500px) {
	.text-area {
		height: 82px;
		font-size: 11px;
		border-radius: 20px;
	}
}
</style>
