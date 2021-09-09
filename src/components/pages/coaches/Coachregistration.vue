<template>
  <div>
    <base-card>
      <h2>
        Register as a coach now!
      </h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </div>
</template>

<script>
import CoachForm from '../../coaches/CoachForm.vue';
export default {
  components: {
    CoachForm
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      // this.$router.push('/coaches');

      // the difference between router.push and router.replace, the replace will disallow the
      // user to go back the previous page by going clicking backward
      this.$router.replace('/coaches');
    }
  }
};
</script>
