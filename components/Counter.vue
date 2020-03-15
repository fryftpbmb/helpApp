<!--  カウント数の表示とカウントアップボタンの実装 -->
<template>
<div>
    <!-- counter.jsの数字の値を参照して表示させる -->
    <h2>{{ title }}</h2>
    counter: {{ $store.state.counter}}
    <!--ボタンがクリックされた時commitメソッドを使ってstoreのcountUpを呼び出す -->
    <button v-on:click="$store.commit('counter/countUp')">+1</button>
</div>
</template>

<script>
export default {
        data:function(){
            return{
                title:'お手伝いカウンター'
            }
        }
    }
</script>