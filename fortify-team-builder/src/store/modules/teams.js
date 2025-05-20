import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  teams: [],
  selectedTeam: null,
};

const getters = {
  allTeams: (state) => state.teams,
  selectedTeam: (state) => state.selectedTeam,
};

const actions = {
  addTeam({ commit }, team) {
    commit('ADD_TEAM', team);
  },
  editTeam({ commit }, team) {
    commit('EDIT_TEAM', team);
  },
  selectTeam({ commit }, team) {
    commit('SELECT_TEAM', team);
  },
  clearSelectedTeam({ commit }) {
    commit('CLEAR_SELECTED_TEAM');
  },
};

const mutations = {
  ADD_TEAM(state, team) {
    state.teams.push(team);
  },
  EDIT_TEAM(state, updatedTeam) {
    const index = state.teams.findIndex(team => team.id === updatedTeam.id);
    if (index !== -1) {
      Vue.set(state.teams, index, updatedTeam);
    }
  },
  SELECT_TEAM(state, team) {
    state.selectedTeam = team;
  },
  CLEAR_SELECTED_TEAM(state) {
    state.selectedTeam = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};