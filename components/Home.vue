<template>
  <div>
    <p>Home</p>
    <h2>Sign up</h2>
    <input type="text" placeholder="Username" v-model="username" />
    <input type="password" placeholder="Password" v-model="password" />
    <button>Register</button>
    <p>
      Do you have an account?
      <router-link to="/signin">sign in now!!</router-link>
    </p>
    <h2>GoogleでLogin</h2>
    <button @click="googleLogin">googleでログイン</button>
  </div>
</template>
<script>
import firebase from "@/plugins/firebase";
export default {
  name: "Signin",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    googleLogin() {
      firebase
        .auth()
        .signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
  }
};
</script>
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signup {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>