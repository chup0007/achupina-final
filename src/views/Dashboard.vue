<template>
  <div class="content">
    <h1>Dashboard</h1>
    <p>
      Welcome to your dashboard
      <b>{{ user.name }}</b>
    </p>
    <p>
      Your login email is:
      <b>{{ user.email }}</b>
    </p>
    <!-- form for editing data -->
    <form @submit.prevent="submitForm">
      <label for="name">Edit your name:</label>
      <input type="text" id="name" v-model="user.name" />
      <label for="age">Edit your age:</label>
      <input type="number" id="age" v-model="user.age" />
      <label for="city">Edit your city:</label>
      <input type="text" id="city" v-model="user.city" />
      <label for="job">Edit your job:</label>
      <input type="text" id="job" v-model="user.job" />
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      userData: "getUser"
    }),
    user() {
      return !this.userData ? false : this.userData;
    }
  },
  created() {
    this.getUserData();
  },
  methods: {
    ...mapActions(["updateUser", "fetchUser"]),
    submitForm() {
      this.updateUser();
    },
    getUserData() {
      let userEmail = localStorage.getItem("userEmail");
      this.fetchUser(userEmail);
    }
  }
};
</script>
