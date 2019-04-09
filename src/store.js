import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        todos: ["buy", "sell"],
        title: "",
        editindex: -1
    },
    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
        updateTitle(state, addtitle) {
            if (addtitle && addtitle !== "") {
                state.title = addtitle;
            }
        },
        addTodo(state, addtitle) {
            if (addtitle && addtitle !== "") {
                state.todos.push(addtitle);
                state.title = "";
            }
        },
        editTodo(state, index) {
            state.title = state.todos[index];
            state.editindex = index;
        },
        deleteTodo(state,index) {
            state.todos.splice(index, 1);
        },
        updateTodo(state, addtitle) {
            if (state.title && state.title !== "") {
                state.todos[state.editindex] = addtitle;
                state.editindex = -1;
                state.title = "";
            }
        }
    }
})