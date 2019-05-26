<template lang="pug">
div
  h1 {{ title }}
  img.thumbnail(src="./assets/01.png")

  p 当時はブログの再開が2年ぶりだったけど、作ってみたシリーズも同じく2年ぶり。お久しぶり。さて今回は、ものすっごくニッチなツールだけど、Font Awesomeを使ってる人でAlfredを使ってる人には喜んでもらえる気がする。イコール自分のことなんですけどね。

  p あのアイコンフォントのクラス名を全然覚えられなくて、アイコンの数も300個以上あって把握できなくなっていて、毎回Font Awesomeのサイトを開いて探すのも面倒なので、 Font Awesomeのアイコンをインクリメンタルサーチしてそのクラス名をペーストできるAlfred 2用のプラグインを作ってみた。

  p 百聞は一見に如かず、どんなものかは以下のスクリーンキャストをご覧ください。
</template>

<script>
export default {
  data() {
    return {
      title:
        '02 Font Awesomeのアイコンを検索できるAlfred 2のWorkflowを作ってみた'
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
            '当時はブログの再開が2年ぶりだったけど、作ってみたシリーズも同じく2年ぶり。お久しぶり。さて今回は、ものすっごくニッチなツールだけど、Font Awesomeを使ってる人でAlfredを使ってる人には喜んでもらえる気がする。イコール自分のことなんですけどね。'
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
