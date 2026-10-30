<script setup>
import {inject} from 'vue'
import {QR_IMAGE,FACEBOOK,INSTAGRAM,GOOGLE} from '@/utils/media'
const {locale}=inject('richiLocale')
const t=(en,es)=>locale.value==='es'?es:en
const whatsapp='https://wa.me/2977404943?text='+encodeURIComponent('Hello Richi Tours! I found you on your website. I would like more information about your tours.')
// FormSubmit requires first-time activation by the recipient before messages are delivered.
const endpoint='https://formsubmit.co/richitoursrental@gmail.com'
</script>
<template>
<section class="contact">
 <div class="wrap">
  <div class="form-card">
   <span class="kicker">{{t('LET’S MAKE MEMORIES','CREEMOS RECUERDOS')}}</span>
   <h2>{{t('Ready for your Aruba adventure?','¿Listo para tu aventura en Aruba?')}}</h2>
   <p>{{t('Send us your questions and we’ll help you plan the experience.','Envíanos tus preguntas y te ayudaremos a planificar la experiencia.')}}</p>
   <form :action="endpoint" method="POST">
    <input type="hidden" name="_subject" value="New Richi Tours website inquiry"/>
    <input type="hidden" name="_template" value="table"/>
    <input type="hidden" name="_url" value="https://richi-front-static.onrender.com/"/>
    <input class="honeypot" type="text" name="_honey" tabindex="-1" autocomplete="off"/>
    <div class="two">
     <label>{{t('First name','Nombre')}}<input name="first_name" :placeholder="t('Your first name','Tu nombre')" required autocomplete="given-name"/></label>
     <label>{{t('Last name','Apellido')}}<input name="last_name" :placeholder="t('Your last name','Tu apellido')" required autocomplete="family-name"/></label>
     <label>{{t('Email','Correo electrónico')}}<input type="email" name="email" placeholder="name@example.com" required autocomplete="email"/></label>
     <label>{{t('Phone (optional)','Teléfono (opcional)')}}<input type="tel" name="phone_number" placeholder="+297 ..." autocomplete="tel"/></label>
    </div>
    <label>{{t('Your message','Tu mensaje')}}<textarea name="message" rows="5" :placeholder="t('Tell us what you have in mind...','Cuéntanos qué te gustaría hacer...')" required></textarea></label>
    <button class="submit" type="submit">{{t('Send message','Enviar mensaje')}} ↗</button>
   </form>
  </div>
  <aside class="info">
   <span class="eyebrow">{{t('WE’RE HERE TO HELP','ESTAMOS PARA AYUDARTE')}}</span>
   <h3>{{t('Let’s talk adventure!','¡Hablemos de aventuras!')}}</h3>
   <a href="mailto:richitoursrental@gmail.com" class="contact-link"><span>✉</span><div><small>{{t('Email us','Escríbenos')}}</small>richitoursrental@gmail.com</div></a>
   <a :href="whatsapp" class="contact-link" target="_blank" rel="noopener noreferrer"><span>✆</span><div><small>WhatsApp</small>+297 740 4943</div></a>
   <div class="qr-section"><a :href="whatsapp" target="_blank" rel="noopener noreferrer" :aria-label="t('Open WhatsApp chat','Abrir chat de WhatsApp')"><img :src="QR_IMAGE" alt="WhatsApp QR code" loading="lazy"/></a><div><b>{{t('Scan or click','Escanea o haz clic')}}</b><p>{{t('Scan the QR code or click it to open WhatsApp directly.','Escanea el código QR o haz clic para abrir WhatsApp directamente.')}}</p><a class="chat" :href="whatsapp" target="_blank" rel="noopener noreferrer">{{t('Open WhatsApp','Abrir WhatsApp')}} ↗</a></div></div>
   <div class="social"><b>{{t('Connect with us','Síguenos')}}</b><div><a href="https://www.facebook.com/share/fCbEgPQg1PgBzrKk/" target="_blank" rel="noopener noreferrer"><img :src="FACEBOOK" alt="Facebook"/></a><a href="https://www.instagram.com/richi_toursrental/" target="_blank" rel="noopener noreferrer"><img :src="INSTAGRAM" alt="Instagram"/></a><a href="https://g.page/r/CVZKth4QqEKDEBM/review" target="_blank" rel="noopener noreferrer"><img :src="GOOGLE" alt="Google business"/></a></div></div>
  </aside>
 </div>
</section>
</template>
<style scoped>
.contact{padding:80px 24px 105px;background:#f9faf7}.wrap{width:100%;max-width:1260px;margin:auto;display:grid;grid-template-columns:minmax(0,1.25fr) minmax(320px,.85fr);gap:24px;align-items:stretch}.form-card{padding:clamp(24px,4vw,58px);border-radius:30px;background:#eff3f2}.kicker,.eyebrow{font-size:12px;font-weight:800;letter-spacing:.16em;color:#008c9e}.form-card h2{font-size:clamp(30px,3.7vw,49px);line-height:1.13;letter-spacing:-.03em;margin:14px 0}.form-card>p{color:#5c737f;font-size:16px;line-height:1.6;margin-bottom:25px}.two{display:grid;grid-template-columns:1fr 1fr;gap:16px}.form-card form{display:flex;flex-direction:column;gap:18px}.form-card label{font-weight:650;color:#25485c;font-size:14px;display:flex;flex-direction:column;gap:8px;min-width:0}.form-card input,.form-card textarea{width:100%;background:white;border:1px solid #ccd9d9;border-radius:15px;padding:15px 17px;color:#17394b;font:inherit;font-size:15px;min-height:51px}.form-card textarea{resize:vertical;min-height:145px}.submit{align-self:flex-start;border:none;background:#006e8f;color:white;border-radius:50px;padding:15px 25px;font-weight:800;font-size:15px;cursor:pointer}.honeypot{position:absolute!important;left:-9999px;opacity:0;pointer-events:none}.info{background:#075b8d;color:white;padding:clamp(24px,4vw,48px);border-radius:30px;display:flex;flex-direction:column;gap:23px;overflow-wrap:anywhere}.eyebrow{color:#a9eee1}.info h3{font-size:clamp(26px,3vw,38px);line-height:1.15;margin:0 0 5px}.contact-link{text-decoration:none;color:white;display:flex;gap:13px;align-items:center;font-size:15px}.contact-link>span{display:grid;place-items:center;min-width:42px;height:42px;background:#ffffff25;border-radius:12px;font-size:24px}.contact-link small{display:block;color:#d0e6f4;font-size:12px;margin-bottom:3px}.qr-section{display:grid;grid-template-columns:110px 1fr;gap:18px;align-items:center;padding:20px 0;border-top:1px solid #ffffff30;border-bottom:1px solid #ffffff30}.qr-section img{width:110px;height:110px;object-fit:cover;border-radius:12px;background:white;padding:5px}.qr-section p{font-size:13px;line-height:1.5;color:#e0ecf4;margin:8px 0}.chat{display:inline-block;color:#fff;font-weight:700;font-size:13px;text-underline-offset:4px}.social{margin-top:auto}.social b{display:block;margin-bottom:15px}.social>div{display:flex;gap:20px;align-items:center}.social a img{width:27px;height:27px;object-fit:contain}
@media(max-width:1000px){.wrap{grid-template-columns:1fr}.info{gap:16px}.contact{padding-bottom:75px}}@media(max-width:550px){.contact{padding:55px 14px 65px}.two{grid-template-columns:1fr}.form-card,.info{padding:25px;border-radius:22px}.qr-section{grid-template-columns:85px 1fr}.qr-section img{width:85px;height:85px}}
</style>