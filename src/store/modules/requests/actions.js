export default {
  async contactCoach(context, payload) {
    const newRequest = {
      // we delete it that because firebase going to handle error gentrating
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message
    };
    const response = await fetch(
      `https://coach-project-vue-vuex-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest)
      }
    );
    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to send Request!'
      );
      throw error;
    }
    // we will derive the id from responseData
    const responseData = await response.json();
    newRequest.id = responseData.name;
    context.commit('addRequest', newRequest);
  },
  // loading requests of the currently active user "coach"
  async fetchRequests(context) {
    const coachId = context.rootGetters.getUserId;

    const response = await fetch(
      `https://coach-project-vue-vuex-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`
    );
    if (!response.ok) {
      let error = new Error(response.message || 'failed to fetch requests');
      throw error;
    }

    const responseData = await response.json();
    const requests = [];
    for (let key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message
      };
      requests.push(request);
    }
    context.commit('setRequests', requests);
  }
};

//  how to throw a costmize error
