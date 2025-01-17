<template>
	<div class="redirect" @click="handleClick">
		<div class="subtitle">{{ subtitle }}</div>
		<img :src="arrowImage" alt="Arrow" />
	</div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
	subtitle: {
		type: String,
		required: true,
	},
	arrowImage: {
		type: String,
		required: true,
	},
});

const emit = defineEmits(["submit"]);

const handleClick = () => {
	emit("submit");
};
</script>

<style scoped>
.redirect {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 199px;
	height: 42px;
	background: #005c99;
	border-radius: 50px;
	cursor: pointer;
}

.subtitle {
	font-family: 'Stolzl Regular';
	font-size: 14px;
	display: flex;
	align-items: center;
	text-align: center;
	color: #ffffff;
	margin-right: 10px;
}

.redirect img {
	width: auto;
	height: 20px;
	filter: none;
	fill: #ffffff;
}
</style>
