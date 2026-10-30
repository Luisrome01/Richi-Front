<script setup>
import {ref,provide} from 'vue'
import Menu from './components/Menu.vue'
import Welcome from './views/Welcome.vue'
import Tours from './views/tours/Tours.vue'
import Gallery from './views/Gallery.vue'
import Contact from './views/contact/ContactNew.vue'
import Footer from './components/Footer.vue'
import Destinations from './views/Destinations.vue'
const locale=ref(localStorage.getItem('richi-language')==='es'?'es':'en')
function setLocale(lang){locale.value=lang;localStorage.setItem('richi-language',lang);document.documentElement.lang=lang}
provide('richiLocale',{locale,setLocale})
</script>
<template>
<Menu/><main><Welcome/><section id="tours"><Tours/></section><Destinations/><section id="gallery"><Gallery/></section><section id="contact"><Contact/></section></main><Footer/>
</template>
<style>
html{scroll-behavior:smooth;scroll-padding-top:85px}
body{background:#f9faf7;color:#17394b}
main{overflow:hidden}
section{scroll-margin-top:85px}
:focus-visible{outline:3px solid #f5ab51;outline-offset:3px}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*:before,*:after{animation:none!important;transition:none!important}}
</style>