<template>
  <div>
    <h1>Name: {{ name }}</h1>
    <h2>Source: {{ source }}</h2>

    <h3>Use the mutators</h3>
    <button @click="addS">Add</button>
    <button @click="resetName">Reset</button>
  </div>
</template>

<script>
  import store from '../store'

    export default {
        name: "test",
        data(){
          return{}
        },
        methods:{
          addS(){
            store.commit("addS");
          },
          resetName(){
            store.commit('removeS');
          }
        },
        computed:{
          name(){
            return store.getters.getName;
          },
          source(){
            return store.getters.getSource;
          }
        },
    }

</script>

<style scoped>

</style>
