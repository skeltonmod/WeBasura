import Vue from 'vue';
import App from "./src/App";
import 'regenerator-runtime/runtime';

// Entry point
new Vue({
  el: "#app",
  render: h => h(App)
});
