import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    // Data we want to use
    name: "Sergio's validation project",
    source: "memo Marion"
  },
  getters:{
    // Getters to access the data
    getName: state =>{
      return state.name;
    },
    getSource: state =>{
      return state.source;
    }
  },
  mutations:{
    // Methods to alter the data
    addS(state){
      state.name = state.name + "s";
    },
    removeS(state){
      state.name = "Sergio's validation project";
    }
  },
  actions:{
    // Diverse methods
  },
  plugins: [vuexLocal.plugin]
})
