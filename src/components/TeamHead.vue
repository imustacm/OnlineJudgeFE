<template>
  <div class="timeline-box">
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :type="'primary'"
        :size="activity.size"
        :timestamp="activity.timestamp"
        :placement="'top'"
      >
        <el-card class="card-box">
          <div slot="header" class="clearfix">
            <span>{{activity.content}}</span>
          </div>
          <div>
            <el-carousel :interval="4000" type="card" height="200px">
              <el-carousel-item v-for="item in activity.introduction" :key="item.name">
                <div class="carousel-item-box">
                  <el-row :gutter="20">
                    <el-col :span="12">
                      <div>
                        <el-image :src="item.photo_url">
                        </el-image>
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div class="introduction-box">{{item.classes}}: {{item.name}}</div>
                    </el-col>
                  </el-row>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
import {
  Timeline,
  TimelineItem,
  Image,
  Card,
  Carousel,
  Row,
  Col,
  CarouselItem
} from "element-ui";
export default {
  data() {
    return {
      activities: [
        {
          content: "会长：姜威  副会长：陈诗萌、刘洋、王剑波、李浩",
          timestamp: "2018-2019学年度",
          size: "large",
          introduction: [
            {
              classes: "软件2016-2班",
              name: "姜威",
              photo_url: 'https://www.imustacm.cn/imustacm/teamHead/none.jpg'
            },
            {
              classes: "软件2016-2班",
              name: "陈诗萌",
              photo_url: 'https://www.imustacm.cn/imustacm/teamHead/none.jpg'
            },
            {
              classes: "软件2017-1班",
              name: "刘洋",
              photo_url: 'https://www.imustacm.cn/imustacm/teamHead/none.jpg'
            },
            {
              classes: "计科2017-1班",
              name: "王剑波",
              photo_url: 'https://www.imustacm.cn/imustacm/teamHead/none.jpg'
            },
            {
              classes: "软件2017-2班",
              name: "李浩",
              photo_url: 'https://www.imustacm.cn/imustacm/teamHead/none.jpg'
            }
          ]
        },
        {
          content: "会长：卢志皓  副会长：武伟、陈诗萌",
          timestamp: "2017-2018学年度"
        },
        {
          content: "会长：赵亚琼  副会长：莫杰、李嘉齐",
          timestamp: "2016-2017学年度"
        },
        {
          content: "会长：王健力  副会长：张玄昱、何琦、胡建勇、赵亚琼",
          timestamp: "2015-2016学年度"
        },
        {
          content: "会长：林耀鹏  副会长：刘少华、侯龙超",
          timestamp: "2014-2015学年度"
        },
        {
          content: "会长：林耀鹏  副会长：刘少华、侯龙超",
          timestamp: "2013-2014学年度"
        },
        {
          content: "会长：胡书培  副会长：高源成、朱乐天",
          timestamp: "2012-2013学年度"
        },
        {
          content: "会长：张力  副会长：马东亮、杨佳楠",
          timestamp: "2011-2012学年度"
        },
        {
          content: "会长：周宝  副会长：贾治宝、张力",
          timestamp: "2010-2011学年度"
        },
        {
          content: "会长：何伟  副会长：宇剑春、郑浩宇",
          timestamp: "2009-2010学年度"
        }
      ]
    };
  },
  methods: {},
  components: {
    "el-row": Row,
    "el-col": Col,
    "el-timeline": Timeline,
    "el-timeline-item": TimelineItem,
    "el-image": Image,
    "el-card": Card,
    "el-carousel": Carousel,
    "el-carousel-item": CarouselItem
  }
};
</script>

<style scoped>
.timeline-box {
  /* text-align: center; */
  padding: 3% 6% 0 6%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.carousel-item-box{
    padding: 10px;
}
.introduction-box{
    padding-top: 10px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #EBEEF5;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #F2F6FC;
}
.image-error{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #f5f7fa;
    color: #909399;
    font-size: 30px;
}
</style>


