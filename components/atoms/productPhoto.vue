<template>
  <div class="aspect-ratio-box-photo">
    <div
      class="aspect-ratio-box-photo__inside"
      :style="{
        backgroundImage: `url('${imgLink}')`
      }"
    />
  </div>
</template>

<script>
export default {
  props: {
    imgLink: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.aspect-ratio-box-photo {
  width: 100%;
  padding-bottom: 64%;
  position: relative;

  &__inside {
    width: 100%;
    height: 100%;
    position: absolute;
    background-position: center;
    background-size: cover;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
}
</style>
