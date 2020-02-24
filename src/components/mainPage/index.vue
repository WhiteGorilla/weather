<template>
  <div class="main-page">
    <header>
      <div class="container">
        <form @submit.prevent="getData">
          <label for="city">Enter city name</label>
          <input type="text" id="city" v-model="searchRequest" maxlength="64" />
          <button type="submit" :class="{ disabled: searchRequest.length < 2 }">Show</button>
          <small v-if="searchStatus">No such city name!</small>
        </form>
      </div>
    </header>
    <cityInfo :searchData="allWeatherMap" :currentMap="currentWeatherMap" />
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
