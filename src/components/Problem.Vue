<template>
<div style="margin-top:3px;">
  <el-row>
  <el-col :span="18">
    <Card class="box-card">
      <div slot="header" class="clearfix">
        <span>题目列表</span>
      </div>
      <div class="text item">
        <div style="float:right">
          <el-autocomplete
            popper-class="my-autocomplete"
            v-model="state"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            @select="handleSelect"
            >
            <i
              class="el-icon-search el-input__icon"
              slot="suffix"
              @click="handleIconClick">
            </i>
            <template slot-scope="{ item }">
              <div class='title'>{{item.id}}: {{ item.title }}</div>
              <!-- <span class='desc'>{{ item.desc }}</span> -->
            </template>
          </el-autocomplete>
          <el-button >搜索</el-button>
          <el-button type="text" icon="el-icon-magic-stick">随机做题</el-button>
        </div>
        <Table :data="tableData"
        height="550"
        stripe
        style="width: 100%">
        <TableColumn
          prop="problem_id"
          label="题目编号"
          width="180">
        </TableColumn>
        <TableColumn
          prop="problem_name"
          label="题目名称"
          width="180">
        </TableColumn>
        <TableColumn
          prop="problem_right"
          label="正确">
        </TableColumn>
        <TableColumn
          prop="problem_submit"
          label="提交">
        </TableColumn>
        <TableColumn
          prop="problem_rate"
          label="正确率">
        </TableColumn>
      </Table>
      <el-pagination style="margin-top:5px;"
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </Card>
  </el-col>
  <el-col :span="6">
    <Card>
      <div slot="header" class="clearfix">
      <span><i class="el-icon-hot-water"></i> 热门题目</span>
      </div>
      <div class="text item">
        <el-carousel height="50px" direction="vertical" :autoplay="true" indicator-position=none>
          <el-carousel-item v-for="item in recommandProblem" :key="item.id">
            <el-link type="primary">{{ item.id }}.{{ item.title }}</el-link>
          </el-carousel-item>
        </el-carousel>
      </div>
    </Card>
    <Card>
      <div slot="header" class="clearfix">
      <span><i class="el-icon-price-tag"></i> 标签</span>
      </div>
      <div class="text item">
        <span v-for="item in tags"
          :key="item.label">
          <el-tag v-if="item.active" effect="dark" @click="clickTag(item.label)">
          {{ item.label }}
         </el-tag>
         <el-tag v-else effect="plain" @click="clickTag(item.label)">
          {{ item.label }}
         </el-tag>
        </span>
      </div>
    </Card>
    <Card>
      <div slot="header" class="clearfix">
      <span><i class="el-icon-share"></i> 题目贡献</span>
      </div>
      <div class="text item">
        <el-steps :active="active" finish-status="success" align-center direction="vertical">
          <el-step title="准备" description="整理你的思路，代码，以及相关的测试数据"></el-step>
          <el-step title="上传" description="将你整理好的题目上传至imustacm"></el-step>
          <el-step title="审核" description="管理员审核你的题目和数据"></el-step>
          <el-step title="通过" description="题目将展示给大家"></el-step>
        </el-steps>
        <el-button v-if="active <= 3" style="margin-top: 12px;" @click="next">{{ next_step }}</el-button>
        <router-link v-else to="/"><el-button style="margin-top: 12px;">开始上传</el-button></router-link>
      </div>
    </Card>
  </el-col>
  </el-row>
</div>
</template>

<script>
// import router from 'vue-router'
import {Table, TableColumn, Card, Button, Row, Col, Pagination, Autocomplete, Divider, Link, Carousel, CarouselItem, Tag, Steps, Step} from 'element-ui'
import infiniteScroll from 'vue-infinite-scroll'
export default {
  data () {
    return {
      next_step: '下一步',
      active: 0,
      restaurants: [],
      state: '',
      tags: [
        {
          label: '模拟',
          active: true
        },
        {
          label: '图论',
          active: false
        },
        {
          label: '字符串',
          active: false
        },
        {
          label: '动态规划',
          active: false
        },
        {
          label: '搜索',
          active: false
        },
        {
          label: '贪心',
          active: false
        },
        {
          label: '新手',
          active: true
        },
        {
          label: '二叉树',
          active: false
        },
        {
          label: '这个是激活状态',
          active: true
        }
      ],
      tableData: [
        {
          problem_id: '1000',
          problem_name: 'Hello World',
          problem_submit: '3007',
          problem_right: '1034',
          problem_rate: '34.386%'
        }
      ],
      recommandProblem: [
        {
          id: '1000',
          title: '魔兽世界1'
        },
        {
          id: '1001',
          title: '魔兽世界2'
        },
        {
          id: '1002',
          title: '魔兽世界3'
        },
        {
          id: '1003',
          title: '魔兽世界4'
        },
        {
          id: '1004',
          title: '魔兽世界5'
        },
        {
          id: '1005',
          title: '魔兽世界6'
        }
      ]
    }
  },
  components: {
    Table,
    TableColumn,
    Card,
    'el-button': Button,
    'el-row': Row,
    'el-col': Col,
    'el-pagination': Pagination,
    'el-autocomplete': Autocomplete,
    'el-divider': Divider,
    'el-link': Link,
    'el-carousel': Carousel,
    'el-carousel-item': CarouselItem,
    'el-tag': Tag,
    'el-steps': Steps,
    'el-step': Step
  },
  methods: {
    clickTag (tagname) {
      alert(tagname)
    },
    next () {
      if (this.active++ === 3) {
      }
    },
    querySearch (queryString, cb) {
      let restaurants = this.restaurants
      let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter (queryString) {
      return (restaurant) => {
        return (restaurant.title.toLowerCase().indexOf(queryString.toLowerCase()) !== -1 || restaurant.id.indexOf(queryString.toLowerCase()) !== -1)
      }
    },
    loadAll () {
      return [
        {
          'id': '1000',
          'title': 'Hello Wolrd',
          'desc': '这是历史上最简单的题目了，但是当...'
        },
        {
          'id': '1251',
          'title': '天降人品',
          'desc': '只要你输出一个0到10之间的一个数，包含0和10...'
        },
        {
          'id': '1002',
          'title': '字母排序',
          'desc': '输入三个英文字母字符后，按各字符的ASCII码...'
        },
        {
          'id': '1003',
          'title': '计算两点间的距离',
          'desc': '输入两点坐标（x1，y1），（x2，y2），计算...'
        }
      ]
    },
    handleSelect (item) {
      // 点击item触发该动作
      console.log(item)
    },
    handleIconClick (ev) {
      console.log(ev)
    }
  },
  directives: {
    infiniteScroll
  },
  mounted () {
    this.restaurants = this.loadAll()
  }
}
</script>
<style scoped>
.title{
  font-size: 14px;
}
.desc{
  font-size: 12px;
}
.el-carousel__item{
  padding: 10px 0;
}
.el-tag{
  margin: 3px;
  cursor:pointer;
}
</style>
