<template>
  <div>
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline form-left"
    >
      <el-form-item label="VIP: ">
        <el-input
          v-model="formInline.view"
          placeholder="请输入要查询的VIP"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-divider></el-divider>
    <el-descriptions title="检查结果">

    </el-descriptions>

  </div>
</template>

<script>

import { vip_check } from '@/api/dispatch'

export default {
  data() {
    return {
      formInline: {
        view: "",
        region: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      console.log(this.formInline.vip);
      vip_check({ vip: this.formInline.vip }).then(res => {
        console.log("res", res);
      })
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.form-left {
  text-align: left;
  /* padding: 3%; */
}
</style>
