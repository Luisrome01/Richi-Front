import { VIDEO_EXAMPLE } from '../../utils/media';
import styles from '../../assets/style.css?inline';

const css = new CSSStyleSheet();
css.replaceSync(styles);

const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <div class="content">
        <h1>Photos</h1>
        <p>In here we must show pictures.</p>
    </div>
`;

/**
 * @description - Sección segundaria de la página.
 * @class - Photos
 * @extends HTMLElement
 */
class Photos extends HTMLElement {
	constructor() {
		super();
		this.appendChild(template.content.cloneNode(true));
		document.adoptedStyleSheets.push(css);
	}
}

customElements.define('photos-page', Photos);
export default Photos;
