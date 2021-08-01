<template>
  <div
    class="card"
    @mouseenter="buttonActive = true"
    @mouseleave="buttonActive = false"
  >
    <div
      v-if="buttonActive"
      class="card__button"
    >
      x
    </div>
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

      <AppText
        price-text
        class="mt-32"
      >
        {{ product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') }} руб.
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
  },
  data () {
    return {
      buttonActive: false
    }
  }

}
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 4px;
  width: 101%;
  position: relative;
  cursor: pointer;

  &__button {
    position: absolute;
    z-index: 1;
    width: 32px;
    height: 32px;
    background-color: #FF8484;
    right: 0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transform: translate(30%, -30%);
  }

  &__description {
    padding: 16px 16px 24px 16px;
  }
}
</style>
