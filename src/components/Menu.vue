<template>
	<div class="background"></div>
	<div class="menu-container">
		<img :src="currentLogo" alt="logo" @click="scrollToTop" class="logo" />

		<button class="menu-button" @click="toggleMenu">☰</button>

		<div class="buttons-group" :class="{ active: menuOpen }">
			<div class="button-container" @click="scrollToSection('about-us'); closeMenu()">
				<div>About us</div>
			</div>
			<div class="button-container" @click="scrollToSection('tours'); closeMenu()">
				<div>Tours</div>
			</div>
			<div class="button-container" @click="scrollToSection('contact'); closeMenu()">
				<div>Contact us</div>
			</div>
			<div class="button-container highlighted" @click="scrollToSection('reviews'); closeMenu()">
				<div>Leave us a review</div>
				<img :src="ARROW_DIAGONAL" alt="Go" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { LOGO_PNG, ICON_PNG, ARROW_DIAGONAL } from '@/utils/media';

const currentLogo = ref(window.innerWidth > 730 ? LOGO_PNG : ICON_PNG);
const menuOpen = ref(false);

const updateLogo = () => {
	currentLogo.value = window.innerWidth > 730 ? LOGO_PNG : ICON_PNG;
};

/**
 * Alterna el menú en pantallas pequeñas.
 */
const toggleMenu = () => {
	menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
	menuOpen.value = false;
};

const handleClickOutside = (event) => {
	const menuContainer = document.querySelector('.menu-container');
	if (menuOpen.value && !menuContainer.contains(event.target)) {
		closeMenu();
	}
};

const scrollToSection = (sectionId) => {
	const section = document.getElementById(sectionId);
	if (section) {
		section.scrollIntoView({ behavior: 'smooth' });
	}
};

const scrollToTop = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Detectar cambios en el tamaño de pantalla
onMounted(() => {
	window.addEventListener('resize', updateLogo);
	document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
	window.removeEventListener('resize', updateLogo);
	document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.background {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 112.4px;
	background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.25) 48%, rgba(0, 0, 0, 0) 100%);
	z-index: 9;
}

.menu-container {
	position: fixed;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 35px 44px;
	z-index: 10;
}

.logo {
	cursor: pointer;
	transition: width 0.3s ease, height 0.3s ease;
}

/* Logo tamaño normal en escritorio */
@media (min-width: 769px) {
	.logo {
		width: 400px;
		height: auto;
	}
}

/* Logo más pequeño en móviles */
@media (max-width: 768px) {
	.logo {
		width: 120px;
		height: auto;
	}
}

.menu-button {
	display: none;
	background: none;
	border: none;
	font-size: 24px;
	color: white;
	cursor: pointer;
}

.buttons-group {
	display: flex;
	flex-direction: row;
	gap: 16px;
}

/* Animación del menú en móviles */
@media (max-width: 768px) {
	.menu-button {
		display: block;
	}

	.buttons-group {
		position: absolute;
		top: 80px;
		right: 20px;
		flex-direction: column;
		background: rgba(0, 0, 0, 0.8);
		border-radius: 10px;
		padding: 10px;
		display: flex;
		opacity: 0;
		transform: translateY(-10px);
		pointer-events: none;
		transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
	}

	.buttons-group.active {
		opacity: 1;
		transform: translateY(0);
		pointer-events: auto;
	}
}

/* Efecto de pulsación al hacer clic */
.button-container:active {
	transform: scale(0.95);
	transition: transform 0.1s ease-in-out;
}

.button-container {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 10px;
	width: 132px;
	height: 42px;
	background: rgba(68, 68, 68, 0.39);
	backdrop-filter: blur(10.2px);
	border-radius: 50px;
	font-family: 'Stolzl Regular';
	font-size: 14px;
	color: #ffffff;
	cursor: pointer;
	transition: all 0.5s;
}

.button-container:hover {
	background: rgba(68, 68, 68, 0.7);
}

.button-container.highlighted {
	min-width: 199px;
	min-height: 42px;
	background: #005c99;
	backdrop-filter: blur(10.2px);
	border-radius: 50px;
}

.button-container img {
	width: fit-content;
	height: 21px;
}

@media (max-width: 730px) {
	.logo {
		width: 80px;
		height: auto;
	}
}
</style>
