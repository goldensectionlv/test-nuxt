<template>
  <div>
    <header
      class="heading"
    >
      <AppText
        header-text
        class="heading__text"
      >
        Добавление товара
      </AppText>

      <FilterMenu border="none" />
    </header>

    <div
      class="main"
    >
      <appForm class="main__form" />

      <section
        class="main__products"
      >
        <productCard
          v-for="(product, indexOfProduct) in products"
          :key="product.id"
          :product="product"
          :remove-product="removeProduct"
          :index-of-product="indexOfProduct"
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
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    FilterMenu,
    AppText,
    appForm,
    productCard
  },
  computed: mapGetters('products', ['products']),
  methods: mapActions('products', ['removeProduct'])
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
      grid-template-columns: repeat(auto-fill, 49%);
    }
  }
}

@media (max-width: 1024px) {
  .main {
    &__products {
      grid-template-columns: repeat(auto-fill, 32%);
    }
    &__form {
      display: none;
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

</style>
