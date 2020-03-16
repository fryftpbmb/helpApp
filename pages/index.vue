<template>
  <div>
    <Counter></Counter>
    <Counter></Counter>
    <Counter></Counter>
  </div>
</template>

<script>
import Counter from "~/components/Counter.vue";

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