<template>
	<div class="header">
		<div class="overlay"></div>
		<video autoplay loop muted>
			<source :src="VIDEO_EXAMPLE" type="video/mp4" />
			Tu navegador no soporta el formato de video.
		</video>
	</div>
	<div id="about-us" class="wave-container">
		<div class="about-us-container">
			<div class="gif-container">
				<img :src="ABOUT_US" alt="Images" />
			</div>
			<div class="info-container">
				<div class="title">About us</div>
				<div class="description">
					<p>
						Hi, I'm Richi. My family and I started this company driven by our
						<span class="highlighted">passion</span> for Aruba and our desire to share its beauty with you.
					</p>
					<p>We <span class="highlighted">want</span> your experience to be unforgettable, so we dedicate ourselves to creating unique tours with personalized and friendly service.</p>
					<p>We <span class="highlighted">believe</span> that traveling is more than just visiting new places, it's about connecting with people and with yourself.</p>
					<p>Scroll down to discover everything we have to offer!</p>
				</div>
			</div>
		</div>
		<img :src="wavesBg" alt="Wave" />
		<div class="wave-end">
			<img src="/images/noise.png" alt="" />
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { VIDEO_EXAMPLE, WAVES, WAVES_2, ABOUT_US } from '@/utils/media';

const windowWidth = ref(window.innerWidth);
const wavesBg = ref();

/**
 * Actualiza el ancho de la ventana.
 */
const updateWindowWidth = () => {
	windowWidth.value = window.innerWidth;
};

/**
 * Captura el cambio en el ancho de la ventana.
 */
watch(windowWidth, (value) => {
	wavesBg.value = value < 801 ? WAVES_2 : WAVES;
});

/**
 * Asigna la imagen de las olas dependiendo del ancho de la ventana.
 */
onMounted(() => {
	wavesBg.value = window.innerWidth < 801 ? WAVES_2 : WAVES;
	window.addEventListener('resize', updateWindowWidth);
});
onUnmounted(() => {
	window.removeEventListener('resize', updateWindowWidth);
});
</script>

<style scoped>
.overlay {
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #00000044;
	z-index: -5;
}

.header {
	position: relative;
	width: 100%;
	height: 100vh;
	overflow: hidden;
}

.header video {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: -10;
	background-color: #333333;
}

.wave-container {
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	position: relative;
	width: 100%;
	height: auto;
	overflow: hidden;
	margin-top: -140px;
}

.wave-container img {
	width: 100%;
	height: auto;
	display: block;
}

.wave-end {
	position: relative;
	top: -10px;
	width: 100%;
	height: 89px;
}

.wave-end img {
	width: 100%;
	height: 100%;
	border-radius: 0px 0px 80px 80px;
}

.about-us-container {
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 690px;
	gap: 90px;
	margin-bottom: 40px;
}

.gif-container {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 667px;
	height: 450px;
	left: 28px;
	top: 24px;
	background: rgba(255, 255, 255, 0.11);
	border: 1px solid rgba(255, 255, 255, 0.01);
	backdrop-filter: blur(12.9px);
	border-radius: 50px;
}

.gif-container img {
	width: 612px;
	height: 401px;
	border-radius: 30px;
}

.info-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 435px;
	gap: 20px;
}

.title {
	font-family: 'Outfit';
	font-size: 40px;
	color: #ffffff;
}

.description {
	font-family: 'Outfit';
	font-size: 18px;
	line-height: 22px;
	text-align: justify;
	color: #ffffff;
	z-index: 10;
}

.description p {
	margin: 0 0 16px 0;
}

.highlighted {
	font-family: 'Outfit';
}

@media (max-width: 1300px) {
	.about-us-container {
		height: 500px;
	}

	.gif-container {
		width: 442.5px;
		height: 300px;
		border-radius: 44px;
	}

	.gif-container img {
		width: 405px;
		height: 265.5px;
		border-radius: 30px;
	}
}

@media (max-width: 1100px) {
	.about-us-container {
		height: 400px;
	}

	.gif-container {
		width: 295px;
		height: 200px;
		border-radius: 44px;
	}

	.gif-container img {
		width: 270px;
		height: 177px;
		border-radius: 30px;
	}

	.title {
		font-size: 30px;
	}

	.description {
		font-size: 15px;
	}
}

@media (max-width: 900px) {
	.about-us-container {
		height: auto;
		gap: 50px;
	}

	.info-container {
		width: 330px;
	}

	.title {
		font-size: 28px;
	}

	.description {
		font-size: 14px;
	}

	.description p {
		margin: 0 0 12px 0;
	}
}

@media (max-width: 800px) {
	.about-us-container {
		height: 800px;
		flex-direction: column;
	}

	.wave-end {
		top: -20px;
	}
}

@media (max-width: 700px) {
	.about-us-container {
		height: 700px;
	}
}

@media (max-width: 600px) {
	.about-us-container {
		height: 600px;
	}

	.description {
		font-size: 12px;
	}

	.description p {
		margin: 0;
	}
}

@media (max-width: 500px) {
	.about-us-container {
		height: 500px;
		gap: 20px;
	}

	.info-container {
		width: 100%;
		padding-left: 30px;
		padding-right: 30px;
	}

	.title {
		font-size: 20px;
	}

	.description {
		font-size: 15px;
	}

	.description p {
		margin: 0 0 12px 0;
	}

	.wave-end img {
		border-radius: 0px 0px 40px 40px;
	}
}

@media (max-width: 400px) {
	.about-us-container {
		height: 450px;
	}

	.info-container {
		gap: 10px;
	}

	.title {
		font-size: 20px;
	}

	.description {
		font-size: 10px;
	}

	.description p {
		line-height: 190%;
		margin: 0;
	}
}

@media (max-width: 325px) {
	.about-us-container {
		height: 350px;
	}

	.description {
		font-size: 10px;
	}
}
</style>
