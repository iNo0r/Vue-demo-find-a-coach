<template>
  <li>
    <div>
      <a :href="emailLink"> {{ email }} </a>
    </div>
    <p>{{ message }}</p>
  </li>
</template>

<script>
export default {
  props: ['email', 'message'],
  computed: {
    emailLink() {
      // this is special instruction, to direct you to an email client
      return 'mailto:' + this.email;
    }
  }
};
</script>

<style scoped>
/*  
    1- what is the special syntax to direct the user to an email client


 */
</style>
