import { VIDEO_EXAMPLE } from '../../utils/media';
import styles from '../style.css?inline.css';

const css = new CSSStyleSheet();
css.replaceSync(styles);

const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <div class="content">
        <h1>Customer Reviews</h1>
        <form id="reviewForm">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your name" />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="Your email" />
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" required placeholder="Your review"></textarea>
            </div>
            <div class="form-group">
                <label for="rating">Rating</label>
                <div id="rating" class="stars">
                    <!-- Las estrellas serán agregadas dinámicamente con JS -->
                    <span class="star" data-value="1">☆</span>
                    <span class="star" data-value="2">☆</span>
                    <span class="star" data-value="3">☆</span>
                    <span class="star" data-value="4">☆</span>
                    <span class="star" data-value="5">☆</span>
                </div>
                <input type="hidden" id="ratingValue" name="rating" />
            </div>
            <button type="submit">Submit Review</button>
        </form>
        <p id="formMessage"></p>
        <div id="loadingMessage" style="display: none">Enviando tu reseña...</div>
        </div>

        <div class="review-carousel">
        <button id="carousel-prev-button" class="carousel-arrow">&larr;</button>
        <div id="carousel-review-container" class="carousel-review-list"></div>
        <button id="carousel-next-button" class="carousel-arrow">&rarr;</button>
        </div>

        <!-- Modal de éxito -->
        <div id="successModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>¡Gracias por tu reseña!</h2>
        </div>
    </div>
`;

/**
 * @description - Sección segundaria de la página.
 * @class - SixthSection
 * @extends HTMLElement
 */
class SixthSection extends HTMLElement {
	constructor() {
		super();
		this.appendChild(template.content.cloneNode(true));
		document.adoptedStyleSheets.push(css);
	}
}

customElements.define('sixth-section', SixthSection);
export default SixthSection;
