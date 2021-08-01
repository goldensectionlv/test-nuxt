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

      <FilterMenu />
    </header>

    <div
      class="main"
    >
      <appForm class="main__form" />

      <section
        class="main__products"
      >
        products
      </section>
    </div>
  </div>
</template>

<script>
import FilterMenu from '@/components/molecules/FilterMenu'
import AppText from '@/components/atoms/AppText'
import appForm from '@/components/organizms/appForm'

export default {
  components: {
    FilterMenu,
    AppText,
    appForm
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

  &__products {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 4px;
    min-height: 400px;
  }
}

@media (max-width: 600px) {
  .heading {
    &__text {
      font-size: 21px;
      margin-right: 10px;
    }
  }

  .main {
    &__form {
      display: none;
    }
  }
}
</style>
