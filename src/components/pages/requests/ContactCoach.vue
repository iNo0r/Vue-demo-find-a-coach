<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="email">Email</label>
      <input type="emial" id="email" v-model.trim="email" />
    </div>
    <div class="form-control">
      <label for="message" id="message">
        <textarea
          name="message"
          id="message"
          rows="5"
          v-model.trim="message"
        ></textarea>
      </label>
    </div>
    <p v-if="!formIsValid" class="errors">
      Please enter a valid email and non-empty message.
    </p>
    <div class="action">
      <base-button> Send Message</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      fromIsValid: true
    };
  },
  methods: {
    validateForm() {
      // we sat it inot true incase of it was false as it going through validation agian
      this.fromIsValid = true;
      if (
        this.message === '' ||
        this.email === '' ||
        !this.email.includes('@')
      ) {
        this.fromIsValid = false;
      }
      this.fromIsValid = true;
    },

    submitForm() {
      this.validateForm();
      // the action going to start here if it is valid
      if (this.fromIsValid) {
      }
    }
  }
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
