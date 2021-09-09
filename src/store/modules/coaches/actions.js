export default {
  registerCoach(context, payload) {
    const coachData = {
      id: context.rootGetters.getUserId,
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas
    };
    context.commit('registerCoach', coachData);
    console.log(context.rootGetters);
  }
};

//how to acess a root getter from a store module
