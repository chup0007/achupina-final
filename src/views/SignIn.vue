<template>
  <div>
    <h1>Sign In</h1>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="email">Email</label>
        <input type="email" v-model="email" id="email" requried />
      </div>
      <div>
        <label for="pass">Password</label>
        <input type="password" v-model="pass" id="pass" requried />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      pass: ""
    };
  },
  methods: {
    ...mapActions(["signIn"]),
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.pass
      };

      this.signIn(formData);
    }
  }
};
</script>
