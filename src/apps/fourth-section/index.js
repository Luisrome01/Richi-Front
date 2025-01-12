import { VIDEO_EXAMPLE } from '../../utils/media';
import styles from '../style.css?inline';

const css = new CSSStyleSheet();
css.replaceSync(styles);

const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <div class="content">
        <h1>Contact Us</h1>
        <p>Phone: +2977404943</p>
        <p>Email: Info@richitoursrental.com</p>
        <form action="https://formsubmit.co/luisrome3005@gmail.com" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="phone" name="phone" placeholder="Your Phone Number" required />
            <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Submit</button>
            <input type="hidden" name="_next" value="http://localhost:3000" />
            <input type="hidden" name="_honey" style="display: none" />
        </form>
    </div>
`;

/**
 * @description - Sección segundaria de la página.
 * @class - FourthSection
 * @extends HTMLElement
 */
class FourthSection extends HTMLElement {
	constructor() {
		super();
		this.appendChild(template.content.cloneNode(true));
		document.adoptedStyleSheets.push(css);
	}
}

customElements.define('fourth-section', FourthSection);
export default FourthSection;
