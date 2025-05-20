<template>
  <div class="dashboard-view">
    <AppHeader />
    <AppSidebar />
    <main>
      <DashboardOverview />
      <section class="team-visualization">
        <h2>Team Structures</h2>
        <TeamList />
      </section>
      <section class="collaboration-insights">
        <h2>Collaboration Insights</h2>
        <CollaborationView />
      </section>
      <section class="skills-analysis">
        <h2>Skills Analysis</h2>
        <SkillsAnalysisView />
      </section>
      <section class="reports">
        <h2>Reports</h2>
        <ReportsView />
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
import AppSidebar from '@/components/common/AppSidebar.vue';
import DashboardOverview from '@/components/dashboard/DashboardOverview.vue';
import TeamList from '@/components/team/TeamList.vue';
import CollaborationView from '@/views/CollaborationView.vue';
import SkillsAnalysisView from '@/views/SkillsAnalysisView.vue';
import ReportsView from '@/views/ReportsView.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    AppSidebar,
    DashboardOverview,
    TeamList,
    CollaborationView,
    SkillsAnalysisView,
    ReportsView,
  },
};
</script>

<style scoped>
.dashboard-view {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

main {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

h2 {
  margin-top: 20px;
}
</style>