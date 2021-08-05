<template>
  <form
    class="form"
    action=""
    @submit.prevent="formSubmit"
  >
    <formInput
      header-text="Наименование товара"
      :header-dot-condition="$v.product.name.required"
      :alert-condition="$v.product.name.$dirty && !$v.product.name.required"
    >
      <label for="productName" />
      <input
        id="productName"
        v-model.trim="$v.product.name.$model"
        type="text"
        class="form__input"
        :class="{'form__invalid' : $v.product.name.$error}"
        placeholder="Введите наименование товара"
      >
    </formInput>

    <formInput header-text="Описание товара">
      <label for="productDescription" />
      <textarea
        id="productDescription"
        v-model.trim="product.description"
        class="form__input form__textarea"
        placeholder="Введите описание товара"
      />
    </formInput>

    <formInput
      header-text="Ссылка на изображение товара"
      :header-dot-condition="$v.product.imgLink.required"
      :alert-condition="$v.product.imgLink.$dirty && !$v.product.imgLink.required"
    >
      <label for="imgLink" />
      <input
        id="imgLink"
        v-model.trim="$v.product.imgLink.$model"
        :class="{'form__invalid' : $v.product.imgLink.$error}"
        type="text"
        class="form__input"
        placeholder="Введите ссылку"
      >
    </formInput>

    <formInput
      header-text="Цена товара"
      :header-dot-condition="$v.product.price.required"
      :alert-condition="$v.product.price.$dirty && !$v.product.price.required"
    >
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
    </formInput>

    <AppButton
      class="mt-24 zoom"
      :disabled="$v.product.$invalid"
    >
      Добавить товар
    </AppButton>
  </form>
</template>

<script>
import AppButton from '@/components/atoms/AppButton'
import { mapActions, mapGetters } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import formInput from '@/components/molecules/formInput'

export default {
  components: {
    AppButton,
    formInput
  },
  mixins: [validationMixin],
  data () {
    return {
      alphabet: 'abcdefghijklmnopqrstuvwxyz', /* для генерации рандомного названия */
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
    ...mapActions('snackBar', ['activateSnack']),

    formSubmit () {
      if (!this.$v.product.$error) {
        this.product.price = Number(this.product.price.split(' ').join(''))

        this.addProduct(this.product)
        this.filterBy({ filter: this.activeFilter, filteredArray: this.products, switchDirection: false })
        this.updateLocalStorage({ dataName: 'products', dataToAdd: this.products })
        this.activateSnack(this.product.name)

        this.product = { ...this.defaultObject }

        this.product.name = this.alphabet[Math.floor(Math.random() * this.alphabet.length)].toUpperCase() + ' Auto Text'
        this.product.price = Math.floor(Math.random() * (100000 - 100)) + 100

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

  &__input {
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
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    ::placeholder {
      color: #B4B4B4;
    }
  }

  &__textarea {
    min-height: 108px;
    resize: none;
  }

  &__invalid {
    border: 1px solid #FF8484;
    box-sizing: border-box;
  }
}
</style>
