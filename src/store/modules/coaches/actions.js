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
  },
  // in here we are fetching all the coaches
  async loadCoaches(context) {
    const userId = context.rootGetters.getUserId;
    const response = await fetch(
      `https://coach-project-vue-vuex-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      //error...
    }
    // hence here we are getting the response back as an object, will reform it into an array
    const coaches = [];
    for (let key in responseData) {
      let coach = {
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas
      };
      coaches.push(coach);
    }
    context.commit('setCoaches', coaches);
  }
};

//1- how to acess a rootgetter from a store module
//2- using async await
// - rather than using .then we can store the response utilizing the async method technique
//3-  how can we go throgh each  object's key?
// using for ( let key in someObject)
