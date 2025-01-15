<template>
	<textarea
		:placeholder="placeholder"
		:class="['text-area', $attrs.class]"
		v-bind="textAreaAttrs"
		v-model="modelValue"
	></textarea>
</template>

<script>
import { defineProps, defineEmits, computed } from 'vue';

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

const textAreaAttrs = computed(() => {
	// Filtramos atributos no relevantes para evitar conflictos.
	return { ...$attrs, class: undefined };
});
</script>

<style scoped>
.text-area {
	display: flex;
	align-items: flex-start;
	max-width: 732px;
	height: 138px;
	border: 1.5px solid #bebebe;
	border-radius: 30px;
	padding: 20px;
	font-family: 'Stolzl Regular';
	font-size: 14px;
	color: #292b2e;
	resize: none;
	outline: none;
	background: transparent;
	box-sizing: border-box;
}

.text-area::placeholder {
	color: #292b2e80;
}
</style>
