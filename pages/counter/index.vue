<template>
  <div>
    <Counter name="washing" />
    <Counter name="dish" />
    <Counter name="toilet" />
  </div>
</template>

<script>
import Counter from "~/components/myPage/Counter.vue";

export default {
  // 新規登録されるcounterのデータを一時的に格納しておく
  data: function() {
    return {
      //nameはcounterの名前
      // name: "",
      // doneはcounterの完了、未完了のための値（初期値はfalse)
      // done: false
    };
  },
  components: {
    Counter
  },
  computed: {
    count() {
      return this.$store.state.counter.count;
    },
    total() {
      return;
    }
  },
  methods: {
    // submitが押された時のaddメソッド storeのcounter.jsのaddを呼び出す
    // 引数に、counterにつける名前を呼び出す
    add: function() {
      this.$store.dispatch("counter/add", this.name);
    },
    dish(e) {
      this.$store.commit("counter/add");
    }
    //ここに訂正ボタンとか承認ボタンとか後からつける
  }
};
</script>

<style>
</style>