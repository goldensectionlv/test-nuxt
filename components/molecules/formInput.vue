<template>
  <div>
    <div
      class="header"
    >
      <AppText form-input-title-text>
        {{ headerText }}
      </AppText>
      <div
        class="header__dot ml-2"
        :class="{'header__dot__success': headerDotCondition}"
      />
    </div>
    <slot />

    <AppText
      v-if="alertCondition"
      class="mt-4 mb-2"
      form-error-text
    >
      {{ alertText }}
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
    headerDotCondition: {
      type: Boolean,
      default: true
    },
    alertCondition: {
      type: Boolean,
      default: false
    },
    headerText: {
      type: String,
      default: ''
    },
    alertText: {
      type: String,
      default: 'Обязательное поле'
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  &__dot {
    display: flex;
    right: 0;
    width: 4px;
    height: 4px;
    background-color: #FF8484;
    border-radius: 50%;
    &__success {
      background-color: greenyellow;
    }
  }
}

</style>
