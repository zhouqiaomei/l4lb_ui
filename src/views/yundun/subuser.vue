<template>
  <div>
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline form-left"
    >
      <el-form-item label="云厂商: ">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
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
import { get_yundun_subuser } from "@/api/dispatch";

export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "腾讯云",
        },
        {
          value: "选项2",
          label: "阿里云",
        },
        {
          value: "选项3",
          label: "华为云",
        },
        {
          value: "选项4",
          label: "优云",
        },
      ],
      value: "",
    };
  },
  methods: {
    onSubmit() {
      console.log(this.formInline.view);
      console.log(process.env.HOST);
      console.log(process.env.PORT);
      console.log(process.env.VUE_APP_BASE_API);
      resource_by_view({ view: this.formInline.view }).then((res) => {
        console.log("res", res);
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
