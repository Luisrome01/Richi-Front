<template>
	<input :placeholder="placeholder" class="input" v-bind="$attrs" />
</template>

<script>
import { defineProps } from 'vue';

defineProps({
	placeholder: {
		type: String,
		default: '',
	},
});
</script>

<style scoped>
.input {
	max-width: 349px;
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
