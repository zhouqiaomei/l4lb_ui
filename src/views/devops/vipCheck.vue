<template>
  <div style="height: 100%">
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline form-left"
    >
      <el-form-item label="VIP: ">
        <el-input
          v-model="formInline.vip"
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
    <el-card v-loading="loading" style="height: 80%" class="box-card">
      <div v-html='textarea1'></div>
    </el-card>
    
    <!-- <el-input
      type="textarea"
      text-color="red"
      :autosize="{ minRows: 10, maxRows: 100}"
      placeholder="请输入内容"
      v-model="textarea1">
    </el-input> -->

  </div>
</template>

<script>

import { vip_check } from '@/api/dispatch'

export default {
  data() {
    return {
      loading: false,
      formInline: {
        vip: "",
        region: "",
      },
      textarea1: 'read here'
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      this.loading = true;
      vip_check({ vip: this.formInline.vip }).then(res => {
        console.log("res", res);
        this.textarea1 = res.data;
        this.loading = false;
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
<style scoped lang="scss">
.form-left {
  text-align: left;
  /* padding: 3%; */
}
</style>
