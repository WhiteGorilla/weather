export default {
  data() {
    return {
      filters: {
        temperature: {
          type: "temperature",
          visibility: true
        },
        maxTemp: {
          type: "maxTemp",
          visibility: true
        },
        minTemp: {
          type: "minTemp",
          visibility: true
        },
        pressure: {
          type: "pressure",
          visibility: true
        },
        humidity: {
          type: "humidity",
          visibility: true
        },
        visibility: {
          type: "visibility",
          visibility: true
        }
      }
    };
  },

  name: "city-info",

  props: ["searchData", "currentMap"],

  mounted() {},

  computed: {},

  methods: {},

  watch: {
    searchData() {}
  }
};
