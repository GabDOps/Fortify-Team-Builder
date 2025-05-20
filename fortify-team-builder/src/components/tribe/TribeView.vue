<template>
  <div class="tribe-view">
    <h1>Tribe Structure</h1>
    <div class="tribe-details">
      <h2>{{ tribe.name }}</h2>
      <p>{{ tribe.description }}</p>
    </div>
    <div class="squad-list">
      <h3>Squads</h3>
      <ul>
        <li v-for="squad in tribe.squads" :key="squad.id">
          <router-link :to="{ name: 'SquadView', params: { id: squad.id } }">{{ squad.name }}</router-link>
        </li>
      </ul>
    </div>
    <div class="chapter-list">
      <h3>Chapters</h3>
      <ul>
        <li v-for="chapter in tribe.chapters" :key="chapter.id">
          <router-link :to="{ name: 'ChapterView', params: { id: chapter.id } }">{{ chapter.name }}</router-link>
        </li>
      </ul>
    </div>
    <div class="coe-list">
      <h3>Centers of Excellence</h3>
      <ul>
        <li v-for="coe in tribe.coes" :key="coe.id">
          <router-link :to="{ name: 'CoeView', params: { id: coe.id } }">{{ coe.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TribeView',
  data() {
    return {
      tribe: {
        name: 'Example Tribe',
        description: 'This is an example tribe description.',
        squads: [],
        chapters: [],
        coes: []
      }
    };
  },
  created() {
    this.fetchTribeData();
  },
  methods: {
    fetchTribeData() {
      // Fetch tribe data from the store or API
      // This is a placeholder for actual data fetching logic
      this.tribe.squads = [
        { id: 1, name: 'Squad A' },
        { id: 2, name: 'Squad B' }
      ];
      this.tribe.chapters = [
        { id: 1, name: 'Chapter X' },
        { id: 2, name: 'Chapter Y' }
      ];
      this.tribe.coes = [
        { id: 1, name: 'CoE 1' },
        { id: 2, name: 'CoE 2' }
      ];
    }
  }
};
</script>

<style scoped>
.tribe-view {
  padding: 20px;
}

.tribe-details {
  margin-bottom: 20px;
}

.squad-list, .chapter-list, .coe-list {
  margin-top: 20px;
}
</style>