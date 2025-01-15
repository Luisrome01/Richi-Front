<template>
  <div class="contact-container">
    <div class="background-border">
      <InputGeneral placeholder="Escribe aquí..." />
    </div>
  </div>
</template>

<script setup>
import InputGeneral from "../components/InputGeneral.vue";


</script>

<style scoped>
.contact-container {
  height: 100vh;
  padding: 33px;
}

.background-border {
  position: relative;
  width: 90vw;
  height: 761px;
  background: #f1f1f1;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
