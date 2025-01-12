import './apps/welcome/index.js';
import './apps/about-us/index.js';
import './apps/services/index.js';
import './apps/contact-us/index.js';
import './apps/photos/index.js';
import './apps/reviews/index.js';

const app = document.getElementById('app');

app.innerHTML = /*HTML*/ `
  <section>
    <welcome-page></welcome-page>
  </section>
  <section id="about-us">
    <about-us></about-us>
  </section>
  <section id="services">
    <services-page></services-page>
  </section>
  <section id="contact-us">
    <contact-us></contact-us>
  </section>
  <section id="photos">
    <photos-page></photos-page>
  </section>
  <section id="reviews">
    <reviews-page></reviews-page>
  </section>
`;
