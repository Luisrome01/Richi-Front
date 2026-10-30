<script setup>
import {inject} from 'vue'
import {ICON_PNG} from '@/utils/media'
const {locale}=inject('richiLocale')
const t=(en,es)=>locale.value==='es'?es:en
</script>
<template><footer class="footer"><div class="inner"><div class="identity"><img :src="ICON_PNG" alt="Richi Tours Rental"/><p>{{t('Local adventures, unforgettable memories.','Aventuras locales, recuerdos inolvidables.')}}</p></div><div><b>{{t('Explore','Explorar')}}</b><a href="#tours">{{t('Our tours','Nuestros tours')}}</a><a href="#destinations">{{t('Discover Aruba','Descubre Aruba')}}</a><a href="#gallery">{{t('Gallery','Galería')}}</a></div><div><b>{{t('Get in touch','Contacto')}}</b><a href="mailto:richitoursrental@gmail.com">richitoursrental@gmail.com</a><a href="https://wa.me/2977404943" target="_blank" rel="noopener noreferrer">WhatsApp: +297 740 4943</a><a href="https://www.instagram.com/richi_toursrental/" target="_blank" rel="noopener noreferrer">Instagram</a></div></div><div class="end">© {{new Date().getFullYear()}} Richi Tours Rental · Aruba</div></footer></template>
<style scoped>.footer{background:#063d59;color:white;padding:60px 25px 25px}.inner{max-width:1250px;margin:auto;display:grid;grid-template-columns:2fr 1fr 1.5fr;gap:30px}.identity img{width:100px;max-height:90px;object-fit:contain}.identity p{margin-top:12px;color:#c5dce1}.inner>div{display:flex;flex-direction:column;align-items:flex-start;gap:14px}.inner b{margin:10px 0 5px}.inner a{color:#d7e6e8;text-decoration:none;font-size:14px;overflow-wrap:anywhere}.inner a:hover{color:#f5ac55}.end{max-width:1250px;margin:40px auto 0;padding-top:20px;border-top:1px solid #ffffff30;font-size:12px;color:#abcbd1}@media(max-width:700px){.inner{grid-template-columns:1fr 1fr}.identity{grid-column:1/-1}}@media(max-width:420px){.inner{grid-template-columns:1fr}}
@media(max-width:850px){
.footer{padding:45px 20px 25px}
.inner{grid-template-columns:repeat(2,minmax(0,1fr));gap:30px}
.identity{grid-column:1/-1}
.inner>div{min-width:0}
}
@media(max-width:520px){
.footer{padding:35px 19px 22px}
.inner{grid-template-columns:minmax(0,1fr);gap:25px}
.identity{grid-column:auto}
.inner>div{gap:9px}
.end{margin-top:30px}
}

</style>