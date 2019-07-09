import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Problem from '@/components/Problem'
import TopicList from '@/components/imustOj/topicList'
import Solution from '@/components/imustOj/solutionList'
import RankList from '@/components/imustOj/rankList'
import ContestList from '@/components/imustOj/contestList'
import ExperimentList from '@/components/imustOj/experimentList'
import AssociationIntroduction from "@/components/AssociationIntroduction"
import TeamHead from '@/components/TeamHead'
import Faq from '@/components/Faq'

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

      path: '/solution',
      name: 'solution',
      component: Solution
    },
    {
      path: '/rankList',
      name: 'rankList',
      component: RankList
    },
    {
      path: '/contestList',
      name: 'contestList',
      component: ContestList
    },
    {
      path: '/experimentList',
      name: 'experimentList',
      component: ExperimentList
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
    },
    {
      path: '/Faq',
      name: 'Faq',
      component: Faq
    }
  ]
})
