<template>
  <div>
    <h1>お手伝い何しましたか？</h1>
    <Counter></Counter>
  </div>
</template>

<script>
import counter from "~/components/Counter.vue";

export default {
  components: {
    Counter
  }
  // ,
  // computed: {
  //   count ()  { return this.$store.state.counter.count }
  // },
  // methods:{
  //   dish(e){
  //     this.$store.commit('counter/add')
  //   }
  //   //ここに訂正ボタンとか承認ボタンとか後からつける
  // }
};
</script>

<style>
</style>