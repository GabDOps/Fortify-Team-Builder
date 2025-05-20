<template>
  <div class="teams-view">
    <AppHeader />
    <AppSidebar />
    <main>
      <h1>Teams Management</h1>
      <TeamFormModal v-if="showModal" @close="showModal = false" />
      <TeamList :teams="teams" @edit="editTeam" @delete="deleteTeam" />
      <button @click="addTeam">Add Team</button>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
import AppSidebar from '@/components/common/AppSidebar.vue';
import TeamFormModal from '@/components/team/TeamFormModal.vue';
import TeamList from '@/components/team/TeamList.vue';
import { mapState } from 'vuex';

export default {
  components: {
    AppHeader,
    AppFooter,
    AppSidebar,
    TeamFormModal,
    TeamList,
  },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    teams() {
      return this.$store.getters['teams/allTeams'];
    },
  },
  created() {
    this.$store.dispatch('teams/loadTeams');
  },
  methods: {
    editTeam(team) {
      this.$store.commit('teams/SELECT_TEAM', team);
      this.showModal = true;
    },
    deleteTeam(teamId) {
      this.$store.dispatch('teams/deleteTeam', teamId);
    },
    addTeam() {
      this.$store.commit('teams/CLEAR_SELECTED_TEAM');
      this.showModal = true;
    }
  },
};
</script>

<style scoped>
.teams-view {
  padding: 20px;
}
</style>