import { createStore } from 'vuex';

import coachesModule from './modules/coaches';

const store = createStore({
  modules: {
    coaches: coachesModule
  },
  state() {
    return {
      userId: 'c2'
    };
  },
  getters: {
    getUserId(state) {
      return state.userId;
    }
  }
});

export default store;
