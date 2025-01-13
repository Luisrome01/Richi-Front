<template>
  <div class="background"></div>
  <div class="menu-container">
    <img :src="LOGO_PNG" alt="logo" />
    <div class="buttons-group">
      <div class="button-container">
        <router-link to="/welcome">About us</router-link>
      </div>
      <div class="button-container">
        <router-link to="/welcome">Tours</router-link>
      </div>
      <div class="button-container">
        <router-link to="/welcome">Contact us</router-link>
      </div>
      <div class="button-container hightlighted">
        <router-link to="/welcome">Leave us a review</router-link>
        <img :src="ARROW_DIAGONAL" alt="Go" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { LOGO_PNG, ARROW_DIAGONAL } from '@/utils/media'
</script>

<style>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 112.4px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.25) 48%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 1;
}

.menu-container {
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 35px 44px;
  z-index: 5;
}

img {
  width: 400px;
  /* mix-blend-mode: lighten; */
}

.buttons-group {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 132px;
  height: 42px;
  background: rgba(68, 68, 68, 0.39);
  backdrop-filter: blur(10.2px);
  -webkit-backdrop-filter: blur(10.2px);
  border-radius: 50px;
  font-family: 'Stolzl Regular';
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.5s;
}

.button-container:hover {
  background: rgba(68, 68, 68, 0.7);
}

.button-container.hightlighted {
  min-width: 199px;
  min-height: 42px;
  background: #005c99;
  backdrop-filter: blur(10.2px);
  -webkit-backdrop-filter: blur(10.2px);
  border-radius: 50px;
}

.button-container img {
  width: fit-content;
  height: 21px;
}
</style>
