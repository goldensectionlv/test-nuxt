<template>
  <form
    action=""
    class="form"
    @submit.prevent="formSubmit"
  >
    <AppText
      form-input-title-text
    >
      Наименование товара
    </AppText>
    <label for="productName" />
    <input
      id="productName"
      type="text"
      class="form__input"
      placeholder="Введите наименование товара"
    >

    <AppText
      form-input-title-text
      class="mt-16"
    >
      Описание товара
    </AppText>
    <label for="productDescription" />
    <textarea
      id="productDescription"
      class="form__textarea"
      placeholder="Введите описание товара"
    />

    <AppText
      form-input-title-text
      class="mt-16"
    >
      Ссылка на изображение товара
    </AppText>
    <label for="imgLink" />
    <input
      id="imgLink"
      type="text"
      class="form__input"
      placeholder="Введите ссылку"
    >

    <AppText
      form-input-title-text
      class="mt-16"
    >
      Цена товара
    </AppText>
    <label for="productPrice" />
    <input
      id="productPrice"
      type="text"
      class="form__input"
      placeholder="Введите цену"
    >

    <AppButton class="mt-24">
      Добавить товар
    </AppButton>
  </form>
</template>

<script>
import AppText from '@/components/atoms/AppText'
import AppButton from '@/components/atoms/AppButton'
export default {
  components: {
    AppText,
    AppButton
  },
  methods: {
    formSubmit () {
      console.log('submit')
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  min-width: 332px;
  min-height: 440px;
  max-height: 440px;
  border: none;
  margin-right: 16px;
  border-radius: 4px;
  padding: 24px;
  &__input {
    margin-top: 4px;
    border: none;
    border-radius: 4px;
    height: 36px;
    width: 100%;
    outline: none;
    padding: 10px 16px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    ::placeholder {
      color: #B4B4B4;
    }
  }
  &__textarea {
    font-family: Source Sans Pro, sans-serif;
    margin-top: 4px;
    border: none;
    border-radius: 4px;
    height: 36px;
    width: 100%;
    outline: none;
    padding: 10px 16px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    min-height: 108px;
    resize: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    ::placeholder {
      color: #B4B4B4;
    }
  }
}
</style>
