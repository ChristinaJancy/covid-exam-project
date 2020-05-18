<template>
  <div>
    <v-app-bar app color="white">
      <router-link to="/">
      <v-avatar class="mr-3 mt-10" size="200">
        <v-img contain max-height="70%" src="../assets/edulogo.png"></v-img>
      </v-avatar>
      <!-- <router-link :to="`/${$i18n.locale}`"> -->
      </router-link>
      <v-spacer></v-spacer>

<!--Language dropdown menu-->

<Languageswitcher />



      <template v-slot:extension>
        <v-spacer></v-spacer>
        <!-- <router-link :to="`/${$i18n.locale}/rules`">-->
        <router-link class="router-links" to="/rules">
          <div class="mx-5 pa-2">
            <h3 class="black--text">{{$t('nav.rules')}}</h3>
          </div>

        </router-link>

       <!-- <router-link :to="`/${$i18n.locale}/guidelines`">-->
       <router-link class="router-links" to="/guidelines">
          <div class="mx-5 pa-2">
            <h3 class="black--text">{{$t('nav.guidelines')}}</h3>
          </div>
        </router-link>

       <!-- <router-link :to="`/${$i18n.locale}/dailydevelopments`">-->
       <router-link class="router-links" to="/dailydevelopments">
          <div class="mx-5 pa-2">
            <h3 class="black--text">{{$t('nav.dailydevelopments')}}</h3>
          </div>
        </router-link>
      </template>
      <!--<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>-->
    </v-app-bar>

  </div>
</template>


<script>
import Languageswitcher from '@/components/Languageswitcher.vue'

export default {
  components: {
  Languageswitcher,
  },
  data() {

    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" }
      ],
      mini: true,
     
    };
    
  }
};
</script>

<style lang="scss">
.router-links:hover{
  font-size: 103%;
  background-color: rgba(4, 0, 63, 0.171);
  transition: .2s ease;

.router-links{
  transition: 1s;
  
}
}
</style>