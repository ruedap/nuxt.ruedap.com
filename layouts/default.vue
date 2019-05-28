<template lang="pug">
.container
  .left
    logo
  .center
    header-nav
  .right
    nuxt
</template>

<script>
import HeaderNav from '~/components/HeaderNav.vue'
import Logo from '@/assets/svg/logo.svg'

export default {
  components: {
    HeaderNav,
    Logo
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}

.left {
  margin: 30px 40px 0 0;
}

.center {
  margin: 80px 0 40px 0;
  flex: 0 0 160px;
}

.right {
  margin: 20px 40px 40px 0;
}
</style>

<style>
.page-enter-active {
  transition: opacity 0.15s ease-out;
}
.page-leave-active {
  transition: opacity 0.15s ease-in;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(20px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-20px, 0);
}
</style>
