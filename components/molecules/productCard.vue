<template>
  <div class="card">
    <productPhoto
      :img-link="product.imgLink"
    />

    <div
      class="card__description"
    >
      <AppText
        cart-title
      >
        {{ product.title }}
      </AppText>

      <AppText
        regular-text
        class="mt-16"
      >
        {{ product.description }}
      </AppText>
    </div>
  </div>
</template>

<script>
import AppText from '@/components/atoms/AppText'
import productPhoto from '@/components/atoms/productPhoto'

export default {
  components: {
    AppText,
    productPhoto
  },
  props: {
    imgLink: {
      type: String,
      default: ''
    },
    product: {
      type: Object,
      default () {
        return {
          imgLink: '',
          title: '',
          description: ''
        }
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid rgba(0, 0, 0, .3);
  border-radius: 4px;
  width: 101%;

  &__description {
    padding: 16px 16px 24px 16px;
  }
}
</style>
