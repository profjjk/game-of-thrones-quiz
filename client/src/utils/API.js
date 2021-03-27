import axios from 'axios';

export default {
  getQuestions: () => {
    return axios.get('/api/questions');
  },
  getPlayers: () => {
    return axios.get('/api/players');
  },
  savePlayer: data => {
    return axios.post('/api/players', data);
  }
}