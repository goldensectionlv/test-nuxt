<template>
  <div>
    <snackBar
      prefix="Товар"
      suffix="добавлен!"
    />
    <header
      class="heading"
    >
      <AppText
        header-text
        class="heading__text"
      >
        Добавление товара
      </AppText>

      <FilterMenu
        :products="products"
        :active-filter="activeFilter"
        :is-mobile="isMobile"
      />
    </header>

    <div
      class="main"
    >
      <div
        v-if="width < 1023"
        class="main__formSwitcher"
        @click="formActive = !formActive"
      >
        <span v-if="!formActive" style="margin-bottom: 3px">+</span>
        <span v-else style="margin-bottom: 3px">x</span>
      </div>

      <transition
        name="fade"
      >
        <div
          v-if="formActive && width < 1023"
          class="main__formBackdrop"
          @click="formActive = false"
        />
      </transition>

      <transition
        :name="slideClass"
      >
        <appForm
          v-if="formActive"
          class="main__form"
        />
      </transition>

      <section
        class="main__products"
      >
        <productCard
          v-for="(product, indexOfProduct) in products"
          :key="product.id"
          class="zoom"
          :product="product"
          :index-of-product="indexOfProduct"
          :is-mobile="isMobile"
          @removeCardProduct="removeCardProduct"
        />
      </section>
    </div>
  </div>
</template>

<script>
import FilterMenu from '@/components/molecules/FilterMenu'
import AppText from '@/components/atoms/AppText'
import appForm from '@/components/organizms/appForm'
import productCard from '@/components/molecules/productCard'
import snackBar from '@/components/molecules/snackBar'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    FilterMenu,
    AppText,
    appForm,
    productCard,
    snackBar
  },
  data () {
    return {
      width: 0,
      formActive: false,
      slideClass: ''
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
    }
  },
  created () {
    this.getDataFromLocalStorage('products')
    this.isMobileCheck()
    this.updateScreenWidth()
    window.addEventListener('resize', this.updateScreenWidth)
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

  &__formSwitcher {
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
    font-size: 30px;
    box-shadow: 0 0 60px 3px rgba(34, 60, 80, 0.5);
    cursor: pointer;
    user-select: none;
  }
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
  transition: 300ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-leave-active,
.slide-enter-active {
  transition: 300ms;
}
.slide-enter {
  transform: translate(150%, 0);
  opacity: 1;
}
.slide-leave-to {
  transform: translate(150%, 0);
  opacity: 1;
}
</style>
