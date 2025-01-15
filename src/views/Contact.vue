<template>
  <div class="contact-container">
    <div class="background-border">
      <div class="inputs-container">
        <InputGeneral placeholder="Escribe aquí..." />
        <InputGrande placeholder="Escribe tu mensaje aquí..." />
        <BotonFlecha subtitle="Send a Message" :arrowImage="ARROW_DIAGONAL" />
        <BotonFlecha @click="openModal" subtitle="Crear Reseña" :arrowImage="ARROW_DIAGONAL" />
      </div>
    </div>


    <ModalCreateReview ref="modalCreateReview" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputGeneral from "../components/InputGeneral.vue";
import InputGrande from "../components/InputGrande.vue";
import BotonFlecha from "../components/BotonFlecha.vue";
import { ARROW_DIAGONAL } from "@/utils/media";
import ModalCreateReview from "../components/ModalCreateReview.vue";


const modalCreateReview = ref(null);


const openModal = () => {
  modalCreateReview.value.openModal();
};
</script>

<style scoped>
.contact-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.background-border {
  width: 100%;
  height: 100%;
  background: #f1f1f1;
  border-radius: 10px;
  padding: 20px;
}

.inputs-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;

}

.redirect-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.redirect img {
  width: 20px;
  height: 20px;
}
</style>
