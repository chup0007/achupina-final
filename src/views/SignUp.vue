<template>
  <div>
    <h1>Sign Up</h1>
    <!-- form -->
    <form @submit.prevent="onSubmit">
      <!-- name -->
      <div>
        <label for="name">Name</label>
        <input type="text" v-model="name" id="name" requried />
      </div>
      <!-- age -->
      <div>
        <label for="age">Age</label>
        <input type="number" v-model="age" id="age" requried />
      </div>
      <!-- city -->
      <div>
        <label for="city">City</label>
        <input type="text" v-model="city" id="city" requried />
      </div>
      <!-- job -->
      <div>
        <label for="job">Job</label>
        <input type="text" v-model="job" id="job" requried />
      </div>
      <!-- email -->
      <div>
        <label for="email">Email</label>
        <input type="email" v-model="email" id="email" requried />
      </div>
      <!-- password -->
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
// form data export
export default {
  data() {
    return {
      name: "",
      age: "",
      city: "",
      job: "",
      email: "",
      pass: ""
    };
  },
  methods: {
    ...mapActions(["signUp"]),
    onSubmit() {
      const formData = {
        name: this.name,
        age: this.age,
        city: this.city,
        job: this.job,
        email: this.email,
        password: this.pass
      };

      this.signUp(formData);
    }
  }
};
</script>

<style>
form {
  padding: 20px;
  background-color: #8f8193;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  color: #3b1f45;
  border: 2px solid #3b1f45;
}
label {
  display: block;
}
input,
button {
  padding: 5px 30px;
  margin: 10px 0;
}
</style>
