<template>
  <transition name="fade">
    <div
      v-if="appearCondition"
      class="main__formBackdrop"
      @click="onClick"
    />
  </transition>
</template>

<script>
export default {
  props: {
    appearCondition: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick () {
      this.$emit('backDropHoverClick')
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 300ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
