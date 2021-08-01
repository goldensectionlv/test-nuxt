<template>
  <div
    class="inline"
    :class="{
      'headerText': headerText,
      'filterText': filterText
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    headerText: {
      type: Boolean,
      default: false
    },
    filterText: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>

.inline {
  display: inline;
}

.headerText {
  font-family: Source Sans Pro, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: #3F3F3F;
}

.filterText {
  font-family: Source Sans Pro, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #B4B4B4;
}

</style>
