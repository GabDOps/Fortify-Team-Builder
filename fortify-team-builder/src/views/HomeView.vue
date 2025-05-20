<template>
  <div class="home-view">
    <h1>Welcome to Fortify Team Builder</h1>
    <p>Your go-to tool for team organization and visualization.</p>
    <div class="features">
      <h2>Key Features</h2>
      <ul>
        <li>Visualize team structures: tribes, squads, chapters, and CoEs.</li>
        <li>Evaluate cross-team synergies and collaboration.</li>
        <li>Identify skill gaps and optimize workflows.</li>
      </ul>
    </div>
    <router-link to="/teams" class="btn">Manage Teams</router-link>
    <router-link to="/skills-analysis" class="btn">Analyze Skills</router-link>
    <router-link to="/collaboration" class="btn">Collaboration Insights</router-link>
    <router-link to="/reports" class="btn">Generate Reports</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.home-view {
  text-align: center;
  padding: 20px;
}

.features {
  margin: 20px 0;
}

.btn {
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.btn:hover {
  background-color: #367c6b;
}
</style>