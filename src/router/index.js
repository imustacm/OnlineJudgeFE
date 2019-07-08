import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Problem from '@/components/Problem'
import customTable from '@/components/common/customForm'
import TopicList from '@/components/imustOj/topicList'
import AssociationIntroduction from "@/components/AssociationIntroduction"
import TeamHead from '@/components/TeamHead'

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
    },
    {
      path: '/AssociationIntroduction',
      name: 'AssociationIntroduction',
      component: AssociationIntroduction
    },
    {
      path: '/TeamHead',
      name: 'TeamHead',
      component: TeamHead
    }
  ]
})
