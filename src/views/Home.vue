<template>
  <div class="home">
      Count: {{$store.state.count}}
      <button @click="$store.commit('increment')">increment</button>
      <button @click="$store.commit('decrement')">decrement</button>
    <h1>home</h1>
    <input type="text" :value="title" @input="updateTitle($event.target.value)">
    <button @click="addTodo(title)" v-if="editindex < 0">Add Todo</button>
    <button @click="updateTodo( title, editindex)" v-if="editindex >= 0">Update Todo</button>
    <ul>
      <li v-for="( todo, idx ) in todos" :key="idx">
        {{todo}}
        <button @click="editTodo(idx)">Edit</button>
        <button @click="deleteTodo(idx)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: "home",
  computed: mapState(['todos', 'title', 'editindex']),
  methods: mapMutations(['addTodo','editTodo','deleteTodo','updateTodo','updateTitle'])
};
</script> 
