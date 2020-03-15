export const state = () => ({
    count: 0
})

export const mutations = {
    countUp: function (state) {
        state.counter++
    }
    // ここに承認ボタンとか追加するならする
}