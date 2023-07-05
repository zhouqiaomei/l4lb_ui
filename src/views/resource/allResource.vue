<template>
  <div>
    <el-descriptions title="查询结果"> </el-descriptions>
    <el-divider></el-divider>
  </div>
</template>

<script>
import { resource_for_idc } from "@/api/dispatch";

export default {
  data() {
    return {
      formInline: {
        view: "",
        region: "",
      },
    };
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
