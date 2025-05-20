<template>
  <v-dialog v-model="isVisible" max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ isEditMode ? 'Edit Team' : 'Add Team' }}</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
            v-model="team.name"
            :rules="[rules.required]"
            label="Team Name"
            required
          ></v-text-field>
          <v-textarea
            v-model="team.description"
            label="Team Description"
            rows="3"
          ></v-textarea>
          <v-select
            v-model="team.type"
            :items="teamTypes"
            label="Team Type"
            :rules="[rules.required]"
            required
          ></v-select>
          <v-text-field
            v-model="team.skills"
            label="Skills (comma separated)"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
        <v-btn color="blue darken-1" text @click="submit" :disabled="!valid">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    teamData: {
      type: Object,
      default: () => ({})
    },
    isEditMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      valid: false,
      team: {
        name: '',
        description: '',
        type: '',
        skills: '',
        members: []
      },
      teamTypes: ['Tribe', 'Squad', 'Chapter', 'CoE'],
      rules: {
        required: value => !!value || 'Required.'
      }
    };
  },
  watch: {
    teamData: {
      immediate: true,
      handler(newVal) {
        if (newVal && this.isEditMode) {
          this.team = { ...newVal };
        } else {
          this.team = { name: '', description: '', type: '', skills: '', members: [] };
        }
      }
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    submit() {
      this.$emit('save', {
        ...this.team,
        skills: typeof this.team.skills === 'string' ? this.team.skills.split(',').map(s => s.trim()) : this.team.skills
      });
      this.close();
    }
  }
};
</script>

<style scoped>
.headline {
  font-weight: bold;
}
</style>