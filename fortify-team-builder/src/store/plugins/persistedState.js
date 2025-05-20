import createPersistedState from 'vuex-persistedstate';

export default (store) => {
  createPersistedState({
    storage: {
      getItem: (key) => localStorage.getItem(key),
      setItem: (key, value) => localStorage.setItem(key, value),
      removeItem: (key) => localStorage.removeItem(key),
    },
  })(store);
};