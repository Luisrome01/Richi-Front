<template>
	<Menu />
	<Welcome />
	<div id="tours">
		<Tours />
	</div>
	<div id="gallery">
		<Gallery />
	</div>
	<div id="contact">
		<Contact />
	</div>
	<div id="reviews">
		<Reviews />
	</div>
	<Footer />
</template>

<script setup>
import Menu from './components/Menu.vue';
import Welcome from '@/views/Welcome.vue';
import Tours from '@/views/tours/Tours.vue';
import Gallery from '@/views/Gallery.vue';
import Contact from '@/views/Contact.vue';
import Reviews from '@/views/Reviews.vue';
import Footer from './components/Footer.vue';
</script>
