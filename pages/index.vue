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
          v-for="card in 10"
          :key="card"
          :product="{
            imgLink: 'https://ixbt.online/gametech/covers/2021/06/16/RPtrqWyD1IaVM7JYcdQtGZQTJTerDpEe7xxOPoxj.jpg',
            title: 'Наименование товара',
            description: 'Довольно-таки интересное описание товара в несколько строк. ' +
              'Довольно-таки интересное описание товара в несколько строк',
            price: 10000
          }"
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

export default {
  components: {
    FilterMenu,
    AppText,
    appForm,
    productCard
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

  &__products {
    width: 100%;
    border-radius: 4px;
    padding-bottom: 120px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 32%);
    row-gap: 1.1%;
    justify-content: space-between;
  }
}

@media (max-width: 1200px) {
  .main {
    &__products {
      grid-template-columns: repeat(auto-fill, 49%);
      row-gap: 0.6%;
    }
  }
}

@media (max-width: 1024px) {
  .main {
    &__products {
      grid-template-columns: repeat(auto-fill, 32%);
      row-gap: 0.7%;
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
      row-gap: .9%;
    }
  }
}
@media (max-width: 500px) {
  .heading {
    &__text {
      font-size: 21px;
      margin-right: 10px;
    }
  }

  .main {
    &__products {
      grid-template-columns: repeat(auto-fill, 99%);
      row-gap: 0.8%;
    }
  }
}

</style>
