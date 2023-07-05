<template>
  <div>
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline form-left"
    >
      <el-form-item label="VIEW: ">
        <el-input
          v-model="formInline.view"
          placeholder="eg：yd-henan"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-divider></el-divider>
    <el-descriptions title="查询结果"> </el-descriptions>
      <!-- <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
        <el-table-column prop="date" label="日期" width="180"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table> -->
  </div>
</template>

<script>
import { resource_for_snlvs } from "@/api/dispatch";

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
      console.log(this.formInline.view);

      resource_for_snlvs({ view: this.formInline.view }).then((res) => {
        console.log("res", res);
      });
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    tableData() {
      return ""
    }
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
