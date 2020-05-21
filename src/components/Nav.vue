<template>
  <div>
    <div id="navpc">
      <v-app-bar app color="white">
        <router-link to="/">
          <div class="mt-10">
            <v-img contain width="200" src="../assets/edulogo.png"></v-img>
          </div>
        </router-link>
        <v-spacer></v-spacer>

        <!-----------------------
        Language dropdown menu
        ------------------------>
 
        <h4 style="color:black !important;" class="mr-2 mb-3"> {{$t('nav.language')}}</h4>
        <div style="color:#385170 !important;">
          <h2 class="mr-1">
          <Languageswitcher />
          </h2>
        </div>

          <!------------------------------
                      TABS
          ----------------------------------->
        <template v-slot:extension>
          <v-spacer></v-spacer>
          <div id="nav">
            <div style="display:table-cell;" class="pr-5 pl-5 img-gradient">
              <router-link to="/" class="mx-1">
                <v-img
                  contain
                  style="float: left;"
                  class="grayscale"
                  width="25"
                  src="../assets/onlyvirus.png"
                ></v-img>Home
              </router-link>
            </div>

            <div style="display:table-cell;" class="pr-5">
              <router-link to="/rules" class="mx-1">
                <v-img
                  contain
                  class="grayscale"
                  style="float: left;"
                  width="35"
                  src="../assets/icons/rules-alone.png"
                ></v-img>
                {{$t('nav.rules')}}
              </router-link>
            </div>

            <div style="display:table-cell;" class="pr-5">
              <router-link to="/guidelines" class="mx-1">
                <v-img
                  contain
                  class="grayscale"
                  style="float: left;"
                  width="25"
                  src="../assets/icons/guidelines-alone.png"
                ></v-img>
                {{$t('nav.guidelines')}}
              </router-link>
            </div>

            <div style="display:table-cell;">
              <router-link to="/dailydevelopments" class="mx-1">
                <v-img
                  contain
                  class="grayscale"
                  style="float: left;"
                  width="35"
                  src="../assets/icons/info-alone.png"
                ></v-img>
                {{$t('nav.dailydevelopments')}}
              </router-link>
            </div>
          </div>
          <v-spacer></v-spacer>
        </template>
      </v-app-bar>
    </div>

    <!--------------- 
          
          Phone nav

    -------------------->
    <div id="navphone">

      <v-system-bar color="grey darken-4" height="27">
        <v-spacer></v-spacer>
        <h3 style="color:white !important;" class="mr-2 pt-1"> {{$t('nav.language')}}</h3>
        <div class="pt-4" style="color:#cc7500 !important;">
          <h1 class="mr-1">
          <Languageswitcher />
          </h1>
        </div>
      </v-system-bar>

      <v-app-bar app bottom height="60" color="white">
        <v-row >
          <v-col cols="3" align="center">
            <div class="img-gradient">
              <router-link to="/">
                <v-img contain class="grayscale" width="40" src="../assets/onlyvirus.png"></v-img>
              </router-link>
            </div>
          </v-col>

          <v-col cols="3" align="center">
            <div class="img-gradient">
              <router-link to="/rules">
                <v-img contain class="grayscale" width="50" src="../assets/icons/rules-alone.png"></v-img>
              </router-link>
            </div>
          </v-col>

          <v-col cols="3" align="center">
            <div class="img-gradient">
              <router-link to="/guidelines">
                <v-img
                  contain
                  class="grayscale"
                  width="40"
                  src="../assets/icons/guidelines-alone.png"
                ></v-img>
              </router-link>
            </div>
          </v-col>

          <v-col cols="3" align="center">
            <div class="img-gradient">
              <router-link to="/dailydevelopments">
                <v-img contain class="grayscale" width="50" src="../assets/icons/info-alone.png"></v-img>
              </router-link>
            </div>
          </v-col>
          <!--
          <v-col cols="1" align="right">
            <div class="my-2" style="color:#385170 !important;">
              <Languageswitcher />
            </div>
          </v-col>-->
        </v-row>
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
#navpc {
  display: initial;
  @media screen and (max-width: 700px) {
    display: none;
  }
}

#navphone {
  display: none;
  @media screen and (max-width: 700px) {
    display: initial;
  }

  a {
    font-weight: bold;
    //color: #cc6600;
    color: rgb(24, 24, 24);
    text-decoration: none;

    &.router-link-exact-active {
      text-decoration: none;
      color: #cc6600;
      .grayscale {
        filter: invert(41%) sepia(100%) saturate(5295%) hue-rotate(22deg)
          brightness(100%) contrast(101%);
      }
    }
  }
}

#nav {
  padding: 30px;
  font-size: 2.5vh;
  a {
    font-weight: bold;
    color: rgb(24, 24, 24);
    text-decoration: none;

    &.router-link-exact-active {
      text-decoration: none;
      color: #cc6600;
      
      .grayscale {
        filter: invert(41%) sepia(100%) saturate(5295%) hue-rotate(22deg)
          brightness(100%) contrast(101%);
      }
    }
  }
}

.grayscale {
  filter: invert(0%) sepia(0%) grayscale(100%) saturate(100%) hue-rotate(201deg)
    brightness(99%) contrast(1000%);
}
</style>