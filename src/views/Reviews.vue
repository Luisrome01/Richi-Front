<template>
  <div class="review-container">
    <div class="highlight"></div>
    <div class="title">What our clients say about us</div>
  </div>
</template>

<script setup></script>

<style scoped>
.review-container {
  display: flex;
  justify-content: center;
  height: 100vh;
  padding: 33px;
}

.highlight {
  position: relative;
  width: 301px;
  height: 66px;
  left: 77px;
  top: -7px;
  background: #f1f1f1;
  border-radius: 50px;
  transform: rotate(-1deg);
}

.title {
  position: absolute;
  width: 473px;
  height: 107px;
  font-family: 'Stolzl Medium';
  font-size: 48px;
  line-height: 104%;
  text-align: center;
  color: #005c99;
}
</style>
