<template>
  <div>
    <div class="u-mb-lg">
      <p :class="{ active: page === '02' }">{{ page }}</p>
      <nuxt-link to="/">トップ</nuxt-link>
      <nuxt-link to="/01">Vol.1</nuxt-link>
      <nuxt-link to="/02">Vol.2</nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['page'])
  }
}
</script>
