<template>
  <div
    class="card"
    @mouseenter="buttonActive = true"
    @mouseleave="buttonActive = false"
  >
    <transition name="bounce">
      <div
        v-if="buttonActive || isMobile"
        class="card__button"
        @click="onClick"
      >
        <AppIcon
          trash-icon
          color="white"
          class="mt-4"
        />
      </div>
    </transition>

    <productPhoto :img-link="product.imgLink" />

    <div class="card__description">
      <AppText cart-title>
        {{ product.name }} id: {{ product.id }}
      </AppText>

      <AppText
        regular-text
        class="mt-16 card__description__text"
      >
        {{ product.description }}
      </AppText>
      <AppText
        price-text
        style="margin-top: auto; padding-top: 32px"
      >
        {{ product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') }} руб.
      </AppText>
    </div>
  </div>
</template>

<script>
import AppText from '@/components/atoms/AppText'
import productPhoto from '@/components/atoms/productPhoto'
import AppIcon from '@/components/atoms/AppIcon'

export default {
  components: {
    AppText,
    productPhoto,
    AppIcon
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
    },
    indexOfProduct: {
      type: Number,
      required: true
    },
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      buttonActive: false
    }
  },
  methods: {
    onClick () {
      this.$emit('removeCardProduct', this.indexOfProduct)
    }
  }

}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 4px;
  width: 101%;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &__button {
    position: absolute;
    z-index: 2;
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
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    &__text {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}

.bounce-enter-active {
  animation: bounce-in .3s;
}

@keyframes bounce-in {

  50% {

    transform: translate(30%, -30%) scale(1.3);
  }
  100% {
    transform: translate(30%, -30%) scale(1);
  }
}
</style>
