<template>
  <div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="/devops/vipCheck">VIP故障检测</el-menu-item>
        <el-menu-item index="/resource/snlvs">LVS资源规划查询</el-menu-item>
        <el-menu-item index="/resource/idc">IDC资源规划查询</el-menu-item>
        <el-menu-item index="/resource/view">查询view可规划LVS</el-menu-item>
        <el-submenu index="2-5">
          <template slot="title">其他工具</template>
          <el-menu-item index="2-5-1">选项1</el-menu-item>
          <el-menu-item index="2-5-2">选项2</el-menu-item>
          <el-menu-item index="2-5-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>记录查询</el-menu-item>
      <el-menu-item index="4"><a href="https://xxx" target="_blank">使用说明</a></el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>
  
<script>
import router from "@/router";

export default {
  name: "Layout",
  data() {
    return {
      activeIndex2: ''
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.activeIndex2 = key
      // todo 跳转页面
      router.push(key);
    }
  }
};
</script>
  
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
  