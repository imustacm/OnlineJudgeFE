<template>
  <div style="margin: 0px 0px 15px 0px">
    <el-row type="flex" justify="space-between">
      <el-col :span="12">
        <div>
          <span>语言:</span>
          <el-select :value="language" @change="onLangChange">
            <el-option v-for="item in languages" :key="item" :value="item" :label="item"></el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="fl-right">
          <span>主题:</span>
          <el-select :value="theme" @change="onThemeChange">
            <el-option v-for="item in themes" :key="item.label" :value="item.value" :label="item.label"></el-option>
          </el-select>
        </div>
      </el-col>
    </el-row>
    <br/>
    <codemirror :value="value" :options="options" @change="onEditorCodeChange" ref="myEditor"></codemirror>
  </div>
</template>
<script>
import { codemirror } from "vue-codemirror-lite";
// theme
import "codemirror/theme/monokai.css";
import "codemirror/theme/solarized.css";
import "codemirror/theme/material.css";
// mode
import "codemirror/mode/clike/clike.js";
import "codemirror/mode/python/python.js";
// active-line.js
import "codemirror/addon/selection/active-line.js";
// foldGutter
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/fold/foldgutter.js";
import "codemirror/addon/fold/brace-fold.js";
import "codemirror/addon/fold/indent-fold.js";
import { Row, Col, Select, Option, Tooltip, Button } from "element-ui";
export default {
  name: "CodeMirror",
  components: {
    codemirror,
    "el-row": Row,
    "el-col": Col,
    "el-select": Select,
    "el-option": Option,
    "el-tooltip": Tooltip,
    "el-button": Button
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    languages: {
      type: Array,
      default: () => {
        return ["C", "CPP", "Java", "Python2", "Python3"];
      }
    },
    language: {
      type: String,
      default: "C++"
    },
    theme: {
      type: String,
      default: "solarized"
    }
  },
  data() {
    return {
      options: {
        // codemirror options
        tabSize: 4,
        mode: "text/x-csrc",
        theme: "solarized",
        lineNumbers: true,
        line: true,
        // 代码折叠
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        // 选中文本自动高亮，及高亮方式
        styleSelectedText: true,
        lineWrapping: true,
        highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true }
      },
      mode: {
        "C++": "text/x-csrc",
        "C": "text/x-csrc",
        "Java": "text/x-java",
        "Python2": "text/x-python",
        "Python3": "text/x-python"
      },
      themes: [
        { label: "Monokai", value: "monokai" },
        { label: "Solarized Light", value: "solarized" },
        { label: "Material", value: "material" }
      ]
    };
  },
  mounted() {
    this.editor.setOption("mode", this.mode[this.language]);
    this.editor.focus();
  },
  methods: {
    onEditorCodeChange(newCode) {
      this.$emit("update:value", newCode);
    },
    onLangChange(newVal) {
      this.editor.setOption("mode", this.mode[newVal]);
      this.$emit("changeLang", newVal);
    },
    onThemeChange(newTheme) {
      this.editor.setOption("theme", newTheme);
      this.$emit("changeTheme", newTheme);
    }
  },
  computed: {
    editor() {
      return this.$refs.myEditor.editor;
    }
  },
  watch: {
    theme(newVal, oldVal) {
      this.editor.setOption("theme", newVal);
    }
  }
};
</script>
<style scoped>

</style>
