<template>
  <div class="chapter-view">
    <h1>Chapter Overview</h1>
    <div class="chapter-details">
      <h2>{{ chapter.name }}</h2>
      <p>{{ chapter.description }}</p>
    </div>
    <div class="team-list">
      <h3>Teams in this Chapter</h3>
      <ul>
        <li v-for="team in chapter.teams" :key="team.id">
          {{ team.name }} - {{ team.members.length }} members
        </li>
      </ul>
    </div>
    <div class="skill-gap-analysis">
      <h3>Skill Gap Analysis</h3>
      <p v-if="skillGaps.length === 0">No skill gaps identified.</p>
      <ul v-else>
        <li v-for="gap in skillGaps" :key="gap.id">
          {{ gap.skill }} - {{ gap.gap }} members lacking
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChapterView',
  data() {
    return {
      chapter: {
        name: 'Example Chapter',
        description: 'This chapter focuses on enhancing collaboration and skill development.',
        teams: [
          { id: 1, name: 'Team Alpha', members: [] },
          { id: 2, name: 'Team Beta', members: [] },
        ],
      },
      skillGaps: [
        { id: 1, skill: 'JavaScript', gap: 3 },
        { id: 2, skill: 'Vue.js', gap: 2 },
      ],
    };
  },
};
</script>

<style scoped>
.chapter-view {
  padding: 20px;
}

.chapter-details {
  margin-bottom: 20px;
}

.team-list {
  margin-bottom: 20px;
}

.skill-gap-analysis {
  margin-top: 20px;
}
</style>