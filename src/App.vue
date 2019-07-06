<template>
  <div id="app">
    <Container   direction="vertical">
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
import {Container, Header, Main, Footer,Table} from 'element-ui'
import NavBar from '@/components/NavBar'
import Copyright from '@/components/Copyright'
export default {
  name: 'App',
  components: {
    Container,
    Header,
    Main,
    Footer,
    NavBar,
    Copyright
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
}
.el-header{
  margin: 0;
  padding: 0;
}
.el-main{
  margin: 0;
  padding: 0;
}
.el-footer{
  margin: 0;
  padding: 0;
}
</style>
