<template>
  <div class="team-card">
    <div class="team-card-header">
      <h3>{{ team.name }}</h3>
      <button @click="editTeam" class="edit-button">Edit</button>
    </div>
    <div class="team-card-body">
      <p><strong>Members:</strong> {{ team.members.length }}</p>
      <p><strong>Skills:</strong> {{ team.skills.join(', ') }}</p>
      <p><strong>Collaboration Score:</strong> {{ team.collaborationScore }}</p>
    </div>
    <div class="team-card-footer">
      <button @click="viewDetails" class="details-button">View Details</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    team: {
      type: Object,
      required: true
    }
  },
  methods: {
    editTeam() {
      this.$emit('edit-team', this.team);
    },
    viewDetails() {
      this.$emit('view-details', this.team);
    }
  }
}
</script>

<style scoped>
.team-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  background-color: #f9f9f9;
  transition: box-shadow 0.3s;
}

.team-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.team-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.edit-button, .details-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
}

.edit-button:hover, .details-button:hover {
  background-color: #0056b3;
}
</style>