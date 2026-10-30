<script setup>
import {ref,inject} from 'vue'
import {LOGO_PNG} from '@/utils/media'
const {locale,setLocale}=inject('richiLocale')
const open=ref(false)
const t=(en,es)=>locale.value==='es'?es:en
</script>
<template>
<header class="nav"><a href="#home" class="brand"><img :src="LOGO_PNG" alt="Richi Tours Rental"/></a><button class="toggle" type="button" :aria-expanded="open" aria-controls="navlinks" aria-label="Toggle menu" @click="open=!open">☰</button>
<nav id="navlinks" :class="{open}"><a href="#about-us" @click="open=false">{{t('About us','Nosotros')}}</a><a href="#tours" @click="open=false">{{t('Tours','Excursiones')}}</a><a href="#destinations" @click="open=false">{{t('Explore Aruba','Explora Aruba')}}</a><a href="#gallery" @click="open=false">{{t('Gallery','Galería')}}</a><div class="lang"><button type="button" :class="{active:locale==='en'}" @click="setLocale('en')">EN</button> / <button type="button" :class="{active:locale==='es'}" @click="setLocale('es')">ES</button></div><a class="book" href="#contact" @click="open=false">{{t('Book now','Reservar')}}</a></nav></header>
</template>
<style scoped>
.nav{height:82px;position:fixed;z-index:999;inset:0 0 auto;display:flex;align-items:center;justify-content:space-between;padding:12px clamp(18px,4vw,60px);background:#062f45ef;backdrop-filter:blur(16px);box-shadow:0 4px 22px #001e3030}.brand img{width:clamp(140px,18vw,230px);max-height:57px;object-fit:contain}nav{display:flex;gap:clamp(10px,1.7vw,26px);align-items:center}nav>a{color:white;text-decoration:none;white-space:nowrap;font-size:14px;font-weight:600}nav>a:hover{color:#71d9d8}.book{padding:12px 18px;background:#f5ac55;color:#17394b!important;border-radius:50px}.lang{white-space:nowrap;color:#c2d7da}.lang button{border:0;background:none;color:#a9c4c9;cursor:pointer;font:inherit;font-size:13px}.lang button.active{color:white;font-weight:800;text-decoration:underline;text-underline-offset:5px}.toggle{display:none;background:transparent;border:1px solid #ffffff80;color:white;border-radius:9px;padding:6px 12px;font-size:24px;cursor:pointer}
@media(max-width:1050px){.toggle{display:block}nav{display:none;position:absolute;top:82px;left:0;right:0;background:#06354b;padding:23px;flex-direction:column;align-items:stretch;gap:20px;box-shadow:0 12px 20px #001e3038}nav.open{display:flex}.lang{text-align:center}.book{text-align:center}}
</style>