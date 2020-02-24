export default {
  data() {
    return {
      filters: {
        temperature: {
          type: "temperature",
          visibility: true,
          value: ""
        },
        maxTemp: {
          type: "maxTemp",
          visibility: true,
          value: ""
        },
        minTemp: {
          type: "minTemp",
          visibility: true,
          value: ""
        },
        pressure: {
          type: "pressure",
          visibility: true,
          value: ""
        },
        humidity: {
          type: "humidity",
          visibility: true,
          value: ""
        },
        visibility: {
          type: "visibility",
          visibility: true,
          value: ""
        }
      }
    };
  },

  name: "city-info",

  props: ["searchData"],

  mounted() {},

  computed: {},

  methods: {},

  watch: {
    searchData() {
      this.filters.temperature.value = this.searchData.main.temp;
      this.filters.maxTemp.value = this.searchData.main.temp_max;
      this.filters.minTemp.value = this.searchData.main.temp_min;
      this.filters.pressure.value = this.searchData.main.pressure;
      this.filters.humidity.value = this.searchData.main.humidity;
      this.filters.visibility.value = this.searchData.visibility;
    }
  }
};
