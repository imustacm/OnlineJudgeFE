<template>
    <div class="footer-bg">
        <div class="line"></div>
        <Row type="flex"  justify="center">
            <el-col :span="24">© 2006-2019 ACM Camp of Inner Mongolia University of Science & Technology ( IMUSTACM ) All Rights Reserved.</el-col>
        </Row>
        <Row type="flex"  justify="center">
            <el-col :span="24"><el-link href="#" type="info">冀ICP备17006982号-1</el-link> <el-link href="#" type="info">冀公网安备 13082102000025号</el-link></el-col>
        </Row>
    </div>
</template>

<script>
import {Col, Row, Link} from 'element-ui'
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    Row,
    'el-col': Col,
    'el-link': Link
  }
}
</script>
<style scoped>
.footer-bg{
    padding: 20px;
    background-color: rgb(240, 240, 241);
    text-align: center;
    color: #909399;
}
</style>
