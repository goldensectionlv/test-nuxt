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
      inline
    >
      По умолчанию
    </AppText>
    <AppIcon
      style="margin: 0 0 2px 5px"
      expand-icon
      width="8px"
      height="8px"
      color="#B4B4B4"
    />

    <div
      v-if="false"
      class="filter__modal"
      :style="{padding: padding}"
    >
      <AppText
        filter-text
        inline
      >
        По цене
      </AppText>
      <AppText
        class="mt-4"
        filter-text
        inline
      >
        По названию
      </AppText>
    </div>
  </div>
</template>

<script>
import AppText from '@/components/atoms/AppText'
import AppIcon from '@/components/atoms/AppIcon'
export default {
  components: {
    AppText,
    AppIcon
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
  position: relative;
  &:hover {
    .filter__text-hover {
      color: #3F3F3F !important;
    }
  }
  &__modal {
    display: flex;
    flex-direction: column;
    position: absolute;
    min-width: 100%;
    cursor: pointer;
    border-radius: 4px;
  }
}
</style>
