<template>
  <div
    :class="{
      'headerText': headerText,
      'filterText': filterText,
      'cartTitle': cartTitle,
      'regularText': regularText,
      'priceText': priceText,
      'formInputTitleText': formInputTitleText,
      'formInputText': formInputText,
      'formErrorText': formErrorText
    }"
    :style="{
      display: inline ? 'inline' : ''
    }"
  >
    <slot />
    <div class="dot" />
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
    },
    cartTitle: {
      type: Boolean,
      default: false
    },
    regularText: {
      type: Boolean,
      default: false
    },
    priceText: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    formInputTitleText: {
      type: Boolean,
      default: false
    },
    formInputText: {
      type: Boolean,
      default: false
    },
    formErrorText: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>

div {
  position: relative;
}

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

.cartTitle {
  font-family: Source Sans Pro, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #3F3F3F;
}

.regularText {
  font-family: Source Sans Pro, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #3F3F3F;
}

.priceText {
  font-family: Source Sans Pro, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: #3F3F3F;
}

.formInputTitleText {
  font-family: Source Sans Pro, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: -0.02em;
  color: #49485E;
}

.formInputText {
  font-family: Source Sans Pro, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #B4B4B4;
}

.formErrorText {
  font-family: Source Sans Pro, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: #FF8484;
}

</style>
