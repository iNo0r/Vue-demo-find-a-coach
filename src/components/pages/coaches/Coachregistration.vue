<template>
  <div>
    <base-card>
      <h2>
        Register as a coach now!
      </h2>
      <coach-form></coach-form>
    </base-card>
  </div>
</template>

<script>
import CoachForm from '../../coaches/CoachForm.vue';
export default {
  components: {
    CoachForm
  }
};
</script>
