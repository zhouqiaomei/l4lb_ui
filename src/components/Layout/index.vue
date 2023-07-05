<template>
  <div class="container">
    <!-- <el-container class="sidebar"> -->
      <el-aside style="width: 225px">
        <el-row style="margin-bottom: -6px; background-color: rgb(84, 92, 100)">
          <el-col>
            <el-menu
              style="border-right: none;"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              default-active="activeIndex2"
              @select="handleSelect"
            >
              <li role="menuitem" aria-haspopup="true" class="el-submenu">
                <div
                  class="el-submenu__title"
                  style="
                    padding-left: 20px;
                    color: rgb(255, 255, 255);
                    background-color: rgb(84, 92, 100);
                  "
                >
                  <img src="@/assets/logo.png" class="sidebar-logo" />
                  <span class="system-name">白山L4LB运维工具</span>
                </div>
                <ul
                  role="menu"
                  class="el-menu el-menu--inline"
                  style="background-color: rgb(84, 92, 100); display: none"
                ></ul>
              </li>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>运维工具</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/devops/vipCheck"
                    ><i class="el-icon-caret-right"></i
                    >vip故障检测</el-menu-item
                  >
                  <el-menu-item index="/devops/vipDeploy"
                    ><i class="el-icon-caret-right"></i
                    >cache规划信息查询</el-menu-item
                  >
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>资源工具</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/resource/snlvs"
                    ><i class="el-icon-caret-right"></i
                    >LVS资源规划查询</el-menu-item
                  >
                  <el-menu-item index="/resource/idc"
                    ><i class="el-icon-caret-right"></i
                    >IDC资源规划查询</el-menu-item
                  >
                  <el-menu-item index="/resource/view"
                    ><i class="el-icon-caret-right"></i
                    >查询view可规划LVS</el-menu-item
                  >
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>云平台工具</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/yundun/host"
                    ><i class="el-icon-caret-right"></i
                    >云平台主机信息查询</el-menu-item
                  >
                  <el-menu-item index="/yundun/bill"
                    ><i class="el-icon-caret-right"></i
                    >云平台账号账单查询</el-menu-item
                  >
                  <el-menu-item index="/yundun/subuser"
                    ><i class="el-icon-caret-right"></i
                    >云平台子账号管理</el-menu-item
                  >
                </el-menu-item-group>
              </el-submenu>

              <el-menu-item index="4" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">接口日志</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
    <!-- </el-container> -->

    <el-container class="content">
      <el-header class="content_header"
        >欢迎使用L4LB运维工具, 期待您的反馈！</el-header
      >
      <el-main class="content_main">
        <router-view />
      </el-main>
      <el-footer class="content_footer">© 2023 白山云科技有限公司 L4LB运维工具</el-footer>
    </el-container>
  </div>

  <!-- <br><el-divider></el-divider>
    <router-view /> -->
</template>

<script>
import router from "@/router";

export default {
  name: "Layout",
  data() {
    return {
      activeIndex2: "",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.activeIndex2 = key;
      // 跳转页面
      router.push(key);
    },
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  height: 100vh;
}
.el-row {
  height: 100%;
  width: 100%;
  margin: 0;
}
.sidebar {
  height: 100%;
}
.content {
  flex: 5;
  display: flex;
  height: 100vh;
}

.content_header {
  background-color: #545c64;
  -webkit-text-fill-color: #f0f0f0;
  text-align: center;
  line-height: 60px;
}

.content_footer {
  -webkit-text-fill-color: #909399;
  text-align: center;
  line-height: 60px;
}

.content_main {
  background-color: #f0f0f0;
  flex: 88;
}

.system-name {
  font-weight: 600;
  line-height: 50px;
  font-size: 14px;
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
}

.sidebar-logo {
  width: 32px;
  height: 32px;
  vertical-align: middle;
  margin-right: 12px;
}
</style>
