<template>
  <div class="wrapper">
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.container {
  width: 100%;
  max-width: 1440px;
  padding: 35px;
}

@media (max-width: 600px) {
  .container {
    padding: 21px;
  }
}

.mt-4 {
  margin-top: 4px;
}

.mt-16 {
  margin-top: 16px !important;
}

.mt-24 {
  margin-top: 24px;
}
.mt-32 {
  margin-top: 32px !important;
}

</style>
