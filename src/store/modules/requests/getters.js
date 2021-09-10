export default {
  requests(state, _, _2, rootGetters) {
    // to return th request of the active coach only
    let coachId = rootGetters.getUserId;
    return state.requests.filter(req => req.coachId === coachId);
  },
  hasRequests(_, getters) {
    //   also check for the active coach only if has requests
    return getters.requests && getters.requests.length > 0;
  }
};
