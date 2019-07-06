<template>
  <div>
    <customElTable :tableData="tableData"></customElTable>
    <customPaging :total="tableListTotal"></customPaging>
  </div>
</template>

<script>
import customElTable from "../common/customForm";
import customPaging from "../common/customPaging";
export default {
  components: {
    customElTable,
    customPaging
  },
  data() {
    return {
      tableList: [
        {
          topic_id: "1000",
          topic_name: "Hello World",
          correct: "1034",
          submit: "3007",
          accuracy: "34.386%"
		},
		{
          topic_id: "1000",
          topic_name: "Hello World",
          correct: "1034",
          submit: "3007",
          accuracy: "34.386%"
        },
		{
          topic_id: "1000",
          topic_name: "Hello World",
          correct: "1034",
          submit: "3007",
          accuracy: "34.386%"
        },
		{
          topic_id: "1000",
          topic_name: "Hello World",
          correct: "1034",
          submit: "3007",
          accuracy: "34.386%"
        },
		{
          topic_id: "1000",
          topic_name: "Hello World",
          correct: "1034",
          submit: "3007",
          accuracy: "34.386%"
        },
		{
          topic_id: "1000",
          topic_name: "Hello World",
          correct: "1034",
          submit: "3007",
          accuracy: "34.386%"
        },
		{
          topic_id: "1000",
          topic_name: "Hello World",
          correct: "1034",
          submit: "3007",
          accuracy: "34.386%"
        },
		{
          topic_id: "1000",
          topic_name: "Hello World",
          correct: "1034",
          submit: "3007",
          accuracy: "34.386%"
        },
		{
          topic_id: "1000",
          topic_name: "Hello World",
          correct: "1034",
          submit: "3007",
          accuracy: "34.386%"
        },
		{
          topic_id: "1000",
          topic_name: "Hello World",
          correct: "1034",
          submit: "3007",
          accuracy: "34.386%"
        },
		{
          topic_id: "1000",
          topic_name: "Hello World",
          correct: "1034",
          submit: "3007",
          accuracy: "34.386%"
        },
		{
          topic_id: "1000",
          topic_name: "Hello World",
          correct: "1034",
          submit: "3007",
          accuracy: "34.386%"
        },
		{
          topic_id: "1000",
          topic_name: "Hello World",
          correct: "1034",
          submit: "3007",
          accuracy: "34.386%"
        },
		{
          topic_id: "1000",
          topic_name: "Hello World",
          correct: "1034",
          submit: "3007",
          accuracy: "34.386%"
        },
		{
          topic_id: "1000",
          topic_name: "Hello World",
          correct: "1034",
          submit: "3007",
          accuracy: "34.386%"
        },
		{
          topic_id: "1000",
          topic_name: "Hello World",
          correct: "1034",
          submit: "3007",
          accuracy: "34.386%"
        }
      ],
      tableData: {
        tableList: [],
        elTableColumn: []
	  },
	  tableListTotal:0
    };
  },
  created(){
	  let elTableColumn = this.td.getTableData("topicList")
	  this.tableData =  {
        tableList: this.tableList,
        elTableColumn: elTableColumn
	  }
	  this.tableListTotal = this.tableData.tableList.length
  },
};
</script>

<style>
</style>
