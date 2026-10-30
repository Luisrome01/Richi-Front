<script setup>
import {ref,computed,inject} from 'vue'
const {locale}=inject('richiLocale')
const t=(en,es)=>locale.value==='es'?es:en
// Approximate landmark pins. Not turn-by-turn navigation or verified tour itinerary.
const locations=[
{name:'California Lighthouse',es:'Faro California',lat:12.6134,lon:-70.0524},
{name:'Alto Vista Chapel',es:'Capilla Alto Vista',lat:12.5760,lon:-70.0119},
{name:'Bushiribana Gold Mill Ruins',es:'Ruinas de Bushiribana',lat:12.5492,lon:-69.9785},
{name:'Natural Bridge',es:'Puente Natural',lat:12.5397,lon:-69.9535}
]
const active=ref(0)
const selected=computed(()=>locations[active.value])
const mapSrc=computed(()=>{const p=selected.value,d=.015;return 'https://www.openstreetmap.org/export/embed.html?bbox='+[p.lon-d,p.lat-d,p.lon+d,p.lat+d].join('%2C')+'&layer=mapnik&marker='+p.lat+'%2C'+p.lon})
const mapUrl=computed(()=>'https://www.openstreetmap.org/?mlat='+selected.value.lat+'&mlon='+selected.value.lon+'#map=14/'+selected.value.lat+'/'+selected.value.lon)
</script>
<template>
<section id="destinations" class="area"><div class="layout"><div class="copy"><span>{{t('THE ISLAND IS CALLING','LA ISLA TE ESPERA')}}</span><h2>{{t('Discover the magic of Aruba','Descubre la magia de Aruba')}}</h2><p>{{t('Preview some of the spectacular landmarks around the island. Select a destination to explore its location.','Descubre algunos lugares emblemáticos de la isla. Elige un destino para explorar su ubicación.')}}</p><div class="stops"><button v-for="(spot,i) in locations" :key="spot.name" type="button" :class="{active:active===i}" @click="active=i">{{locale==='es'?spot.es:spot.name}} <span>↗</span></button></div><small>{{t('Landmark locations only. Tour routes and stops should be confirmed with Richi.','Ubicaciones de referencia. Confirma recorridos y paradas con Richi.')}}</small></div><div class="map"><iframe :src="mapSrc" :title="t('Map of Aruba','Mapa de Aruba')" loading="lazy" referrerpolicy="no-referrer"/><div class="map-footer"><strong>{{locale==='es'?selected.es:selected.name}}</strong><a :href="mapUrl" target="_blank" rel="noopener noreferrer">{{t('Open full map','Abrir mapa')}} ↗</a></div></div></div></section>
</template>
<style scoped>
.area{padding:100px 25px;background:#f9faf7}.layout{max-width:1250px;margin:auto;display:grid;grid-template-columns:1fr 1.1fr;gap:60px;align-items:center}.copy>span{color:#008c9e;font-size:12px;letter-spacing:.17em;font-weight:800}.copy h2{font-size:clamp(34px,4.5vw,59px);line-height:1.08;letter-spacing:-.035em;margin:16px 0}.copy p{font-size:17px;line-height:1.7;color:#57717e;margin-bottom:24px}.stops{display:grid;gap:10px}.stops button{display:flex;align-items:center;justify-content:space-between;background:white;border:1px solid #dce9e8;border-radius:13px;padding:16px 18px;text-align:left;cursor:pointer;font:600 15px Outfit,sans-serif;color:#17394b}.stops button.active{color:#fff;background:#063d59}.copy small{display:block;margin-top:20px;color:#7c8c93;font-size:12px}.map{overflow:hidden;border-radius:27px;background:white;box-shadow:0 15px 42px #1642531c}.map iframe{display:block;width:100%;height:460px;border:0}.map-footer{padding:20px;display:flex;align-items:center;justify-content:space-between;gap:12px}.map-footer strong{font-size:16px}.map-footer a{font-size:13px;font-weight:700;white-space:nowrap;text-decoration:none;color:#007e92}@media(max-width:800px){.layout{grid-template-columns:1fr;gap:30px}.map iframe{height:360px}}

@media(max-width:1080px){.layout{gap:32px}.area{padding:75px 22px}.map iframe{height:400px}}
@media(max-width:800px){
.layout{grid-template-columns:minmax(0,1fr);gap:28px}
.copy,.map{min-width:0}
.copy h2{font-size:clamp(31px,8vw,46px)}
.copy p{font-size:16px}
.stops button{min-height:48px;gap:10px;overflow-wrap:anywhere}
.map{border-radius:20px}
.map iframe{width:100%;height:360px}
}
@media(max-width:480px){
.area{padding:65px 15px}
.map iframe{height:300px}
.map-footer{flex-direction:column;align-items:flex-start;padding:17px}
.map-footer a{white-space:normal}
}

</style>