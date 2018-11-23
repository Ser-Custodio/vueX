<template>
  <div class="hello">
    <input v-model="msg"/>
    <h1>{{ msg }}</h1>

    <test></test>

  </div>
</template>

<script>
  import test from './Test.vue'

export default {
  name: 'HelloWorld',
  components: {test},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  created(){
    this.msg = window.localStorage.getItem('newMessage');
  },
  watch:{
    msg: function(newMsg){
      window.localStorage.setItem('newMessage', newMsg);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
