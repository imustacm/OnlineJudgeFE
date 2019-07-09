<template>
  <div class="faq-box">
    <el-card class="box-card">
      <h3>常见问答</h3>
      <div>
        <p>
          <span class="question-title">
            <i class="el-icon-question"></i>
            Q1: IMUSTOJ系统使用什么样的编译器和编译选项？
          </span>
        </p>
        <div class="answer-body">
          <p>
            <span class="answer-title">
              <i class="el-icon-chat-line-round"></i> A1:
            </span>
            系统运行于Ubuntu 14.04 Linux。使用GNU GCC/G++作为C/C++编译器，Free Pascal作为Pascal编译器，用Sun-Java-JDK1.7编译Java。对应的编译选项如下：
          </p>
          <div v-for="item in compile_language" :key="item.name" class="compile-list">
            <el-row :gutter="20">
              <el-col :span="1" :offset="1">
                <div class="grid-content bg-purple">
                  <span class="compile-list-language-name">{{item.name}}</span>
                </div>
              </el-col>
              <el-col :span="18">
                <div class="grid-content bg-purple">
                  <span class="compile-list-language-args">{{item.args}}</span>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="other-warning">
            <p>*Java has 2 more seconds and 512M more memory when running and judging.</p>
          </div>
          <div class="other-info">
            <p>编译器版本为（系统可能升级编译器版本，这里仅供参考）：</p>
            <ul>
              <li>GCC (Ubuntu/Linaro 4.4.4-14ubuntu5) 4.8.4</li>
              <li>Glibc 2.3.6</li>
              <li>Free Pascal Compiler 2.4.0-2 [2010/03/06] for i386</li>
              <li>Java 1.7.0_79</li>
              <li>Python 3.4.3</li>
            </ul>
          </div>
        </div>
      </div>
      <el-divider></el-divider>
      <div>
        <p>
          <span class="question-title">
            <i class="el-icon-question"></i>
            Q2: 程序怎样取得输入、进行输出？
          </span>
        </p>
        <div class="answer-body">
          <p>
            <span class="answer-title">
              <i class="el-icon-chat-line-round"></i> A2:
            </span>
            你的程序应该从标准输入 stdin（“Standard Input”）获取输入数据并将结果输出到标准输出 stdout（“Standard Output”）。例如，在C语言可以使用 “scanf”，在C++可以使用“cin”进行输入；在C语言使用“printf”，在C++使用“cout”进行输出。用户提交的程序不允许直接读写文件，如果这样做可能会被判为运行时错误 （Runtime Error）。
          </p>
          <p>为了方便解释，下面给出的是1005题的参考答案：</p>
          <h4>C</h4>
          <pre><code class="language-c" v-text="c_code"></code></pre>
          <h4>C++</h4>
          <pre><code class="language-cpp">{{cpp_code}}</code></pre>
          <h4>Java</h4>
          <pre><code class="language-java">{{java_code}}</code></pre>
          <h4>Python2</h4>
          <pre><code class="language-python">{{py2_code}}</code></pre>
          <h4>Python3</h4>
          <pre><code class="language-python">{{py3_code}}</code></pre>
        </div>
      </div>
      <el-divider></el-divider>
      <div>
        <p>
          <span class="question-title">
            <i class="el-icon-question"></i>
            Q3: 为什么我提交的C语言程序在自己的电脑上能正常编译，而IMUSTOJ系统却告诉我编译错误？
          </span>
        </p>
        <div class="answer-body">
          <p>
            <span class="answer-title">
              <i class="el-icon-chat-line-round"></i> A3:
            </span>
            GCC的编译标准与VC6有些不同，更加符合C/C++标准：
          </p>
          <ul>
            <li>
              <span class="highlight-word">main</span> 函数的返回类型必须为
              <span class="highlight-word">int</span>，
              <span class="highlight-word">void main</span>的函数声明会报编译错误。
            </li>
            <li>
              如下所示循环内定义的变量
              <span class="highlight-word">i</span>在循环外会失去定义：
              <span class="highlight-word">for(int i=0...){...}</span>。
            </li>
            <li>
              <span class="highlight-word">itoa</span>函数不是
              <span class="highlight-word">ANSI</span>标准函数。
            </li>
            <li>
              <span class="highlight-word">string</span>头文件下的
              <span class="highlight-word">strrev</span>函数已被禁止使用。
            </li>
            <li>
              <span class="highlight-word">_int64</span>不是
              <span class="highlight-word">ANSI</span>标准定义，只能在使用，但是可以使用
              <span class="highlight-word">long long</span>声明64位整数。
            </li>
            <li>
              如果使用了
              <span class="highlight-word">_int64</span>，试试提交前加一句
              <span class="highlight-word">#define _int64 long long</span>。
            </li>
          </ul>
        </div>
      </div>
      <el-divider></el-divider>
      <div>
        <p>
          <span class="question-title">
            <i class="el-icon-question"></i>
            Q4: 提交后系统返回的信息都是什么意思？
          </span>
        </p>
        <div class="answer-body">
          <p>
            <span class="answer-title">
              <i class="el-icon-chat-line-round"></i> A3:
            </span>
            详见下述：
          </p>
          <div v-for="item in run_results" :key="item.name" class="compile-list">
            <el-row :gutter="20">
              <el-col :span="5" :offset="1">
                <div>
                  <span>{{item.name}}</span>
                </div>
              </el-col>
              <el-col :span="18">
                <div>
                  <span>{{item.desc}}</span>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <el-divider></el-divider>
      <div>
        <p>
          <span class="question-title">
            <i class="el-icon-question"></i>
            Q5: 如何进行题目练习或者参加IMUSTOJ中的在线竞赛？
          </span>
        </p>
        <div class="answer-body">
          <p>
            <span class="answer-title">
              <i class="el-icon-chat-line-round"></i> A3:
            </span>
            <el-link type="primary" href="#">注册</el-link>一个帐号，然后就可以通过题目列表中的习题进行练习，点击竞赛列表可以看到正在进行的比赛并参加。
          </p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import {
  Collapse,
  CollapseItem,
  Card,
  Row,
  Col,
  Divider,
  Link
} from "element-ui";
import Prism from "prismjs";
export default {
  data() {
    return {
      run_results: [
        {
          "name": "等待（Pending）",
          "desc": "判题服务器繁忙，你提交的代码正在排队，不能及时反馈回结果，通常只需要等待一会儿即可。"
        },
        {
          "name": "编译中（Compiling）",
          "desc": "你提交的代码正在被编译。"
        },
        {
          "name": "运行并评判（Running & Judging）",
          "desc": "你提交的代码正在被运行和判断。"
        },
        {
          "name": "正确（Accepted）",
          "desc": "你提交的代码满足题目要求，程序通过！"
        },
        {
          "name": "格式错误（Presentation Error）",
          "desc": "虽然你的答案是正确的，但是你输出的格式与题目要求不符。请仔细查看题目要求并比照样例输出的格式，检查是否因为空格、空行或是其他格式要求不符的原因导致。"
        },
        {
          "name": "答案错误（Wrong Answer）",
          "desc": "答案不对，仅仅通过样例数据的测试并不一定能得到正确答案，仔细查看题目中对于数据范围等的要求。一定是你理解错了题意或者还有你没想到的地方。"
        },
        {
          "name": "时间超限（Time Limit Exceeded）",
          "desc": "运行超出了时间限制，检查下在某些情况下是否会产生死循环，或者对于题目应该有更快的解决方法。"
        },
        {
          "name": "内存超限（Memory Limit Exceeded）",
          "desc": "运行超出了内存限制，数据可能需要压缩，或者检查内存是否有泄露。"
        },
        {
          "name": "输出超限（Output Limit Exceeded）",
          "desc": "输出超过限制，你的输出可能比正确答案长了两倍。"
        },
        {
          "name": "运行错误（Runtime Error）",
          "desc": "运行时错误，可能是非法的内存访问、数组越界、指针漂移、调用禁用的系统函数等。"
        },
        {
          "name": "编译错误（Compile Error）",
          "desc": "你的程序语法都不符合要求，根本不能运行。请检查你的程序代码，并查看是否是提交时选错了语言。点击查看源码按钮可以获得详细信息。"
        },
        {
          "name": "等待重判（Pending Rejudge）",
          "desc": "因为测试数据更新或其他原因，系统将重新评判你提交的代码。"
        }
      ],
      compile_language: [
        {
          name: "C",
          args:
            "GCC Main.c -o Main -fno-asm -O2 -Wall -lm --static -std=c99 -DONLINE_JUDGE"
        },
        {
          name: "C++",
          args:
            "G++ Main.cc -o Main -fno-asm -O2 -Wall -lm --static -DONLINE_JUDGE"
        }
      ],
      c_code: `
#include <stdio.h>
int main()
{
    int a,b;
    while(scanf("%d %d",&a,&b) != EOF)
        printf("%d\n",a+b);
    return 0;
}`,
      cpp_code: `
#include <iostream>
using namespace std;
int main()
{
    int a,b;
    while(cin >> a >> b)
        cout << a+b << endl;
    return 0;
}`,
      java_code: `
import java.util.*;
//类名必须为Main
public class Main{
	public static void main(String args[]){
		Scanner cin = new Scanner(System.in);
		int a, b;
		while (cin.hasNext()){
			a = cin.nextInt(); b = cin.nextInt();
			System.out.println(a + b);
		}
	}
}`,
      py2_code: `# 暂无代码`,
      py3_code: `
while True:
    a, b = map(int, input().split())
    print(a+b)`
    };
  },
  methods: {},
  components: {
    "el-collapse": Collapse,
    "el-collapse-item": CollapseItem,
    "el-card": Card,
    "el-row": Row,
    "el-col": Col,
    "el-divider": Divider,
    "el-link": Link
  },
  mounted: function() {
    Prism.highlightAll();
  }
};
</script>
<style scoped>
.faq-box{
  font-size: 14px;
}
p {
  line-height: 1.5em;
}
.faq-box {
  padding: 30px;
}
.question-title {
  color: #f56c6c;
}
.answer-title {
  color: #67c23a;
}
.compile-list {
  margin-bottom: 15px;
}
.compile-list-language-name {
  color: #303133;
}
.compile-list-language-args {
  color: #409eff;
}
.other-warning {
  color: #e6a23c;
}
.other-info {
  color: #909399;
}
.highlight-word {
  color: #409eff;
  margin-left: 0.3em;
  margin-right: 0.3em;
}
</style>
