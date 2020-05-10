<template>
  <div>
    <p>Counter</p>
    <p>なんのお手伝いをしましたか？</p>
    <Counter name="washing" :user="userData"></Counter>
    <Counter name="dish" :user="userData"></Counter>
    <Counter name="toilet" :user="userData"></Counter>
    <button @click="logOut">ログアウト</button>
  </div>
</template>
<script>
import Counter from "~/components/myPage/Counter.vue";
import firebase from "~/plugins/firebase";
export default {
  components: {
    Counter
  },
  methods: {
    logOut() {
      firebase.auth().signOut();
    }
  }
};
</script>