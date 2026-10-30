<script setup>
import {inject} from 'vue'
import tours from '@/utils/tours.json'
import {mediaMap} from '@/utils/media'
const {locale}=inject('richiLocale')
const t=(en,es)=>locale.value==='es'?es:en
const tourName=(tour)=>({1:['ATV Single Tour','ATV individual'],2:['UTV 2 Seater','UTV de 2 puestos'],3:['UTV 4 Seater','UTV de 4 puestos'],4:['UTV 6 Seater','UTV de 6 puestos']}[tour.value][locale.value==='es'?1:0])
function booking(tour){const message=locale.value==='es'?'¡Hola! Vengo de la web de Richi Tours. Quiero consultar disponibilidad para '+tourName(tour)+'.':'Hello! I found Richi Tours online. Could you share availability for '+tourName(tour)+'?';return 'https://wa.me/2977404943?text='+encodeURIComponent(message)}
</script>
<template>
<div class="tour-area"><div class="wrap"><div class="heading"><span class="kicker">{{t('CHOOSE YOUR RIDE','ELIGE TU AVENTURA')}}</span><h2>{{t('Your next adventure starts here','Tu próxima aventura comienza aquí')}}</h2><p>{{t('Explore the island with our guided off-road experiences.','Explora la isla con nuestras experiencias guiadas todoterreno.')}}</p></div>
<div class="cards"><article v-for="tour in tours" :key="tour.value" class="card"><div class="picture"><img :src="mediaMap[tour.value===3?'VEHICLE_6':tour.icon]" :alt="tourName(tour)" loading="lazy"/><span class="tag">{{tour.duration}} {{t('hours','horas')}}</span></div><div class="details"><h3>{{tourName(tour)}}</h3><p>◷ {{tour.departures.join(' · ')}}</p><p>✓ {{t('Guided Aruba adventure','Excursión guiada en Aruba')}}</p><div class="bottom"><div><small>{{t('Tour price','Precio')}}</small><strong>{{tour.price==='TBD'?t('Ask for price','Consultar'): 'USD $'+tour.price}}</strong></div><a :href="booking(tour)" target="_blank" rel="noopener noreferrer">{{t('Book now','Reservar')}} ↗</a></div></div></article></div></div></div>
</template>
<style scoped>
.tour-area{background:#e9f5f2;padding:105px 25px 120px}.wrap{max-width:1260px;margin:auto}.heading{text-align:center;max-width:750px;margin:0 auto 45px}.kicker{color:#008c9e;font-size:12px;font-weight:800;letter-spacing:.17em}.heading h2{font-size:clamp(33px,4.5vw,58px);line-height:1.1;letter-spacing:-.03em;margin:15px 0}.heading p{color:#5a707b;font-size:18px}.cards{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}.card{border-radius:25px;overflow:hidden;background:#fff;display:flex;flex-direction:column;box-shadow:0 12px 40px #13425312;transition:transform .25s}.card:hover{transform:translateY(-5px)}.picture{height:220px;display:grid;place-items:center;background:linear-gradient(135deg,#cde9e4,#f4f6f0);position:relative}.picture img{height:90%;width:95%;object-fit:contain}.tag{position:absolute;top:12px;left:12px;background:white;border-radius:100px;padding:8px 12px;font-size:12px;font-weight:700}.details{padding:22px;display:flex;flex-direction:column;flex:1}.details h3{font-size:22px;line-height:1.15;margin:0 0 16px;color:#17394b}.details p{font-size:13px;color:#617781;line-height:1.5;margin:0 0 8px}.bottom{border-top:1px solid #e4eeee;margin-top:auto;padding-top:22px;display:flex;justify-content:space-between;align-items:center;gap:8px}.bottom small{display:block;color:#768c95;font-size:11px}.bottom strong{display:block;font-size:18px;white-space:nowrap}.bottom a{background:#007e92;color:white;border-radius:100px;padding:11px 12px;text-decoration:none;font-size:12px;font-weight:700;white-space:nowrap}
@media(max-width:1100px){.cards{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:620px){.cards{grid-template-columns:1fr}.tour-area{padding:75px 16px}.picture{height:240px}}

@media(min-width:621px) and (max-width:1100px){
.cards{grid-template-columns:repeat(2,minmax(0,1fr))}
.tour-area{padding:75px 24px 95px}
}
@media(max-width:620px){
.tour-area{padding:70px 16px 80px}
.heading{margin-bottom:28px}
.heading h2{font-size:clamp(30px,8.5vw,43px)}
.heading p{font-size:16px}
.cards{grid-template-columns:minmax(0,1fr);gap:18px}
.card{width:100%;min-width:0}
.picture{height:clamp(195px,58vw,270px)}
.details{padding:21px}
.details h3{font-size:21px}
.bottom{flex-wrap:wrap;row-gap:14px}
.bottom a{min-height:44px;display:inline-flex;align-items:center;justify-content:center}
}
@media(max-width:350px){.bottom{align-items:stretch;flex-direction:column}.bottom a{width:100%}}


/* Vehicle illustrations must stay inside their own visual area on every viewport. */
.card{min-width:0;isolation:isolate}
.picture{overflow:hidden;min-width:0;flex:0 0 auto}
.picture img{display:block;width:100%;height:100%;max-width:100%;max-height:100%;object-fit:contain;object-position:center;position:relative;z-index:0;padding:17px 12px}
.picture .tag{z-index:1}
.details{position:relative;z-index:1;background:#fff;min-width:0}
.details h3{overflow-wrap:anywhere}
@media(min-width:621px) and (max-width:1100px){
.cards{grid-template-columns:repeat(2,minmax(0,1fr))}
.picture{height:clamp(190px,29vw,270px)}
.picture img{padding:18px 24px}
}
@media(max-width:620px){
.cards{grid-template-columns:minmax(0,1fr)}
.picture{height:clamp(190px,61vw,265px)}
.picture img{padding:12px 18px}
}

</style>