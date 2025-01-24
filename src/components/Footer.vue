<template>
	<div class="footer-container">
		<img :src="ICON_PNG" alt="icon" />
	</div>
</template>

<script setup>
import { ICON_PNG } from '@/utils/media';
</script>

<style scoped>
.footer-container {
	position: relative;
	width: 100%;
	height: 190px;
	padding: 70px;
	background: #005c99;
	border-radius: 80px 80px 0px 0px;
}

img {
	width: 86px;
}
</style>
