<template>
  <el-row :gutter="0">
    <el-col :span="18" class="custom-card">
      <el-card shadow="never">
        <customElTable :tableData="tableData"></customElTable>
        <customPaging :total="tableListTotal"></customPaging>
      </el-card>
    </el-col>
    <el-col :span="6">
      <!-- 热门题目 -->
      <el-card class="margin-bottom" shadow="never">
        <div slot="header" class="clearfix">
          <span>
            <i class="el-icon-hot-water"></i> 热门题目
          </span>
        </div>
        <div class="text item">
          <el-carousel
            height="50px"
            direction="vertical"
            :autoplay="true"
            indicator-position="none"
          >
            <el-carousel-item v-for="item in recommandProblem" :key="item.id">
              <el-link type="primary">{{ item.id }}.{{ item.title }}</el-link>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-card>
      <!-- 标签 -->
      <el-card class="margin-bottom" shadow="never">
        <div slot="header" class="clearfix tips-position">
          <span>
            <i class="el-icon-price-tag"></i> 标签
          </span>
          <el-button class="tips-more" style="float: right; padding: 3px 0" type="text">获取更多</el-button>
        </div>
        <div class="text item">
          <span v-for="item in tags" :key="item.label">
            <!-- <el-tag v-if="item.active" effect="dark" @click="clickTag(item.label)">{{ item.label }}</el-tag>
            <el-tag v-else effect="plain" @click="clickTag(item.label)">{{ item.label }}</el-tag>-->
            <el-tag effect="plain" @click="clickTag(item.label)">{{ item.label }}</el-tag>
          </span>
        </div>
      </el-card>
      <!-- 题目贡献 -->
      <el-card shadow="never">
        <div slot="header" class="clearfix">
          <span>
            <i class="el-icon-share"></i> 题目贡献
          </span>
        </div>
        <div class="text item">
          <el-steps :active="active" finish-status="success" align-center direction="vertical">
            <el-step title="准备" description="整理你的思路，代码，以及相关的测试数据"></el-step>
            <el-step title="上传" description="将你整理好的题目上传至imustacm"></el-step>
            <el-step title="审核" description="管理员审核你的题目和数据"></el-step>
            <el-step title="通过" description="题目将展示给大家"></el-step>
          </el-steps>
          <el-button v-if="active <= 3" style="margin-top: 12px;" @click="next">{{ next_step }}</el-button>
          <router-link v-else to="/">
            <el-button style="margin-top: 12px;">开始上传</el-button>
          </router-link>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import customElTable from "../common/customForm";
import customPaging from "../common/customPaging";
import {
  Card,
  Button,
  Row,
  Col,
  Link,
  Carousel,
  CarouselItem,
  Tag,
  Steps,
  Step
} from "element-ui";

export default {
  components: {
    customElTable,
    customPaging,
    "el-card": Card,
    "el-button": Button,
    "el-row": Row,
    "el-col": Col,
    "el-link": Link,
    "el-carousel": Carousel,
    "el-carousel-item": CarouselItem,
    "el-tag": Tag,
    "el-steps": Steps,
    "el-step": Step
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
      tableListTotal: 0,
      recommandProblem: [
        {
          id: "1000",
          title: "魔兽世界1"
        },
        {
          id: "1001",
          title: "魔兽世界2"
        },
        {
          id: "1002",
          title: "魔兽世界3"
        },
        {
          id: "1003",
          title: "魔兽世界4"
        },
        {
          id: "1004",
          title: "魔兽世界5"
        },
        {
          id: "1005",
          title: "魔兽世界6"
        }
      ],
      tags: [
        {
          label: "模拟",
          active: true
        },
        {
          label: "图论",
          active: false
        },
        {
          label: "字符串",
          active: false
        },
        {
          label: "动态规划",
          active: false
        },
        {
          label: "搜索",
          active: false
        },
        {
          label: "贪心",
          active: false
        },
        {
          label: "新手",
          active: true
        },
        {
          label: "二叉树",
          active: false
        },
        {
          label: "这个是激活状态",
          active: true
        }
      ],
      //   题目贡献
      next_step: "下一步",
      active: 0
    };
  },
  created() {
    let elTableColumn = this.td.getTableData("topicList");
    this.tableData = {
      tableList: this.tableList,
      elTableColumn: elTableColumn
    };
    this.tableListTotal = this.tableData.tableList.length;
  },
  methods: {
    clickTag(tagname) {
      alert(tagname);
    },
    // 题目贡献 下一步
    next() {
      if (this.active++ === 3) {
      }
    }
  }
};
</script>

<style>
.margin-bottom {
  margin-bottom: 5px;
}
.el-tag {
  margin: 0 5px 5px;
  cursor: pointer;
}
/* 设置card标题高度 */
.el-card__header {
  padding: 12px 0;
}
/* 标签设置hover样式 */
.el-tag--plain:hover {
  background-color: #409eff;
  border-color: #409eff;
  color: #fff;
}
/* 标签-更多 */
.tips-position {
  position: relative;
}
.tips-more {
  position: absolute;
  right: 10px;
  top: 0px;
}
/* 热门题目 内容 */
.el-card__body {
  padding: 10px 20px;
}
.el-carousel__container {
  line-height: 50px;
}
/* table列表 */
.custom-card {
  padding-right: 5px;
}
.custom-card .el-card__body {
  padding: 0 20px;
}
</style>
