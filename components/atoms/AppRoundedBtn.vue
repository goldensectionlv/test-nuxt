<template>
  <div
    v-if="appearCondition"
    class="switcher"
    @click="onClick"
  >
    <span v-if="changeIconCondition" style="margin-bottom: 3px">+</span>
    <span v-else style="margin-bottom: 3px">x</span>
  </div>
</template>

<script>
export default {
  props: {
    appearCondition: {
      type: Boolean,
      default: false
    },
    changeIconCondition: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick () {
      this.$emit('AppRoundedBtnClick')
    }
  }
}
</script>

<style lang="scss" scoped>
.switcher {
  position: fixed;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 30px;
  right: 6vw;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  color: white;
  background-color: red;
  font-size: 30px;
  box-shadow: 0 0 60px 3px rgba(34, 60, 80, 0.5);
  cursor: pointer;
  user-select: none;
}
</style>
