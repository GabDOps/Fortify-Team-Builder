import Vue from 'vue';
import Vuex from 'vuex';
import { addTeam as dbAddTeam, getTeam, getAllTeams, deleteTeam as dbDeleteTeam } from '@/services/db';
import { v4 as uuidv4 } from 'uuid';

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
  async loadTeams({ commit }) {
    const teams = await getAllTeams();
    commit('SET_TEAMS', teams);
  },
  async addTeam({ commit }, team) {
    const now = new Date().toISOString();
    const newTeam = {
      ...team,
      id: uuidv4(),
      createdAt: now,
      updatedAt: now,
      members: team.members || [],
    };
    await dbAddTeam(newTeam);
    commit('ADD_TEAM', newTeam);
  },
  async editTeam({ commit }, team) {
    const updatedTeam = {
      ...team,
      updatedAt: new Date().toISOString(),
    };
    await dbAddTeam(updatedTeam); // put will update if exists
    commit('EDIT_TEAM', updatedTeam);
  },
  async deleteTeam({ commit }, teamId) {
    await dbDeleteTeam(teamId);
    commit('DELETE_TEAM', teamId);
  },
  selectTeam({ commit }, team) {
    commit('SELECT_TEAM', team);
  },
  clearSelectedTeam({ commit }) {
    commit('CLEAR_SELECTED_TEAM');
  },
};

const mutations = {
  SET_TEAMS(state, teams) {
    state.teams = teams;
  },
  ADD_TEAM(state, team) {
    state.teams.push(team);
  },
  EDIT_TEAM(state, updatedTeam) {
    const index = state.teams.findIndex(team => team.id === updatedTeam.id);
    if (index !== -1) {
      Vue.set(state.teams, index, updatedTeam);
    }
  },
  DELETE_TEAM(state, teamId) {
    state.teams = state.teams.filter(team => team.id !== teamId);
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