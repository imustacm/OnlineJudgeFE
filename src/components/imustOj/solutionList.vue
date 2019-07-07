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
    let elTableColumn = this.td.getTableData("solutionList");
    let tableList = [];
    for (let i = 0; i < 20; i++) {
      tableList.push({
        solution_id: "127417" + i,
        username: "chocoli",
        topic_id: "1004",
        judgment_results: "Accepted",
        memory: "1092KB	",
        take_up_time: "0MS",
        language: "C++",
        code_length: "209B",
        submission_time: "2019-07-05 14:15:34"
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
