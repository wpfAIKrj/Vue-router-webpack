<template>
  <div>
    这是{{page}}页面
    <div @click="showYou()">测试点击</div>
  </div>
</template>
<script>
  module.exports = {
    data: function() {
      return {
        page: '666'
      }
    },
    methods: {
      showYou(name='wang',sex='man') {
        console.log(`my name is ${name}`)
      }
    }
  }
</script>
<style lang="scss">
$color:#02cff6;
div {
  color: $color;
}
</style>
