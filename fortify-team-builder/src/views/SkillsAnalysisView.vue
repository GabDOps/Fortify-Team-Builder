<template>
  <div class="skills-analysis">
    <h1>Skills Analysis</h1>
    <div class="analysis-container">
      <div class="team-selection">
        <label for="teamSelect">Select Team:</label>
        <select id="teamSelect" v-model="selectedTeam" @change="fetchSkills">
          <option v-for="team in teams" :key="team.id" :value="team.id">{{ team.name }}</option>
        </select>
      </div>
      <div class="skills-metrics">
        <h2>Skills Metrics</h2>
        <table>
          <thead>
            <tr>
              <th>Skill</th>
              <th>Proficiency</th>
              <th>Team Members</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="skill in skills" :key="skill.name">
              <td>{{ skill.name }}</td>
              <td>{{ skill.proficiency }}</td>
              <td>{{ skill.members.join(', ') }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="gap-analysis">
        <h2>Skill Gap Analysis</h2>
        <p v-if="gaps.length === 0">No skill gaps identified.</p>
        <ul>
          <li v-for="gap in gaps" :key="gap.skill">{{ gap.skill }} - Required: {{ gap.required }} | Available: {{ gap.available }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      selectedTeam: null,
      skills: [],
      gaps: []
    };
  },
  computed: {
    ...mapState('teams', ['teams'])
  },
  methods: {
    fetchSkills() {
      // Fetch skills for the selected team from the store or API
      this.skills = this.$store.getters['skills/getSkillsByTeam'](this.selectedTeam);
      this.analyzeGaps();
    },
    analyzeGaps() {
      // Analyze skill gaps based on predefined criteria
      this.gaps = this.skills.filter(skill => skill.required > skill.available);
    }
  },
  mounted() {
    if (this.teams.length > 0) {
      this.selectedTeam = this.teams[0].id;
      this.fetchSkills();
    }
  }
};
</script>

<style scoped>
.skills-analysis {
  padding: 20px;
}

.analysis-container {
  margin-top: 20px;
}

.team-selection {
  margin-bottom: 20px;
}

.skills-metrics, .gap-analysis {
  margin-top: 20px;
}
</style>