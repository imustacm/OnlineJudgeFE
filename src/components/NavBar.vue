<template>
    <div class="navbar">
      <Menu
          :default-active="activeIndex"
          mode="horizontal"
          @select="handleSelect"
          text-color="#2c3e50"
          router
          active-text-color="rgb(86, 163, 251)"
      >
          <MenuItem>
            <ElImage :src="url" lazy style="height:36px;width:306px;line-height:40px;"></ELImage>
          </MenuItem>
          <MenuItem index="topic">table</MenuItem>
          <!-- <MenuItem index="/">首页</MenuItem> -->
          <Submenu index="#1">
              <template slot="title">IMUSTOJ</template>
              <MenuItem index="problem" >题目列表</MenuItem>
              <MenuItem index="#2">评判状态</MenuItem>
              <MenuItem index="#3">解题排名</MenuItem>
              <Submenu index="#4">
                  <template slot="title">竞赛中心</template>
                  <MenuItem index="#5">竞赛列表</MenuItem>
                  <MenuItem index="#6">实验平台</MenuItem>
              </Submenu>
              <MenuItem index="#7">常见问答</MenuItem>
          </Submenu>
          <MenuItem index="#8" disabled>IMUSTCPC</MenuItem>
          <Submenu index="#9">
              <template slot="title">互动平台</template>
              <MenuItem index="#10">成就排名</MenuItem>
              <MenuItem index="#11">打卡排名</MenuItem>
          </Submenu>
          <MenuItem index="#12">文件下载</MenuItem>
          <Submenu index="#13">
              <template slot="title">关于我们</template>
              <MenuItem index="AssociationIntroduction">协会简介</MenuItem>
              <MenuItem index="#15">荣誉展廊</MenuItem>
              <MenuItem index="TeamHead">历届会长</MenuItem>
              <MenuItem index="#21">开发团队</MenuItem>
              <MenuItem index="#17">联系我们</MenuItem>
          </Submenu>
          <MenuItem index="#18">寄语ACM</MenuItem>
          <MenuItem index="#19" class="float-right">注册</MenuItem>
          <MenuItem index="#20" class="float-right">登录</MenuItem>
      </Menu>
      <div class="line"></div>
    </div>
</template>

<script>
import {Menu, Submenu, MenuItem, Col, Row, Image} from 'element-ui'
export default {
  data () {
    return {
      fit: 'fill',
      url: 'https://www.imustacm.cn/imustacm/logo3.png',
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  components: {
    Row,
    Col,
    Menu,
    MenuItem,
    Submenu,
    'ElImage': Image
  }
}
</script>
<style scoped>
.float-right{
    float: right;
}
img.el-image__inner{
  width: 306px !important;
  height: 36px !important;
}
.navbar{
  position:fixed; /* 绝对定位，fixed是相对于浏览器窗口定位。 */
  top:0; /* 距离窗口顶部距离 */
  left:0; /* 距离窗口左边的距离 */
  width:100%; /* 宽度设置为100% */
  height:50px; /* 高度 */
  z-index:999; /* 层叠顺序，数值越大就越高。页面滚动的时候就不会被其他内容所遮挡。 */
  background:#0088cc;
}
</style>
