<template>
  <div class="hello" style="height:700px;">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>开发进度</h2>
    <ul>
      <li>
        <h3>前端</h3>
        <Progress type="circle" :percentage="5"  ></Progress>
      </li>
      <li>
        <h3>后端</h3>
        <Progress type="circle" :percentage="0"  ></Progress>
      </li>
      <li>
        <h3>判题机</h3>
        <Progress type="circle" :percentage="100" status="success" ></Progress>
      </li>
    </ul>
  </div>
</template>

<script>
import {Progress} from 'element-ui'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to IMUSTACM Decade Beta'
    }
  },
  components: {
    Progress
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img{
  margin-top: 30px;
}
</style>
