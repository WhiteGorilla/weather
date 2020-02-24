<template>
  <section>
    <div class="container">
      <div class="wrap">
        <div v-if="currentMap && currentMap.coord">
          <h2>{{ currentMap.name }}</h2>
          <h4>
            latitude: {{ currentMap.coord.lat }} , longitude:
            {{ currentMap.coord.lon }}
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

        <template v-if="searchData">
          <template v-for="(locationData, index) in searchData">
            <tr :key="index" v-if="locationData.name == currentMap.name">
              <td>
                <template v-for="weather in locationData.weather">
                  {{ locationData.dt | moment("DD/MM/YYYY H:MM") }}
                  ({{ weather.description }})
                </template>
              </td>
              <td v-if="filters.temperature.visibility">{{ locationData.main.temp }}</td>
              <td v-if="filters.maxTemp.visibility">{{ locationData.main.temp_max }}</td>
              <td v-if="filters.minTemp.visibility">{{ locationData.main.temp_min }}</td>
              <td v-if="filters.pressure.visibility">{{ locationData.main.pressure }}</td>
              <td v-if="filters.humidity.visibility">{{ locationData.main.humidity }}</td>
              <td v-if="filters.visibility.visibility">{{ locationData.visibility }}</td>
            </tr>
          </template>
        </template>
      </table>
    </div>
  </section>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
