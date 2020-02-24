<template>
  <main>
    <section>
      <div class="container">
        <form @submit.prevent="getSearchData">
          <label for="city">Enter city name</label>
          <input type="text" id="city" v-model="searchRequest" />
          <button type="submit">Show</button>
          <small v-if="showErrMessage">No such city name!</small>
        </form>
      </div>
    </section>

    <cityInfo :searchData="searchData" />
  </main>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
