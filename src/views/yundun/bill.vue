<template>
<div>
    <el-form
      :inline="true"
      class="demo-form-inline form-left"
    >
      <el-form-item label="云厂商: ">
        <el-select v-model="value" placeholder="请选择云厂商">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  <el-table :data="tableData" v-loading="loading" :header-cell-style="headerStyle">
    <el-table-column prop="name" align="center" label="云平台"> </el-table-column>
    <el-table-column prop="user" align="center" label="账号"> </el-table-column>
    <el-table-column prop="bill" align="center" label="账户余额"> </el-table-column>
  </el-table>
</div>
</template>

<script>
import { get_yundun_bill } from "@/api/dispatch";

export default {
  data() {
    return {
      options: [
        {
          value: "腾讯云",
          label: "腾讯云",
          disabled: false
        },
        {
          value: "阿里云",
          label: "阿里云",
          disabled: false
        },
        {
          value: "华为云",
          label: "华为云",
          disabled: true
        },
        {
          value: "优云",
          label: "优云",
          disabled: true
        },
        {
          value: "AWS",
          label: "AWS",
          disabled: true
        },
      ],
      value: "",
      tableData: [],
      loading: false
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      // this.loading = true;
      // get_yundun_bill().then(res => {
      //   this.tableData = res.data.data;
      //   this.loading = false;
      // })
    },
    headerStyle() {
      return 'width: 100%;background-color: #f8f8f9;color: #515a6e;';
    },
    onSubmit() {
      this.loading = true;
      get_yundun_bill().then((res) => {
        this.tableData = res.data.data;
        this.loading = false;
      });
    },
    // tableRowClassName({ row, rowIndex }) {
    //   if (rowIndex === 1) {
    //     return "warning-row";
    //   } else if (rowIndex === 3) {
    //     return "success-row";
    //   }
    //   return "";
    // },
    // tableData() {
    //   return ""
    // }
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
