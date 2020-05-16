<template> 
  <v-app id="app" class="background">
    <Nav></Nav>
    <v-content>
         <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Nav from './components/Nav';

export default {
  name: 'App',

  components: {
    Nav,
  },

  data: () => ({
  //
  }),
  
};
</script>

<style lang="scss">

</style>