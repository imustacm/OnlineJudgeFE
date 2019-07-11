import Vue from 'vue'
import Router from 'vue-router'
import TopicList from '@/components/imustOj/topicList'
import Solution from '@/components/imustOj/solutionList'
import RankList from '@/components/imustOj/rankList'
import ContestList from '@/components/imustOj/contestList'
import ExperimentList from '@/components/imustOj/experimentList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: (resolve) => require(['@/components/HelloWorld'], resolve)
    },
    {
      path: '/problem',
      name: 'Problem',
      component: (resolve) => require(['@/components/Problem'], resolve)
    },
    {
      path: '/topic',
      name: 'topic',
      component: (resolve) => require(['@/components/imustOj/topicList'], resolve)
    },
    {

      path: '/solution',
      name: 'solution',
      component: (resolve) => require(['@/components/imustOj/solutionList'], resolve)
    },
    {
      path: '/rankList',
      name: 'rankList',
      component: (resolve) => require(['@/components/imustOj/rankList'], resolve)
    },
    {
      path: '/contestList',
      name: 'contestList',
      component: (resolve) => require(['@/components/imustOj/contestList'], resolve)
    },
    {
      path: '/experimentList',
      name: 'experimentList',
      component: (resolve) => require(['@/components/imustOj/experimentList'], resolve)
    },
    {
      path: '/AssociationIntroduction',
      name: 'AssociationIntroduction',
      component: (resolve) => require(['@/components/AssociationIntroduction'], resolve)
    },
    {
      path: '/TeamHead',
      name: 'TeamHead',
      component: (resolve) => require(['@/components/TeamHead'], resolve)
    },
    {
      path: '/Faq',
      name: 'Faq',
      component: (resolve) => require(['@/components/Faq'], resolve)
    },
    {
      path: '/Editer',
      name: 'Editer',
      component: (resolve) => require(['@/components/Editer'], resolve)
    }
  ]
})
