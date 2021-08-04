<template>
  <form
    class="form"
    action=""
    @submit.prevent="formSubmit"
  >
    <!--product name-->
    <div
      class="form__header"
    >
      <AppText
        form-input-title-text
      >
        Наименование товара
      </AppText>
      <div
        class="form__header__dot ml-2"
        :class="{'form__header__dot__success': $v.product.name.required}"
      />
    </div>
    <label for="productName" />
    <input
      id="productName"
      v-model.trim="$v.product.name.$model"
      type="text"
      class="form__input"
      :class="{'form__invalid' : $v.product.name.$error}"
      placeholder="Введите наименование товара"
    >
    <AppText
      v-if="$v.product.name.$dirty && !$v.product.name.required"
      class="mt-4"
      form-error-text
    >
      Обязательное поле
    </AppText>

    <!--product description-->
    <div
      class="form__header mt-16"
    >
      <AppText
        form-input-title-text
      >
        Описание товара
      </AppText>
      <div
        class="form__header__dot ml-2 form__header__dot__success"
      />
    </div>
    <label for="productDescription" />
    <textarea
      id="productDescription"
      v-model.trim="product.description"
      class="form__textarea"
      placeholder="Введите описание товара"
    />

    <!--product linkImg-->
    <div
      class="form__header mt-16"
    >
      <AppText
        form-input-title-text
      >
        Ссылка на изображение товара
      </AppText>
      <div
        class="form__header__dot ml-2"
        :class="{'form__header__dot__success': $v.product.imgLink.required}"
      />
    </div>
    <label for="imgLink" />
    <input
      id="imgLink"
      v-model.trim="$v.product.imgLink.$model"
      :class="{'form__invalid' : $v.product.imgLink.$error}"
      type="text"
      class="form__input"
      placeholder="Введите ссылку"
    >
    <AppText
      v-if="$v.product.imgLink.$dirty && !$v.product.imgLink.required"
      class="mt-4"
      form-error-text
    >
      Обязательное поле
    </AppText>

    <!--product price-->
    <div
      class="form__header mt-16"
    >
      <AppText
        form-input-title-text
      >
        Цена товара
      </AppText>
      <div
        class="form__header__dot ml-2"
        :class="{'form__header__dot__success': $v.product.price.required}"
      />
    </div>
    <label for="productPrice" />
    <input
      id="productPrice"
      v-model="$v.product.price.$model"
      v-mask="mask"
      :class="{'form__invalid' : $v.product.price.$error}"
      type="text"
      class="form__input"
      placeholder="Введите цену"
    >
    <AppText
      v-if="$v.product.price.$dirty && !$v.product.price.required"
      class="mt-4"
      form-error-text
    >
      Обязательное поле
    </AppText>

    <AppButton
      class="mt-24 zoom"
      :disabled="$v.product.$invalid"
    >
      Добавить товар
    </AppButton>
  </form>
</template>

<script>
import AppText from '@/components/atoms/AppText'
import AppButton from '@/components/atoms/AppButton'
import { mapActions, mapGetters } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

export default {
  components: {
    AppText,
    AppButton
  },
  mixins: [validationMixin],
  data () {
    return {
      mask: createNumberMask({
        prefix: '',
        allowDecimal: true,
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol: ' ',
        allowNegative: false
      }),
      product: {
        name: 'Galaxy Guardians',
        description: 'Отважному путешественнику Питеру Квиллу попадает в руки таинственный артефакт, ' +
          'принадлежащий могущественному и безжалостному злодею Ронану, строящему коварные планы по захвату Вселенной. ',
        imgLink: 'https://ixbt.online/gametech/covers/2021/06/16/RPtrqWyD1IaVM7JYcdQtGZQTJTerDpEe7xxOPoxj.jpg',
        price: 1000
      },
      defaultObject: {
        name: 'Auto Text',
        description: 'Отважному путешественнику Питеру Квиллу попадает в руки таинственный артефакт, ' +
          'принадлежащий могущественному и безжалостному злодею Ронану, строящему коварные планы по захвату Вселенной. ',
        imgLink: 'https://ixbt.online/gametech/covers/2021/06/16/RPtrqWyD1IaVM7JYcdQtGZQTJTerDpEe7xxOPoxj.jpg',
        price: 1000
      }
    }
  },
  validations: {
    product: {
      name: { required },
      imgLink: { required },
      price: { required }
    }
  },
  computed: {
    ...mapGetters('products', ['products']),
    ...mapGetters('filters', ['activeFilter'])
  },
  methods: {
    ...mapActions('products', ['addProduct']),
    ...mapActions('localStorage', ['updateLocalStorage']),
    ...mapActions('filters', ['filterBy']),

    formSubmit () {
      if (!this.$v.product.$error) {
        console.log(this.activeFilter)
        this.product.price = Number(this.product.price.split(' ').join(''))
        this.addProduct(this.product)
        this.filterBy({ filter: this.activeFilter, filteredArray: this.products, switchDirection: false })
        this.updateLocalStorage({ dataName: 'products', dataToAdd: this.products })
        this.product = { ...this.defaultObject }
        this.$nextTick(() => { this.$v.$reset() })
      }
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

  &__header {
    display: flex;

    &__dot {
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

  &__invalid {
    border: 1px solid #FF8484;
    box-sizing: border-box;
  }
}
</style>
