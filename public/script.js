const homeHoverEffect = document.querySelector('.home-content');

homeHoverEffect.addEventListener('mousemove', (event) => {
    const rect = homeHoverEffect.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width; // Coordenada X relativa
    const y = (event.clientY - rect.top) / rect.height; // Coordenada Y relativa

    // Ajusta los valores de rotación en función de la posición del cursor
    const rotateX = (y - 0.5) * -10; // Inclinación vertical
    const rotateY = (x - 0.5) * 10;  // Inclinación horizontal

    // Actualiza las variables CSS para controlar la rotación
    homeHoverEffect.style.setProperty('--home-rotateX', rotateX.toFixed(2));
    homeHoverEffect.style.setProperty('--home-rotateY', rotateY.toFixed(2));
});

homeHoverEffect.addEventListener('mouseleave', () => {
    // Resetea la rotación cuando el cursor sale del contenedor
    homeHoverEffect.style.setProperty('--home-rotateX', 0);
    homeHoverEffect.style.setProperty('--home-rotateY', 0);
});



// Obtener los elementos del formulario
const form = document.getElementById('reviewForm');
const stars = document.querySelectorAll('#rating .star');
const ratingValueInput = document.getElementById('ratingValue');
const formMessage = document.getElementById('formMessage');
const loadingMessage = document.getElementById('loadingMessage');

// Modal de éxito
const successModal = document.getElementById('successModal');
const closeModal = document.querySelector('.close');

// Función para actualizar el rating cuando el usuario hace clic en una estrella
stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-value');
        ratingValueInput.value = rating; // Establecer el valor del rating en el input oculto
        updateStarSelection(rating); // Actualizar el color de las estrellas
    });
});

// Función para resaltar las estrellas según la calificación seleccionada
function updateStarSelection(rating) {
    stars.forEach(star => {
        const starValue = star.getAttribute('data-value');
        if (starValue <= rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

// Enviar el formulario
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evitar el envío tradicional del formulario

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const rating = ratingValueInput.value;

    // Validar si todos los campos están llenos
    if (!name || !email || !message || !rating) {
        formMessage.textContent = 'All fields are required!';
        return;
    }

    // Mostrar mensaje de "Cargando..."
    loadingMessage.style.display = 'block';
    formMessage.textContent = ''; // Limpiar cualquier mensaje previo

    try {
        // Enviar la reseña al servidor usando fetch
        const response = await fetch('https://richitour.onrender.com/api/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message, rating })
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Reseña enviada con éxito');
            // Mostrar el modal de éxito
            successModal.classList.add('show');

            // Cerrar el modal después de 3 segundos y limpiar el formulario
            setTimeout(() => {
                successModal.classList.remove('show');
                form.reset(); // Resetear el formulario
                updateStarSelection(0); // Resetear las estrellas
                formMessage.textContent = 'Review submitted successfully!';
                loadingMessage.style.display = 'none'; // Ocultar el mensaje de "Cargando..."
            }, 3000);
        } else {
            formMessage.textContent = `Error: ${data.message}`;
            loadingMessage.style.display = 'none'; // Ocultar el mensaje de "Cargando..."
        }
    } catch (error) {
        formMessage.textContent = 'Error submitting review.';
        loadingMessage.style.display = 'none'; // Ocultar el mensaje de "Cargando..."
    }
});

// Cerrar el modal cuando se hace clic en la "X"
closeModal.addEventListener('click', () => {
    successModal.classList.remove('show');
});

// Manejo del menú de navegación (si lo tienes)
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('show'); // Alternar la clase 'show' para mostrar/ocultar el menú
    });
}); 





document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.header-menu-toggle');
    const nav = document.querySelector('.header-nav');
    const navLinks = document.querySelectorAll('.header-nav a');

    // Función para mostrar/ocultar el menú
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    // Cerrar el menú al hacer clic en cualquier enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('show'); // Cierra el menú
        });
    });
});




document.addEventListener("DOMContentLoaded", async () => {
    const reviewContainer = document.getElementById("carousel-review-container");
    let reviews = [];
    let currentIndex = 0;

    // Fetch reviews from the API
    async function fetchReviews() {
        try {
            const response = await fetch("http://localhost:5000/api/reviews");
            reviews = await response.json();
            displayReviews();
        } catch (error) {
            console.error("Error fetching reviews:", error);
        }
    }

    // Display reviews dynamically
    function displayReviews() {
        reviewContainer.innerHTML = "";

        const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);
        visibleReviews.forEach((review) => {
            const reviewItem = document.createElement("div");
            reviewItem.classList.add("carousel-review-item");
            reviewItem.innerHTML = `
                <h4>${review.name}</h4>
                <div class="stars">${"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}</div>
                <p>${review.message}</p>
                <small>${new Date(review.date).toLocaleDateString()}</small>
            `;
            reviewContainer.appendChild(reviewItem);
        });
    }

    // Event listeners for navigation arrows
    document.getElementById("carousel-prev-button").addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex -= 3;
            displayReviews();
        }
    });

    document.getElementById("carousel-next-button").addEventListener("click", () => {
        if (currentIndex + 3 < reviews.length) {
            currentIndex += 3;
            displayReviews();
        }
    });

    // Initial fetch
    fetchReviews();
});
