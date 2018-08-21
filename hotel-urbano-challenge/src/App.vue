<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "~normalize.css";

body {
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
