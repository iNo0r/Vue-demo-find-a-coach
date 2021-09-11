export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },
  setCoaches(state, payload) {
    state.coaches = payload;
  },
  setFetchTimeStamp(state) {
    // store the time stamp of the fetch
    state.lastFetch = new Date().getTime();
  }
};
