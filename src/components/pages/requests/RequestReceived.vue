<template>
  <div>
    <!-- step 7  -->
    <!-- !! for passing the value of data as boolean -->
    <base-dialog :show="!!error" title="an Error occured!" @close="handleError">
      {{ error }}
    </base-dialog>

    <section>
      <base-card>
        <header>
          <h2>Requests Received</h2>
        </header>
        <!-- step 8 -->
        <base-spinner v-if="isLoading"></base-spinner>
        <!-- step 9 => added "&& !isLoading" -->
        <ul v-else-if="hasRequests && !isLoading">
          <request-item
            v-for="req in receivedRequests"
            :key="req.id"
            :email="req.userEmail"
            :message="req.message"
          ></request-item>
        </ul>
        <h3 v-else>you haven't received in requests yet !</h3>
      </base-card>
    </section>
  </div>
</template>
<script>
import RequestItem from '../../requests/RequestItem.vue';
export default {
  components: {
    RequestItem
  },
  data() {
    return {
      //step 1
      isLoading: false,
      // step 2
      error: false
    };
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    }
  },
  methods: {
    // step 3
    async loadRequests() {
      // step 4
      this.isLoading = true;
      // step 5
      try {
        await this.$store.dispatch('requests/fetchRequests');
      } catch (error) {
        this.error = error.message || 'Something failed';
      }
      this.isLoading = false;
    },
    // step 6
    handleError() {
      this.error = null;
    }
  },
  created() {
    // step 10
    this.loadRequests();
  }
};
</script>
<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}

/*  
  1-how to handl error in a page by steps ? 


*/
</style>
