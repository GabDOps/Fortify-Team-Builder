import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to get team structures
export const getTeamStructures = async () => {
  try {
    const response = await apiClient.get('/teams');
    return response.data;
  } catch (error) {
    console.error('Error fetching team structures:', error);
    throw error;
  }
};

// Function to add a new team
export const addTeam = async (teamData) => {
  try {
    const response = await apiClient.post('/teams', teamData);
    return response.data;
  } catch (error) {
    console.error('Error adding team:', error);
    throw error;
  }
};

// Function to update a team
export const updateTeam = async (teamId, teamData) => {
  try {
    const response = await apiClient.put(`/teams/${teamId}`, teamData);
    return response.data;
  } catch (error) {
    console.error('Error updating team:', error);
    throw error;
  }
};

// Function to delete a team
export const deleteTeam = async (teamId) => {
  try {
    const response = await apiClient.delete(`/teams/${teamId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting team:', error);
    throw error;
  }
};

// Function to analyze skills
export const analyzeSkills = async (criteria) => {
  try {
    const response = await apiClient.post('/skills/analyze', criteria);
    return response.data;
  } catch (error) {
    console.error('Error analyzing skills:', error);
    throw error;
  }
};

// Function to get collaboration insights
export const getCollaborationInsights = async () => {
  try {
    const response = await apiClient.get('/collaboration');
    return response.data;
  } catch (error) {
    console.error('Error fetching collaboration insights:', error);
    throw error;
  }
};