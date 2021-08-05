<template>
  <button
    class="button"
    :class="{'button-inactive': disabled}"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 12px;
  height: 36px;
  width: 100%;
  color: white;
  font-weight: 600;
  background-color: #7BAE73;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  user-select: none;
}
.button-inactive {
  background: #EEEEEE;
  font-style: normal;
  color: #B4B4B4 !important;
}
</style>
