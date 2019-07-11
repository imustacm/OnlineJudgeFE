<template>
  <div style="padding:20px;">
    <h1>各编辑器</h1>
    <h2>
      富文本编辑器
      <a href="https://github.com/wangfupeng1988/wangEditor/">wangEditor</a>
    </h2>
    <p>用于编辑新闻等需要排版的内容</p>
    <div ref="editor" style="text-align:left"></div>
    <h2>代码编辑器</h2>
    <p>用于代码的上传</p>
    <CodeMirror
      :value.sync="code"
      :languages="problem.languages"
      :language="language"
      :theme="theme"
      @changeTheme="onChangeTheme"
      @changeLang="onChangeLang"
    ></CodeMirror>
  </div>
</template>
<script>
import E from "wangeditor";
import CodeMirror from "../components/common/CodeMirror";
let editor;
export default {
  data: function() {
    return {
      Title: "",
      Content: "",
      language: "C",
      theme: "solarized",
      code: "",
      problem: {
        languages: ["C", "CPP", "Java", "Python2", "Python3"]
      }
    };
  },
  components: {
    CodeMirror
  },
  mounted: function() {
    var That = this;
    editor = new E(this.$refs.editor);
    editor.customConfig = {
      onchange: function(html) {
        That.Content = html;
      },
      uploadImgServer: "/api/UploadImg", // 上传图片到服务器
      uploadFileName: "Content", //后端使用这个字段获取图片信息
      uploadImgMaxLength: 1 // 限制一次最多上传 1 张图片
    };
    editor.create();
  },
  methods: {
    onChangeLang(newLang) {
      this.language = newLang;
    },
    onChangeTheme(newTheme) {
      this.theme = newTheme;
    }
  }
};
</script>

<style scoped>
</style>