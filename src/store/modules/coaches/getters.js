export default {
  coaches(state) {
    return state.coaches;
  },
  /* this will be used to check if there are coches before rendering 
  a ul tage, if not the ul tag will not be redered at all, 
  but will show another html tag saying that there are no coaches */
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  // isCoach will check if the current userId is a coach
  // hence will disable the registerCoach button
  isCoach(state, getters, rootState, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.getUserId;
    // Array.some() is will return true if one item met the condition
    return coaches.some(item => item.id === userId);
  }
};

// how to reach root getters from namespaced getters ?
