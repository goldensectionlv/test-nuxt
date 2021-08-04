<template>
  <transition name="slideSnack">
    <div
      v-if="snackBarText"
      class="snackContainer snackMobile"
    >
      <div class="snackBody">
        <span> {{ prefix }}
          <span style="font-weight: bold">
            {{ snackBarText }}
          </span>
          {{ suffix }} </span>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters('isMobile', ['isMobile']),
    ...mapGetters('snackBar', ['snackBarText'])
  }

}
</script>

<style lang="scss" scoped>

.snackContainer {
  position: fixed;
  z-index: 4;
}

.snackMobile {
  position: fixed;
  z-index: 4;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.snackBody {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  height: 60px;
  min-width: 332px;
  border-radius: 12px;
  background-color: rgba(0,0,0,.9);
  color: white;
}

.slideSnack-leave-active,
.slideSnack-enter-active {
  transition: 300ms;
}
.slideSnack-enter {
  transform: translate(0, -100%);
}
.slideSnack-leave-to {
  transform: translate(0, -200%);
}
</style>
