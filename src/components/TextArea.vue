<template>
	<textarea :placeholder="placeholder" class="text-area" v-bind="$attrs"></textarea>
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
