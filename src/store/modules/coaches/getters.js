export default {
  coaches(state) {
    return state.coaches;
  },
  /* this will be used to check if there are coches before rendering 
  a ul tage, if not the ul tag will not be redered at all, 
  but will show another html tag saying that there are no coaches */
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  }
};
