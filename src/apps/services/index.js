import { VIDEO_EXAMPLE } from '../../utils/media';
import styles from '../../assets/style.css?inline';

const css = new CSSStyleSheet();
css.replaceSync(styles);

const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <div class="content">
        <h1>Our Services</h1>
        <p>
            ATV SINGLE TOUR: Price: US$150.00 duration: 3 hours Departure times: ● 9:00am to 12:00pm ●
            2:00pm to 5:00pm attractions: ● CAVE POOL ● BUSHIRIBANA GOLD MILL RUINS ● BABY NATURAL
            BRIDGE ● ALTO VISTA CHAPEL ● CALIFORNIA LIGHTHOUSE ● TRES TRAPI Requiremnts: Drivers
            license, tennis, swimsuit and good vibes.
        </p>
    </div>
`;

/**
 * @description - Sección segundaria de la página.
 * @class - Services
 * @extends HTMLElement
 */
class Services extends HTMLElement {
	constructor() {
		super();
		this.appendChild(template.content.cloneNode(true));
		document.adoptedStyleSheets.push(css);
	}
}

customElements.define('services-page', Services);
export default Services;
