<template>
  <input
    :placeholder="placeholder"
    class="input-general"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  name: "InputGeneral",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.input-general {
  width: 349px;
  height: 64px;
  border: 1.5px solid #bebebe;
  border-radius: 100px;
  background: transparent;
  padding: 10px 20px;
  font-size: 18px;
  color: #292b2e;
  outline: none;
}

.input-general::placeholder {
  color: rgba(41, 43, 46, 0.5);
}
</style>
