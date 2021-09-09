<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? reach out now</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <base-card>
    <base-badge v-for="area in areas" :key="area" :title="area" :type="area">
    </base-badge>
    <p>{{ description }}</p>
  </base-card>
</template>

<script>
export default {
  // th prop is inherited from params
  props: ['id'],
  data() {
    return {
      selectedCoach: null
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    contactLink() {
      return this.$route.path + '/contact';
    },

    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      console.log(this.selectedCoach);
      return this.selectedCoach.description;
    }
  },
  created() {
    // it can only brake if a user entered the url manually
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      coach => coach.id === this.id
    );
    // console.log(this.selectedCoach);
  }
};
</script>
