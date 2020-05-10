<template>
  <div class="links">
    <Home v-if="!isLogin"></Home>
    <myPage v-if="isLogin"></myPage>
  </div>
</template>
<script>
import firebase from "@/plugins/firebase";
import Home from "~/components/Home.vue";
import myPage from "~/components/myPage.vue";
export default {
  components: {
    Home,
    myPage
  },
  asyncData(context) {
    return { name: "Hello,World", isLogin: false, userData: null };
  },
  mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.isLogin = true;
        this.userData = user;
      } else {
        this.isLogin = false;
        this.userData = null;
      }
    });
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