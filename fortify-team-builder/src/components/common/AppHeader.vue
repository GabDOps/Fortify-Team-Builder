<template>
  <header class="app-header">
    <div class="logo">
      <img src="@/assets/icons/logo.svg" alt="Fortify Team Builder Logo" />
    </div>
    <nav class="navigation">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/teams">Teams</router-link></li>
        <li><router-link to="/skills-analysis">Skills Analysis</router-link></li>
        <li><router-link to="/collaboration">Collaboration</router-link></li>
        <li><router-link to="/reports">Reports</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--primary-color);
  color: white;
}

.logo img {
  height: 40px;
}

.navigation ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.navigation a {
  color: white;
  text-decoration: none;
}

.navigation a:hover {
  text-decoration: underline;
}
</style>