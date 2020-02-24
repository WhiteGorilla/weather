import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import cityInfo from "./cityInfo";

Vue.use(require("vue-moment"));

export default {
  data() {
    return {
      searchRequest: "",
      showErrMessage: false
    };
  },

  name: "mainPage",

  created() {},

  mounted() {},

  computed: {
    ...mapGetters(["allWeatherMap", "currentWeatherMap", "searchStatus"])
  },

  methods: {
    getData() {
      if (this.searchRequest.length >= 2) {
        this.getSearchData(this.searchRequest);
      }
    },

    ...mapActions(["getSearchData"])
  },

  components: {
    cityInfo
  }
};
