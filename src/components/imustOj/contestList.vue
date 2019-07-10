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
    let elTableColumn = this.td.getTableData("contestList");
    let tableList = [];
    for (let i = 0; i < 20; i++) {
      tableList.push({
        competition_number:  i,
        competition_name: "CCPC 2019 - 内蒙古自治区第十四届大学生程序设计竞赛 正式赛 真题再现",
        status: "已结束",
        time: "结束于：2019-05-31 22:00:00",
        auth: "公开",
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
