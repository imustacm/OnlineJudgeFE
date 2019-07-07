import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Problem from '@/components/Problem'
import TopicList from '@/components/imustOj/topicList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/problem',
      name: 'Problem',
      component: Problem
    },
    {
      path: '/topic',
      name: 'topic',
      component: TopicList
    }
  ]
})
