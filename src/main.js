import './apps/first-section/index.js';
import './apps/second-section/index.js';
import './apps/third-section/index.js';
import './apps/fourth-section/index.js';
import './apps/fifth-section/index.js';
import './apps/sixth-section/index.js';

const app = document.getElementById('app');

app.innerHTML = /*HTML*/ `
  <section>
    <first-section></first-section>
  </section>
  <section id="about-us">
    <second-section></second-section>
  </section>
  <section id="services">
    <third-section></third-section>
  </section>
  <section id="contact-us">
    <fourth-section></fourth-section>
  </section>
  <section id="photos">
    <fifth-section></fifth-section>
  </section>
  <section id="reviews">
    <sixth-section></sixth-section>
  </section>
`;
