<template>
  <div>
    <div class="image-box">
      <el-image
        :src="'https://www.imustacm.cn/imustacm/logo3.png'"
        :fit="'fill'"
        style="width: 600px;padding-top:30px;"
      >
      </el-image>
    </div>
    <div class="text-box">
      <p>ACM：Association for Computing Machinery，即国际计算机学会。ICPC：International Collegiate Programming Contest，即国际大学生程序设计竞赛。ACM国际大学生程序设计竞赛（英文全称：ACM International Collegiate Programming Contest，通常简称：ACM / ICPC或ICPC）是由国际计算机学会（ACM）主办的，一项旨在展示大学生创新能力、团队精神和在压力下编写程序、分析和解决问题能力的年度竞赛，是世界上公认的规模最大、水平最高的国际大学生程序设计竞赛。经过近30多年的发展，ACM国际大学生程序设计竞赛已经发展成为最具影响力的大学生计算机竞赛，是广大爱好计算机编程的大学生、特别是计算机、软件类大学生展示才华的舞台，是大学计算机教学水平、学生素质的直接体现。在各级ACM竞赛活动中涌现出的优秀学子，也深受IT企业的青睐。</p>
      <p>内蒙古科技大学ACM程序设计协会成立于2006年9月6日，是基于国际大学生ACM程序设计竞赛而成立的实践类学习型的学生社团。协会指导老师是兰孝文老师、丁雨老师和郝斌老师，ACM竞赛集训队现有成员20余人。</p>
      <p>协会在积极组织集训队的同时，也调动更广大同学学习计算机知识的积极性、主动性，全面提高同学们算法与程序设计能力，突出编程能力和思维的训练，营造浓厚的学习氛围，增强同学们的总体素质和竞争力。ACM程序设计协会将依靠师生共同的力量，热诚为学生的全面成长服务，以培养会员的编程创新能力为核心，兼顾低年级大学生计算机基础知识学习组织与帮扶的目标，创造性地开展工作。</p>
      <p>协会主要开展的活动：</p>
      <p>协会分为两个小组，ACM程序设计小组与基础兴趣小组。</p>
      <p>对于ACM程序设计小组，我们的要求是对计算机编程特别感兴趣，有一定的计算机语言基础和用计算机编程解决问题的能力，并能实实在在的一直参加协会的活动。我们主要学习和交流的内容是算法与数据结构，其中主要包括递归与分治，回溯法，动态规划，数组与字符串的处理，数据结构，数论和一些ACM题目。我们也会定期布置一些题目让大家来做，或让大家对自己做过的题目做些分析、讲解等。</p>
      <p>对于基础学习小组，我们的要求是对计算机编程感兴趣，有一定的自学能力，能够踏实地参加协会组织的学习交流活动。我们主要学习和交流的内容是C语言设计基础、Java编程基础等，其中包括编程语言的基本语句和语法和一些基本的设计题目。这个小组的目的是增加协会在学校的影响力，增加计算机专业同学与其他专业同学在编程知识学习方面的交流，目标是提供一个平台，锻炼我们自己，也能够让大家学到关于编程方面的知识。</p>
      <p>内蒙古科技大学ACM程序设计协会热忱欢迎对编程有兴趣或想学好编程的同学的加入！</p>
    </div>
    <div class="image-box">
      <el-image
        :src="'https://www.imustacm.cn/imustacm/about/about2.jpg'"
        :fit="'fill'"
        style="width: 628px; height: 424px"
      ></el-image>
      <br />
      <span class="image-introduction">内蒙古科技大学ACM程序设计协会2013-2016级协会部分成员合影</span>
    </div>
    <div class="image-box">
      <el-image
        :src="'https:////www.imustacm.cn/imustacm/about/about1.jpg'"
        :fit="'fill'"
        style="width: 628px; height: 424px"
      ></el-image>
      <br />
      <span class="image-introduction">内蒙古科技大学ACM程序设计协会2013-2016级协会部分成员合影</span>
    </div>
  </div>
</template>

<script>
import { Image } from "element-ui";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    "el-image": Image
  }
};
</script>
<style scoped>
.text-box{
  line-height: 2;
  text-indent: 2em;
  padding-left: 10%;
  padding-right: 10%;
  color: #606266;
}
.image-box {
  text-align: center;
  padding-bottom: 14px;
}
.image-introduction {
  color: #909399;
  font-size: 12px;
}
</style>
