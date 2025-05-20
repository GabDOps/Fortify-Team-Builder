import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import TeamsView from '../views/TeamsView.vue'
import SkillsAnalysisView from '../views/SkillsAnalysisView.vue'
import CollaborationView from '../views/CollaborationView.vue'
import ReportsView from '../views/ReportsView.vue'
import TribeView from '../components/tribe/TribeView.vue'
import SquadView from '../components/squad/SquadView.vue'
import ChapterView from '../components/chapter/ChapterView.vue'
import CoeView from '../components/coe/CoeView.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/teams',
    name: 'teams',
    component: TeamsView
  },
  {
    path: '/skills-analysis',
    name: 'skills-analysis',
    component: SkillsAnalysisView
  },
  {
    path: '/collaboration',
    name: 'collaboration',
    component: CollaborationView
  },
  {
    path: '/reports',
    name: 'reports',
    component: ReportsView
  },
  {
    path: '/tribe',
    name: 'tribe',
    component: TribeView
  },
  {
    path: '/squad',
    name: 'squad',
    component: SquadView
  },
  {
    path: '/chapter',
    name: 'chapter',
    component: ChapterView
  },
  {
    path: '/coe',
    name: 'coe',
    component: CoeView
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router