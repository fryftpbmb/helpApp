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
      const db = firebase.firestore();
      let userRef = db.collection("new");
      userRef
        .add({
          [this.name]: 1
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    },
    reset(state) {
      this.counter = 0;
      // ここに承認ボタンとか追加するならする
    }
  },
  mounted() {
    this.$emit("", this.counter);
  }
};
</script>