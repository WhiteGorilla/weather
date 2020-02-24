<template>
  <section>
    <div class="container">
      <div class="wrap">
        <div v-if="searchData && searchData.coord">
          <h2>{{ searchData.name }}</h2>
          <h4>
            latitude: {{ searchData.coord.lat }} , longitude:
            {{ searchData.coord.lon }}
          </h4>
        </div>

        <form @submit.prevent="getSearchData">
          <label v-for="(filter, index) in filters" :key="index" :for="filter.type">
            {{ filter.type }}
            <input
              type="checkbox"
              name
              :id="filter.type"
              v-model="filter.visibility"
            />
            <span></span>
          </label>
        </form>
      </div>

      <table>
        <tr>
          <th>Date/Time</th>
          <template v-for="(filter, index) in filters">
            <th :key="index" v-if="filter.visibility">{{ filter.type }}</th>
          </template>
        </tr>

        <template v-if="searchData && searchData.main">
          <tr>
            <td>
              <template v-for="weather in searchData.weather">
                {{ searchData.dt | moment("DD/MM/YYYY H:MM") }}
                ({{ weather.description }})
              </template>
            </td>

            <template v-for="(filter, index) in filters">
              <td :key="index" v-if="filter.visibility">{{ filter.value }}</td>
            </template>
          </tr>
        </template>
      </table>
    </div>
  </section>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
