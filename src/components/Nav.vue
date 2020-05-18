<template>
  <div>
    <v-app-bar app color="white">
      <v-avatar class="mr-3" color="grey lighten-5" size="70">
        <v-img contain max-height="70%" src="../assets/smallvirus.png"></v-img>
      </v-avatar>
      <!-- <router-link :to="`/${$i18n.locale}`"> -->
      <router-link to="/">
        <v-toolbar-title class="font-weight-black headline">EDUCOVID</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>

<!--Language dropdown menu-->

<Languageswitcher />



      <template v-slot:extension>
        <v-spacer></v-spacer>
        <!-- <router-link :to="`/${$i18n.locale}/rules`">-->
        <router-link to="/rules">
          <div class="pa-5">
            <h3>{{$t('nav.rules')}}</h3>
          </div>
        </router-link>

       <!-- <router-link :to="`/${$i18n.locale}/guidelines`">-->
       <router-link to="/guidelines">
          <div class="pa-5">
            <h3>{{$t('nav.guidelines')}}</h3>
          </div>
        </router-link>

       <!-- <router-link :to="`/${$i18n.locale}/dailydevelopments`">-->
       <router-link to="/dailydevelopments">
          <div class="pa-5">
            <h3>{{$t('nav.dailydevelopments')}}</h3>
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