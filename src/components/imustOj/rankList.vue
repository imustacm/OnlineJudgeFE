<template>
  <el-row :gutter="0">
    <el-col :span="24" class="custom-card">
      <el-card shadow="never">
        <customElTable :tableData="tableData"></customElTable>
        <customPaging :total="tableListTotal"></customPaging>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import customElTable from "../common/customForm";
import customPaging from "../common/customPaging";
import { Card, Row, Col } from "element-ui";
export default {
  components: {
    customElTable,
    customPaging,
    "el-card": Card,
    "el-row": Row,
    "el-col": Col
  },
  data() {
    return {
      tableData: {
        tableList: [],
        elTableColumn: []
      },
      tableListTotal: 0
    };
  },
  created() {
    let elTableColumn = this.td.getTableData("rankList");
    let tableList = [];
    for (let i = 0; i < 20; i++) {
      tableList.push({
        ranking:  i,
        user_info: "1767159112",
        name: "刘洋",
        school: "内蒙古科技大学",
        major: "软件工程2017-1班",
        correct: "435",
        submit: "1703",
        accuracy: "25.543%"
      });
    }
    this.tableData = {
      tableList: tableList,
      elTableColumn: elTableColumn
    };
    this.tableListTotal = this.tableData.tableList.length;
  }
};
</script>

<style>
/* table列表 */
.custom-card {
  padding-right: 5px;
}
.custom-card .el-card__body {
  padding: 0 20px;
}
</style>
