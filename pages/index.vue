<template lang="pug">
div
  ul
    li
      nuxt-link.link(to="/01")
        h1 01 Pull RequestとCIを使ったGitHub Flowなブログ環境を作ってみた
        img.thumbnail(src="./01/assets/01.png")
    li
      nuxt-link.link(to="/02")
        h1 02 Font Awesomeのアイコンを検索できるAlfred 2のWorkflowを作ってみた
        img.thumbnail(src="./02/assets/01.png")

</template>

<script>
export default {
  head() {
    return {
      title: 'トップページ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'トップページです'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.link {
  h1 {
    font-size: 1.4rem;
  }
}
.thumbnail {
  width: 240px;
  height: 120px;
}
</style>
