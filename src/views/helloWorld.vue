<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>qiaomei.zhou@baishan.com</p>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: '欢迎使用运维工具箱'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
