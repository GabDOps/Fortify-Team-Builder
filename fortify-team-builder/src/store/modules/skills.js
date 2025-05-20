import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const skillsModule = {
  state: {
    skills: [],
    skillGaps: {},
  },
  mutations: {
    ADD_SKILL(state, skill) {
      state.skills.push(skill);
    },
    REMOVE_SKILL(state, skillId) {
      state.skills = state.skills.filter(skill => skill.id !== skillId);
    },
    SET_SKILL_GAPS(state, gaps) {
      state.skillGaps = gaps;
    },
  },
  actions: {
    addSkill({ commit }, skill) {
      commit('ADD_SKILL', skill);
    },
    removeSkill({ commit }, skillId) {
      commit('REMOVE_SKILL', skillId);
    },
    analyzeSkillGaps({ commit, state }) {
      // Logic to analyze skill gaps based on current skills
      const gaps = {}; // Placeholder for gap analysis logic
      commit('SET_SKILL_GAPS', gaps);
    },
  },
  getters: {
    allSkills: state => state.skills,
    skillGaps: state => state.skillGaps,
  },
};

export default skillsModule;