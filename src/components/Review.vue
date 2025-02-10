<template>
	<div class="review-card">
		<div class="review-header">
			<div class="name">{{ name }}</div>
			<div class="star-rating">
				<span v-for="star in 5" :key="star" class="star" :class="{ selected: star <= rating }"> ★ </span>
			</div>
		</div>
		<div class="description">{{ description }}</div>
		<div class="date">{{ date }}</div>
	</div>
</template>

<script setup>
defineProps({
	name: {
		type: String,
		default: '',
	},
	rating: {
		type: Number,
		default: 0,
	},
	description: {
		type: String,
		default: '',
	},
	date: {
		type: String,
		default: '',
	},
});
</script>

<style scoped>
.review-card {
	display: flex;
	flex-direction: column;
	width: 405px;
	height: 219px;
	background: #f1f1f1;
	border-radius: 30px;
	padding: 28px 36px;
	gap: 15px;
}

.name {
	font-family: 'Outfit';
	font-size: 16px;
	color: #292b2e;
}

.star-rating {
	display: flex;
}

.star {
	font-size: 14px;
	color: #cccccc;
	transition: color 0.3s ease;
}

.star.selected {
	color: #005c99;
}

.description {
	font-family: 'Outfit';
	font-size: 14px;
	color: #292b2e;
	height: 70px;
	overflow: hidden;
}

.date {
	font-family: 'Outfit';
	font-size: 14px;
	color: rgba(41, 43, 46, 0.5);
	text-align: right;
}
</style>
