<template>
  <section>
    <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadCoaches">Refresh</base-button>
        <!-- so important to me, passing a prop alone will
         make it true as a prop in child component -->
        <!-- we added !this.isLoading because the button was shown till data get fetched -->
        <base-button v-if="!isCoach && !this.isLoading" link to="/register">
          Register as Coach</base-button
        >
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        >
        </coach-item>
      </ul>
      <h3 v-else>No Coaches found.</h3></base-card
    >
  </section>
</template>

<script>
import CoachItem from '../../coaches/CoachItem.vue';
import CoachFilter from '../../coaches/CoachFilter.vue';
export default {
  components: {
    CoachItem,
    CoachFilter
  },
  data() {
    return {
      isLoading: false,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    };
  },
  created() {
    this.laodCoaches();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
      console.log(updatedFilters);
    },
    async laodCoaches() {
      this.isLoading = true;
      await this.$store.dispatch('coaches/loadCoaches');
      this.isLoading = false;
    }
  },
  computed: {
    filteredCoaches() {
      let coaches = this.$store.getters['coaches/coaches'];

      // in filter methos when ever is true returned,
      // item will be added to the filterd array
      let filnalFilteredCoaches = coaches.filter(coach => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
      return filnalFilteredCoaches;
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters['coaches/coaches'];
    },
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
