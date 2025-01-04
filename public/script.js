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
