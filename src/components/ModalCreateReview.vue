<template>
  <div class="modal-overlay" v-if="isVisible">
    <div class="modal-content">
      <!-- Botón para cerrar el modal -->
      <button @click="closeModal" class="close-button">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 6L12.5 12M12.5 12L18.5 18M12.5 12L18.5 6M12.5 12L6.5 18" stroke="#292B2E" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </button>

      <!-- Título del modal -->
      <div class="modal-title">Create review</div>

      <!-- Subtítulo del modal -->
      <div class="modal-subtitle">
        Share your experience with us! Fill out the form below to leave a review of your unforgettable Aruba adventure.
      </div>

      <!-- Botón para publicar la reseña -->
      <BotonFlecha subtitle="Post your review" :arrowImage="ARROW_DIAGONAL" class="post-review-button" @click="postReview" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BotonFlecha from "../components/BotonFlecha.vue"; // Asegúrate de que BotonFlecha esté importado
import { ARROW_DIAGONAL } from "@/utils/media"; // Asegúrate de que el path sea correcto

const isVisible = ref(false);

const openModal = () => {
  isVisible.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isVisible.value = false;
  document.body.style.overflow = '';
};

// Acción cuando se hace clic en el botón "Post your review"
const postReview = () => {
  console.log("Review posted!");
};

defineExpose({
  openModal,
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
}

.modal-content {
  position: absolute;
  width: 837px;
  height: 699px;
  left: calc(50% - 837px / 2);
  top: 100px;
  background: #ffffff;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Título del modal */
.modal-title {
  position: absolute;
  width: 427px;
  height: 43px;
  left: 52px;
  top: 45px;
  font-family: 'Stolzl';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 43px;
  color: #005C99;
}

/* Subtítulo del modal */
.modal-subtitle {
  position: absolute;
  width: 661px;
  height: 48px;
  left: 53.5px;
  top: 102px;
  font-family: 'Stolzl';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #292B2E;
}

/* Botón para cerrar el modal */
.close-button {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 758px;
  top: 55px;
  background: #f1f1f1;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.close-button svg {
  width: 24px;
  height: 24px;
}

/* Estilos para el botón "Post your review" */
.post-review-button {
  position: absolute;
  width: 199px;
  height: 42px;
  left: 585px;
  top: 615px;
}
</style>
