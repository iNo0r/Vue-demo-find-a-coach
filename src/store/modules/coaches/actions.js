export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.getUserId;
    const coachData = {
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas
    };

    // fetching and waiting the res
    const response = await fetch(
      // we need to add .json only with firbase
      `https://coach-project-vue-vuex-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
      // PUT will tell firebase to replace the data if it existed or just post it if not
      {
        method: 'PUT',
        body: JSON.stringify(coachData)
      }
    );
    // also waiting the res to get resolved
    // const respondeData = await response.json();

    if (!response.ok) {
      //error..
    }

    context.commit('registerCoach', {
      // the there dots will interpolate what is inside the object
      ...coachData,
      id: userId
    });
  }
};

//1- how to acess a rootgetter from a store module
//2- using async await
// - rather than using .then we can store the response utilizing the async method technique
