<script setup>
import {ref,inject} from 'vue'
import {GALLERY_1,GALLERY_2,GALLERY_3,GALLERY_4,GALLERY_5,GALLERY_6} from '@/utils/media'
const {locale}=inject('richiLocale')
const t=(en,es)=>locale.value==='es'?es:en
const photos=[
{src:GALLERY_1,alt:'Richi Tours Aruba experience'}, {src:GALLERY_2,alt:'Richi Tours Aruba off-road adventure'},
{src:GALLERY_3,alt:'Guests exploring Aruba'}, {src:GALLERY_4,alt:'Aruba adventure memories'},
{src:GALLERY_5,alt:'Richi Tours island tour'}, {src:GALLERY_6,alt:'Aruba guided excursion'},
{src:'/images/aruba-eagle-beach.jpg',fallback:GALLERY_1,alt:'Aerial view of Aruba and Eagle Beach'},
{src:'/images/aruba-family-beach.jpg',fallback:GALLERY_2,alt:'Visitors enjoying the beach in Aruba'},
{src:'/images/aruba-turquoise-pool.jpg',fallback:GALLERY_3,alt:'Turquoise waters of Aruba'},
{src:'/images/aruba-natural-pool.jpg',fallback:GALLERY_4,alt:'Aruba natural pool'},
{src:'/images/aruba-natural-bridge.jpg',fallback:GALLERY_5,alt:'Natural bridge at the coast of Aruba'}
]
const photoError=(event,photo)=>{if(photo.fallback&&event.target.src!==new URL(photo.fallback,location.href).href)event.target.src=photo.fallback}
const current=ref(-1)
</script>
<template>
<section class="gallery"><div class="head"><span>{{t('MOMENTS WORTH SHARING','MOMENTOS PARA RECORDAR')}}</span><h2>{{t('A little glimpse of paradise','Un vistazo al paraíso')}}</h2><p>{{t('Real moments, breathtaking scenery and unforgettable adventures.','Momentos reales, paisajes increíbles y aventuras inolvidables.')}}</p></div>
<div class="pictures"><button v-for="(photo,i) in photos" :key="i" type="button" class="tile" :class="{'large':i===0||i===6}" @click="current=i" :aria-label="t('View photo','Ver foto')+' '+(i+1)"><img :src="photo.src" :alt="photo.alt" @error="photoError($event,photo)" loading="lazy" decoding="async"/><small v-if="photo.credit">{{photo.credit}}</small></button></div>
<div v-if="current>=0" class="lightbox" role="dialog" aria-modal="true" :aria-label="t('Photo viewer','Visor de fotos')" @click.self="current=-1"><button class="close" type="button" @click="current=-1" :aria-label="t('Close','Cerrar')">✕</button><button type="button" @click="current=(current+photos.length-1)%photos.length" aria-label="Previous photo">‹</button><div class="viewer"><img :src="photos[current].src" :alt="photos[current].alt" @error="photoError($event,photos[current])"/><a v-if="photos[current].creditUrl" :href="photos[current].creditUrl" target="_blank" rel="noopener noreferrer">{{photos[current].credit}}</a></div><button type="button" @click="current=(current+1)%photos.length" aria-label="Next photo">›</button></div>
</section>
</template>
<style scoped>
.gallery{padding:95px 25px 110px;background:#f9faf7}.head{text-align:center;max-width:750px;margin:0 auto 40px}.head span{font-size:12px;letter-spacing:.18em;font-weight:800;color:#008a9d}.head h2{font-size:clamp(34px,4.7vw,58px);line-height:1.09;letter-spacing:-.03em;margin:15px 0}.head p{color:#526c79;font-size:18px}.pictures{max-width:1250px;margin:auto;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));grid-auto-rows:235px;gap:17px}.tile{position:relative;border:0;padding:0;overflow:hidden;border-radius:22px;cursor:pointer;background:#dceceb}.tile.large{grid-column:span 2}.tile img{width:100%;height:100%;display:block;object-fit:cover;transition:transform .4s}.tile:hover img{transform:scale(1.05)}.tile small{position:absolute;bottom:8px;left:10px;color:white;background:#052e3dbb;padding:5px;border-radius:5px;font-size:10px}.lightbox{position:fixed;inset:0;background:#001d29f0;z-index:2000;display:flex;align-items:center;justify-content:space-around;gap:8px;padding:50px 15px}.lightbox button{color:white;background:#ffffff30;border:0;border-radius:50%;height:45px;min-width:45px;font-size:30px;cursor:pointer}.lightbox .close{position:absolute;top:18px;right:20px;font-size:20px}.viewer{max-width:min(1000px,75vw);text-align:center}.viewer img{max-height:80vh;max-width:100%;object-fit:contain}.viewer a{display:block;color:white;font-size:12px;margin-top:10px}
@media(max-width:800px){.pictures{grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:190px}.tile.large{grid-column:span 2}}@media(max-width:500px){.gallery{padding:70px 15px}.pictures{gap:10px;grid-auto-rows:150px}.tile{border-radius:13px}.viewer{max-width:68vw}}

@media(max-width:800px){
.gallery{padding:65px 18px 80px}
.head h2{font-size:clamp(31px,8vw,46px)}
.head p{font-size:16px}
.pictures{grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:clamp(150px,25vw,225px);gap:13px}
.tile{min-width:0}
}
@media(max-width:500px){
.gallery{padding:60px 14px 75px}
.pictures{grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:clamp(125px,38vw,185px);gap:9px}
.tile.large{grid-column:span 2}
.tile{border-radius:13px}
.lightbox{gap:3px;padding:60px 7px 35px}
.lightbox button{min-width:36px;width:36px;height:44px;font-size:26px}
.viewer{max-width:calc(100vw - 94px)}
.viewer img{max-height:74dvh}
}

</style>