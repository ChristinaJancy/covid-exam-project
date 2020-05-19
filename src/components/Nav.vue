<template>
  <div>
    <div>
    <v-app-bar app color="white">
      <router-link to="/">
        <div class="mt-10 pa-4" size="10">
          <v-img contain width="200" src="../assets/edulogo.png"></v-img>
        </div>
      </router-link>
      <v-spacer></v-spacer>

      <!--Language dropdown menu-->

      <Languageswitcher />
      <template v-slot:extension>
        <v-spacer></v-spacer>
        <div id="nav">
          <router-link to="/" class="mx-2">Home</router-link>|
          <router-link to="/rules" class="mx-2">{{$t('nav.rules')}}</router-link>|
          <router-link to="/guidelines" class="mx-2">{{$t('nav.guidelines')}}</router-link>|
          <router-link to="/dailydevelopments" class="mx-2">{{$t('nav.dailydevelopments')}}</router-link>
        </div>
        <v-spacer></v-spacer>
      </template>
    </v-app-bar>
    </div>
  </div>
</template>


<script>
import Languageswitcher from "@/components/Languageswitcher.vue";
//import { gsap } from "gsap";

export default {
  components: {
    Languageswitcher
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style lang="scss">
#nav {
  padding: 30px;
  font-size: 2.5vh;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #cc6600;
      font-size: 105%;
      text-decoration: none;
    }
  }
}

.router-links:hover {
  font-size: 103%;
  background-color: rgba(4, 0, 63, 0.171);
  transition: 0.2s ease;

  .router-links {
    transition: 1s;
  }
}
</style>