<template>
  <div id="app">
    <Container direction="vertical">
      <Header>
        <NavBar></NavBar>
      </Header>
      <Main>
        <router-view />
      </Main>
      <Footer>
        <Copyright></Copyright>
      </Footer>
    </Container>
  </div>
</template>

<script>
import { Container, Header, Main, Footer, Table } from "element-ui";
import NavBar from "@/components/NavBar";
import Copyright from "@/components/Copyright";
export default {
  name: "App",
  components: {
    Container,
    Header,
    Main,
    Footer,
    NavBar,
    Copyright
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.el-header {
  margin: 0;
  padding: 0;
}
.el-main {
  margin: 0;
  padding: 0;
}
.el-footer {
  margin: 0;
  padding: 0;
}
</style>
