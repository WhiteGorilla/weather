import axios from "axios";
import cityInfo from "./cityInfo";
import Vue from "vue";

Vue.use(require("vue-moment"));

export default {
  data() {
    return {
      searchRequest: "",
      searchData: {},
      showErrMessage: false
    };
  },

  name: "mainPage",

  created() {},

  mounted() {},

  computed: {},

  methods: {
    getSearchData: function() {
      if (this.searchRequest.length >= 2) {
        axios({
          url: `http://api.openweathermap.org/data/2.5/weather?q=${this.searchRequest}&appid=fd4fbed251513a7146e1342278f59ccc`,
          method: "GET"
        })
          .then(({ data }) => {
            this.searchData = data;
            this.showErrMessage = false;
          })
          .catch(err => {
            this.showErrMessage = true;
            console.log(err);
          });
      }
    }
  },

  components: {
    cityInfo
  }
};
