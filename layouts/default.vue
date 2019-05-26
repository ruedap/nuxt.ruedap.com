<template lang="pug">
div
  logo
  header-nav
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
