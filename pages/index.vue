<template>
  <div>
    <snackBar
      prefix="Товар"
      suffix="добавлен!"
    />
    <header class="heading">
      <AppText
        header-text
        class="heading__text"
      >
        Добавление товара
      </AppText>

      <filterMenu
        :products="products"
        :active-filter="activeFilter"
        :is-mobile="isMobile"
      />
    </header>

    <transition name="fade">
      <div v-show="preloadingAnimation" class="main">
        <AppRoundedBtn
          class="zoom"
          :appear-condition="width < 1023"
          :change-icon-condition="!formActive"
          @AppRoundedBtnClick="formActive = !formActive"
        />

        <backDropHover
          :appear-condition="formActive && width < 1023"
          @backDropHoverClick="formActive = false"
        />

        <transition :name="slideClass">
          <appForm
            v-if="formActive"
            class="main__form"
          />
        </transition>

        <transition-group name="flip-list" class="main__products" tag="section">
          <productCard
            v-for="(product, indexOfProduct) in products"
            :key="product.id"
            class="zoom"
            :product="product"
            :index-of-product="indexOfProduct"
            :is-mobile="isMobile"
            @removeCardProduct="removeCardProduct"
          />
        </transition-group>
      </div>
    </transition>
  </div>
</template>

<script>
import filterMenu from '@/components/molecules/filterMenu'
import AppText from '@/components/atoms/AppText'
import appForm from '@/components/organizms/appForm'
import productCard from '@/components/organizms/productCard'
import snackBar from '@/components/molecules/snackBar'
import AppRoundedBtn from '@/components/atoms/AppRoundedBtn'
import backDropHover from '@/components/atoms/backDropHover'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    filterMenu,
    AppText,
    appForm,
    productCard,
    snackBar,
    AppRoundedBtn,
    backDropHover
  },
  data () {
    return {
      width: 0,
      formActive: false,
      slideClass: '',
      preloadingAnimation: false
    }
  },
  computed: {
    ...mapGetters('products', ['products']),
    ...mapGetters('filters', ['activeFilter']),
    ...mapGetters('isMobile', ['isMobile'])
  },
  watch: {
    width () {
      // prevent initial animation on change screen size to small
      if (this.width < 1023 && this.slideClass !== 'slide') {
        setTimeout(() => { this.slideClass = 'slide' }, 300)
      } else if (this.slideClass !== '') this.slideClass = ''
    },
    formActive () {
      if (this.formActive && this.width < 1023) document.documentElement.style.overflow = 'hidden'
      else document.documentElement.style.overflow = 'auto'
    }
  },
  created () {
    this.getDataFromLocalStorage('products')
    this.isMobileCheck()
    this.updateScreenWidth()
    window.addEventListener('resize', this.updateScreenWidth)
  },
  mounted () {
    this.preloadingAnimation = true
  },
  destroyed () {
    window.removeEventListener('resize', this.updateScreenWidth)
  },
  methods: {
    ...mapActions('products', ['removeProduct']),
    ...mapActions('isMobile', ['isMobileCheck']),
    ...mapActions('localStorage', ['getDataFromLocalStorage', 'updateLocalStorage']),

    updateScreenWidth () {
      this.width = window.innerWidth
      this.formActive = this.width > 1023
    },
    removeCardProduct (indexOfProduct) {
      this.removeProduct(indexOfProduct)
      this.updateLocalStorage({ dataName: 'products', dataToAdd: this.products })
    }
  }
}

</script>

<style lang="scss" scoped>

.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.main {
  display: flex;
  height: auto;
  position: relative;

  &__formBackdrop {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.45);
    z-index: 2;
    top: 0;
    left: 0;
  }
  &__products {
    width: 100%;
    border-radius: 4px;
    padding-bottom: 120px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 32%);
    row-gap: 16px;
    justify-content: space-between;
  }
}

@media (max-width: 1200px) {
  .main {
    &__products {
      grid-template-columns: repeat(auto-fill, 48%);
    }
  }
}

@media (max-width: 1023px) {
  .main {
    &__products {
      grid-template-columns: repeat(auto-fill, 31.5%);
    }
    &__form {
      position: fixed;
      background-color: white;
      z-index: 2;
      max-width: 332px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

@media (max-width: 750px) {
  .main {
    &__products {
      grid-template-columns: repeat(auto-fill, 48%);
    }
  }
}
@media (max-width: 500px) {
  .heading {
    &__text {
      font-size: 21px;
      max-width: 50%;
    }
  }
  .main {
    &__products {
      grid-template-columns: repeat(auto-fill, 99%);
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: 2000ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-leave-active,
.slide-enter-active {
  transition: 300ms;
}
.slide-enter,
.slide-leave-to{
  transform: translate(150%, 0);
  opacity: 1;
}

.flip-list-move {
  transition: transform 600ms;
}
</style>
