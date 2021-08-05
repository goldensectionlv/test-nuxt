<template>
  <div
    v-if="appearCondition"
    class="switcher"
    @click="onClick"
  >
    <AppIcon
      v-if="changeIconCondition"
      width="30px"
      height="30px"
      color="white"
      style="margin-top: 3px;"
      plus-icon
    />
    <AppIcon
      v-else
      close-icon
      width="30px"
      height="30px"
      color="white"
      style="margin-top: 3px;"
    />
  </div>
</template>

<script>
import AppIcon from '@/components/atoms/AppIcon'
export default {
  components: {
    AppIcon
  },
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
  box-shadow: 0 0 60px 3px rgba(34, 60, 80, 0.5);
  cursor: pointer;
  user-select: none;
}
</style>
