<template>
  <div class="teams-view">
    <AppHeader />
    <AppSidebar />
    <main>
      <h1>Teams Management</h1>
      <TeamFormModal v-if="showModal" @close="showModal = false" />
      <TeamList :teams="teams" @edit="editTeam" @delete="deleteTeam" />
      <button @click="showModal = true">Add Team</button>
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
    ...mapState({
      teams: state => state.teams.list,
    }),
  },
  methods: {
    editTeam(team) {
      // Logic to edit the selected team
      this.showModal = true;
    },
    deleteTeam(teamId) {
      // Logic to delete the selected team
    },
  },
};
</script>

<style scoped>
.teams-view {
  padding: 20px;
}
</style>