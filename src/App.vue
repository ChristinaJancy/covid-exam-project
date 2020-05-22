<template>
  <v-app id="app" class="background">
    <Nav></Nav>
    <v-content>
      <router-view />
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Nav,
    Footer
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
#app {
  margin: 0 auto;
  padding: 0 auto;
}
h1 {
  font-family: "Nunito", sans-serif;
}
h2 {
  font-family: "Nunito", sans-serif;
}
h3 {
  font-family: "Nunito", sans-serif;
}
h4 {
  font-family: "Nunito", sans-serif;
}
</style>
