<template>
  <transition name="fadeBackDrop">
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
.fadeBackDrop-enter-active,
.fadeBackDrop-leave-active {
  transition: 300ms;
}
.fadeBackDrop-enter,
.fadeBackDrop-leave-to {
  opacity: 0;
}
</style>
