<template lang="pug">
div
  h1 {{ title }}
  img.thumbnail(src="./assets/01.png")
  p 今から1年ほど前に、自分でお気に入りのブログ環境を構築する記事が話題になっていて、それを読んだ時から、自分用のブログ環境を作りたいと思っていた。
  ul
    li
      a(href="http://tech.nitoyon.com/ja/blog/2012/09/20/moved-completed/") 俺の最強ブログ システムが火を噴くぜ - てっく煮ブログ
    li
      a(href="http://webtech-walker.com/archive/2012/09/fired-myblog.html") 俺の最強ブログシステムも火を噴いてたぜ - Webtech Walker
  p
    span 当時はそれどころではなかったこともあって、なかなか着手できずにいたんだけど、
    a(href="http://blog.ruedap.com/2013/07/26/reboooot") 今年の7月頃
    span から作り始めて、最近そこそこ希望通りの形になったので、まだやり残しはたくさんあるけれど、一旦ここで一区切りということでその内容を記事にしてみる。
</template>

<script>
export default {
  data() {
    return {
      title: '01 Pull RequestとCIを使ったGitHub Flowなブログ環境を作ってみた'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '今から1年ほど前に、自分でお気に入りのブログ環境を構築する記事が話題になっていて、それを読んだ時から、自分用のブログ環境を作りたいと思っていた。'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.thumbnail {
  width: 240px;
  height: 120px;
}
</style>
