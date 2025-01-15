<template>
  <textarea
    :placeholder="placeholder"
    class="input-grande"
    v-bind="$attrs"
  ></textarea>
</template>

<script>
export default {
  name: "InputGrande",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.input-grande {
  box-sizing: border-box;
  width: 732px;
  height: 138px;
  border: 1.5px solid #bebebe;
  border-radius: 30px;
  padding: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 17px;
  display: flex;
  align-items: flex-start;
  color: #292b2e;
  resize: none;
  outline: none;
  background: transparent;
  font-family: inherit;
}


.input-grande::placeholder {
  color: rgba(41, 43, 46, 0.5);
}
</style>
