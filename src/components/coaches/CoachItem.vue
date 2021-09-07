<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <base-badge
        :title="area"
        v-for="area in areas"
        :type="area"
        :key="area"
      ></base-badge>
    </div>
    <div class="actions">
      <base-button link mode="outline" :to="coachContactLink"
        >Contact</base-button
      >
      <base-button link :to="coachDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
import BaseBadge from '../layout/ui/BaseBadge.vue';
export default {
  components: { BaseBadge },
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    coachContactLink() {
      // making it dynamic in case of we have the changed the path
      return this.$route.path + '/' + this.id + '/contact'; // /coaches/c1/contact
    },
    coachDetailsLink() {
      return this.$route.path + '/' + this.id;
    }
  }
};
</script>
<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
