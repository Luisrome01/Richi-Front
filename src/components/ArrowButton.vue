<template>
	<div class="redirect" @click="handleClick">
		<div class="subtitle">{{ subtitle }}</div>
		<img :src="arrowImage" alt="Arrow" />
	</div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

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

const emit = defineEmits(['submit']);

const handleClick = () => {
	emit('submit');
};
</script>

<style scoped>
.redirect {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 170px;
	height: 42px;
	background: #005c99;
	border-radius: 50px;
	cursor: pointer;
}

.subtitle {
	font-family: 'Outfit';
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

@media (max-width: 500px) {
	.subtitle {
		font-size: 12px;
	}

	.redirect {
		width: 150px;
		height: 42px;
	}
}
</style>
