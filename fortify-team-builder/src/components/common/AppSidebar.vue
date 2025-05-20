<template>
  <aside class="app-sidebar">
    <div class="sidebar-header">
      <h2>Fortify Team Builder</h2>
    </div>
    <nav class="sidebar-nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/teams">Teams</router-link></li>
        <li><router-link to="/skills-analysis">Skills Analysis</router-link></li>
        <li><router-link to="/collaboration">Collaboration</router-link></li>
        <li><router-link to="/reports">Reports</router-link></li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'AppSidebar',
};
</script>

<style scoped>
.app-sidebar {
  width: 250px;
  background-color: #f8f9fa;
  height: 100vh;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar-header {
  margin-bottom: 20px;
}

.sidebar-nav ul {
  list-style-type: none;
  padding: 0;
}

.sidebar-nav li {
  margin: 10px 0;
}

.sidebar-nav a {
  text-decoration: none;
  color: #333;
}

.sidebar-nav a:hover {
  color: #007bff;
}
</style>