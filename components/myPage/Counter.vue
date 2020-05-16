<template>
  <div>
    <!-- counter.jsの数字の値を参照して表示させる -->
    <h2>{{ name }}</h2>
    <div>counter: {{ counter }}</div>
    <!--ボタンがクリックされた時commitメソッドを使ってstoreのcountUpを呼び出す -->
    <button @click="countUp('wasing')">+1</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
import { firebaseAction, firestoreAction } from "vuexfire";
const db = firebase.firestore();
let userRef = db.collection("users");
export default {
  props: ["name"],
  data: function() {
    return {
      counter: 0
    };
  },
  methods: {
    countUp() {
      this.counter++;

      userRef
        .add({
          category: this.name
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    },
    reset() {
      this.counter = 0;
      userRef
        .doc("DC")
        .delete()
        .then(function() {
          console.log("Document successfully deleted!");
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
    }
  },
  mounted() {
    this.$emit("", this.counter);
  }
};
</script>