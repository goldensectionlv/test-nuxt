<template>
  <div
    class="filter"
    :style="{
      minWidth: minWidth,
      height: height,
      backgroundColor: bgColor,
      padding: padding,
      border: border
    }"
  >
    <AppText
      class="filter__text-hover"
      filter-text
    >
      По умолчанию
    </AppText>
  </div>
</template>

<script>
import AppText from '@/components/atoms/AppText'
export default {
  components: {
    AppText
  },
  props: {
    minWidth: {
      type: String,
      default: '122px'
    },
    height: {
      type: String,
      default: '36px'
    },
    bgColor: {
      type: String,
      default: 'transparent'
    },
    padding: {
      type: String,
      default: '11px 16px'
    },
    border: {
      type: String,
      default: '1px solid rgba(0,0,0,.3)'
    }
  }
}
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  &:hover {
    .filter__text-hover {
      color: #3F3F3F !important;
    }
  }
}
</style>
