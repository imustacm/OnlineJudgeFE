<template>
  <div class="custom-paging">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :hide-on-single-page="hideOnSinglePage"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import { Pagination } from "element-ui";
export default {
  components:{
    'el-pagination':Pagination
  },
  props: {
    total: {
      type: Number,
      default() {
        return 0;
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {
      currentPage: 1,
      pageSizes: [100, 200, 300, 400], // 每页显示条数
      pageSize: 100, // 当前默认选中每页显示条数
      hideOnSinglePage: false // 隐藏分页
    };
  }
};
</script>

<style>
.custom-paging {
  width: 100%;
}
</style>
