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
import Nav from './components/Nav';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Nav,
    Footer
  },

  data: () => ({
  //
  }),
  
};
</script>

<style lang="scss">
h1{
  font-family: Arial, Helvetica, sans-serif;
}

</style>

<!-- Background image from 
https://www.freepik.com/free-photo/coronavirus-infection-with-copy-space_7248142.htm#page=1&query=covid&position=26
-->