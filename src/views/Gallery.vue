<template>
	<div class="image-container">
		<div class="highlight"></div>
		<div class="title">Let the pictures transport you</div>
		<div class="images">
			<div class="image-card">
				<img :src="GALLERY_1" alt="Gallery 1" />
			</div>
			<div class="image-card">
				<img :src="GALLERY_2" alt="Gallery 2" />
			</div>
			<div class="image-card">
				<img :src="GALLERY_3" alt="Gallery 3" />
			</div>
			<div class="image-card">
				<img :src="GALLERY_4" alt="Gallery 4" />
			</div>
			<div class="image-card">
				<img :src="GALLERY_5" alt="Gallery 5" />
			</div>
			<div class="image-card">
				<img :src="GALLERY_6" alt="Gallery 6" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { Modal } from '@/components';
import { GALLERY_1, GALLERY_2, GALLERY_3, GALLERY_4, GALLERY_5, GALLERY_6 } from '@/utils/media';
</script>

<style scoped>
.image-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: fit-content;
	padding: 60px 33px;
}

.highlight {
	position: relative;
	width: 250px;
	height: 66px;
	left: 98px;
	top: -8px;
	background: #f1f1f1;
	border-radius: 50px;
	transform: rotate(-1deg);
}

.title {
	position: absolute;
	width: 473px;
	height: 107px;
	font-family: 'Stolzl Medium';
	font-size: 48px;
	line-height: 104%;
	text-align: center;
	color: #005c99;
}

.images {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-content: center;
	grid-gap: 40px;
	padding-top: 90px;
}

.image-card {
	display: flex;
	flex-direction: column;
	width: 100%;
	/* min-width: 405px; */
	height: 219px;
	border-radius: 30px;
	transition: transform 0.3s ease;
}

.image-card:hover {
	transform: scale(1.05);
}

img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 30px;
}

@media (max-width: 800px) {
	.images {
		grid-template-columns: repeat(2, 1fr);
	}

	.title {
		font-size: 38px;
	}

	.highlight {
		width: 200px;
		height: 56px;
		left: 78px;
	}
}

@media (max-width: 600px) {
	.images {
		grid-gap: 20px;
	}
}

@media (max-width: 400px) {
	.images {
		grid-template-columns: repeat(1, 1fr);
	}

	.title {
		font-size: 34px;
	}

	.highlight {
		width: 180px;
		height: 56px;
		left: 70px;
	}
}
</style>
