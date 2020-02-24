import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weatherMap: [],
    currentSearch: {},
    invalidSearch: false
  },
  getters: {
    allWeatherMap(state) {
      return state.weatherMap;
    },
    currentWeatherMap(state) {
      return state.currentSearch;
    },
    searchStatus(state) {
      return state.invalidSearch;
    }
  },
  mutations: {
    updateWeatherMap(state, weatherMap) {
      state.weatherMap.unshift(weatherMap);
    },
    currentSearch(state, newCity) {
      state.currentSearch = newCity;
    },
    updateSearchStatus(state, status) {
      state.invalidSearch = status;
    }
  },
  actions: {
    getSearchData: function(ctx, searchRequest) {
      axios({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${searchRequest}&appid=fd4fbed251513a7146e1342278f59ccc`,
        method: "GET"
      })
        .then(({ data }) => {
          ctx.commit("updateSearchStatus", false);
          ctx.commit("updateWeatherMap", data);
          ctx.commit("currentSearch", data);
        })
        .catch(err => {
          ctx.commit("updateSearchStatus", true);
          console.log(err);
        });
    }
  },
  modules: {}
});
