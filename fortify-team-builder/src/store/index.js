import Vue from 'vue';
import Vuex from 'vuex';
import teams from './modules/teams';
import skills from './modules/skills';
import collaboration from './modules/collaboration';
import reports from './modules/reports';
import persistedState from './plugins/persistedState';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    teams,
    skills,
    collaboration,
    reports,
  },
  plugins: [persistedState],
});