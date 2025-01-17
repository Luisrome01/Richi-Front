<template>
	<input
		:placeholder="placeholder"
		:class="['input', $attrs.class]"
		v-bind="inputAttrs"
		v-model="modelValue"
	/>
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

const inputAttrs = computed(() => {
	// Filtramos atributos no relevantes para evitar conflictos.
	return { ...$attrs, class: undefined };
});
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
