export const mutations = {
    countUp: function (state, title) {
        if (title === 'one') {
            state.counter1++
        } else if (title === 'two') {

        }
        state.counter++
    },
    reset: function (state) {
        state.counter = 0
        // ここに承認ボタンとか追加するならする
    }
}