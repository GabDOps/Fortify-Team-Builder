<template>
  <div id="app">
    <AppHeader />
    <AppSidebar />
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/common/AppHeader.vue';
import AppFooter from './components/common/AppFooter.vue';
import AppSidebar from './components/common/AppSidebar.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AppSidebar
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
}
</style>