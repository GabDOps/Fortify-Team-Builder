<template>
  <div class="team-list">
    <h2>Team List</h2>
    <div v-if="teams.length === 0" class="no-teams">
      <p>No teams available. Please add a team.</p>
    </div>
    <ul v-else>
      <li v-for="team in teams" :key="team.id">
        <TeamCard :team="team" @edit="editTeam(team)" @delete="deleteTeam(team.id)" />
      </li>
    </ul>
    <TeamFormModal v-if="showModal" @close="closeModal" @save="saveTeam" :team="selectedTeam" />
    <button @click="openModal">Add Team</button>
  </div>
</template>

<script>
import TeamCard from './TeamCard.vue';
import TeamFormModal from './TeamFormModal.vue';
import { mapState } from 'vuex';

export default {
  components: {
    TeamCard,
    TeamFormModal,
  },
  data() {
    return {
      showModal: false,
      selectedTeam: null,
    };
  },
  computed: {
    ...mapState({
      teams: state => state.teams.list,
    }),
  },
  methods: {
    openModal() {
      this.selectedTeam = null;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    saveTeam(team) {
      this.$store.dispatch('teams/saveTeam', team);
      this.closeModal();
    },
    editTeam(team) {
      this.selectedTeam = team;
      this.openModal();
    },
    deleteTeam(teamId) {
      this.$store.dispatch('teams/deleteTeam', teamId);
    },
  },
};
</script>

<style scoped>
.team-list {
  padding: 20px;
}

.no-teams {
  text-align: center;
  color: gray;
}

button {
  margin-top: 20px;
}
</style>