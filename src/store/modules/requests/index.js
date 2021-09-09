import getters from './getters';
import actions from './actions';
import mutations from './mutations';
export default {
  // napspaceinng will prevent mergin the module into the global state or store
  namespaced: true,
  state() {
    return {
      //every request will have a certain coach id, that the coach will be able to see
      // the requestes made for him only
      requests: []
    };
  },
  getters,
  mutations,
  actions
};

// 1- why do we use namespacing in modules
