<template>
  <el-table
    :data="tableData.tableList"
    :stripe="true"
    height="400"
    style="width: 100%"
    max-height="400"
  >
    <el-table-column
      v-for="(item,index) in tableData.elTableColumn"
      :key="index"
      :fixed="item.fixed"
      :prop="item.prop"
      :label="item.label"
      :width="item.width"
    ></el-table-column>
    <el-table-column fixed="right" label="操作" width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small"
        >移除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    deleteRow(index, rows) {
      console.log(index);

      rows.splice(index, 1);
    }
  },
  data() {
    return {
      elTableColumn: []
    };
  }
};
</script>