
import Vue from 'vue'
Vue.directive('price', {
  bind (el) {
    el.oninput = function (e) {
      if (!e.isTrusted) {
        return
      }
      const x = this.value.replace(/\D/g, '').toString().split(' ').join('')
      console.log(x)
      if (x[0] === '0') {
        this.value = ''
      } else {
        this.value = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
      }
    }
  }
})
