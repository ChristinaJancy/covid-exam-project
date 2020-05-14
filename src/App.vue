<template> 
  <v-app id="app" class="background">
    <Nav></Nav>
    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './views/Home';
import Nav from './components/Nav';

export default {
  name: 'App',

  components: {
    Home,
    Nav,
  },

  data: () => ({
  //
  }),
  
};
</script>

<style lang="scss">

</style>