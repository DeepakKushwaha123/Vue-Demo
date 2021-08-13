<template>
  <Header />
  <div class="container">
    <!-- <Demo /> -->
    <TableData />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";
// import Demo from "./components/Demo";

export default {
  components: {
    Header,
    // Demo,
  },
};
</script>

<style>
.navbar-expand-lg {
  background: #091424;
  box-shadow: 0 0 4px 0 rgb(9 20 36);
}
body {
  background: #222831;
}
.card {
  background: #1a1d24;
}
.card-body {
  color: #f9ffee;
}
.card-body a {
  color: #efbb35;
}
</style>
