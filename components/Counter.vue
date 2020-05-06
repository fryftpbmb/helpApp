<template>
  <div>
    <p>Counter</p>
    <p>こんにちは、{{ user.diaplayName }}</p>
    <!-- counter.jsの数字の値を参照して表示させる -->
    <h2>{{ name }}</h2>
    <div>counter: {{ counter }}</div>
    <!--ボタンがクリックされた時commitメソッドを使ってstoreのcountUpを呼び出す -->
    <button v-on:click="countUp">+1</button>
    <button v-on:click="reset">reset</button>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
import { firebaseAction, firestoreAction } from "vuexfire";

const db = firebase.firestore();
const counterRef = db.collection("counters");
export default {
  props: ["name", "user"],
  data: function() {
    return {
      counter: 0
    };
  },
  methods: {
    logout() {
      firebase.auth().signOut();
    },
    countUp: function(state, title) {
      this.counter++;
    },
    reset: function(state) {
      this.counter = 0;
      // ここに承認ボタンとか追加するならする
    }
  },
  mounted() {
    this.$emit("", this.counter);
  },
  init: firestoreAction(({ bindrestoreRef }) => {
    bindFirestoreRef("counters", counterRef);
  }),
  add: firestoreAction((context, name) => {
    if (name.trim()) {
      counterRef.add({
        name: name,
        done: false,
        created: firebase.firestore.FiedValue.serverTimestamp()
      });
    }
  }),
  remove: firestoreAction((context, id) => {
    counterRef.doc(id).delete();
  }),
  toggle: firestoreAction((contect, todo) => {
    counterRef.doc(counter.is).update({
      done: !counter.done
    });
  })
};
</script>