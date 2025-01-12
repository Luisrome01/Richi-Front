import { VIDEO_EXAMPLE } from '../../utils/media';
import styles from '../style.css?inline';

const css = new CSSStyleSheet();
css.replaceSync(styles);

const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
  <div class="content">
    <h1>About Us</h1>
    <p>
      Hi, I'm Richi. My family and I started this company driven by our passion for Aruba and
      our desire to share its beauty with you. We want your experience to be unforgettable, so
      we dedicate ourselves to creating unique tours with personalized and friendly service. We
      believe that traveling is more than just visiting new places, it's about connecting with
      people and with yourself. Scroll down to discover everything we have to offer!
    </p>
  </div>
`;

/**
 * @description - Sección segundaria de la página.
 * @class - SecondSection
 * @extends HTMLElement
 */
class SecondSection extends HTMLElement {
	constructor() {
		super();
		this.appendChild(template.content.cloneNode(true));
		document.adoptedStyleSheets.push(css);
	}
}

customElements.define('second-section', SecondSection);
export default SecondSection;
