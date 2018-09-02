<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "~normalize.css";
@import url("https://fonts.googleapis.com/css?family=Roboto");

body,
html {
    height: 100%;
    margin: 0;
}
#app {
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: no-repeat center;
    background-size: cover;
    height: 100%;
    overflow: hidden;
}
</style>
