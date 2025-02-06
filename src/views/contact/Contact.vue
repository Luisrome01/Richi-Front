<template>
	<Medium v-if="size === 'medium'" />
	<Big v-if="size === 'big'" />
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import Medium from './responsive/Medium.vue';
import Big from './responsive/Big.vue';

const size = ref('big');
const windowWidth = ref(window.innerWidth);

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
	if (value <= 1120) {
		console.log('medium');
		size.value = 'medium';
	} else {
		size.value = 'big';
	}
});

/**
 * Asigna la imagen de las olas dependiendo del ancho de la ventana.
 */
onMounted(() => {
	if (windowWidth <= 1120) {
		size.value = 'medium';
	} else {
		size.value = 'big';
	}
	window.addEventListener('resize', updateWindowWidth);
});
onUnmounted(() => {
	window.removeEventListener('resize', updateWindowWidth);
});
</script>
