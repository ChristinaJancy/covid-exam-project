<template>

    <div>
      <v-app-bar app color="white">
        <router-link to="/">
          <div class="mt-10">
            <v-img contain width="200" src="../assets/edulogo.png"></v-img>
          </div>
        </router-link>
        <v-spacer></v-spacer>

        <!--Language dropdown menu-->
        <Languageswitcher />
        <template v-slot:extension>
          <v-spacer></v-spacer>
          <div id="nav">
            <div style="display:table-cell;" class="pr-5 img-gradient">
              <router-link to="/" class="mx-1">
                <v-img contain style="float: left;" class="grayscale" width="25" src="../assets/onlyvirus.png">
                </v-img>Home
              </router-link>
            </div>

            <div style="display:table-cell;" class="pr-5">
              <router-link to="/rules" class="mx-1">
                <v-img contain class="grayscale" style="float: left;" width="35" src="../assets/icons/rules-alone.png"></v-img>{{$t('nav.rules')}}
              </router-link>
            </div>

            <div style="display:table-cell;" class="pr-5">
              <router-link to="/guidelines" class="mx-1">
                <v-img contain class="grayscale" style="float: left;" width="25" src="../assets/icons/guidelines-alone.png"></v-img>{{$t('nav.guidelines')}}
              </router-link> 
            </div>

            <div style="display:table-cell;">
              <router-link to="/dailydevelopments" class="mx-1">
                <v-img contain class="grayscale" style="float: left;" width="35" src="../assets/icons/info-alone.png"></v-img>{{$t('nav.dailydevelopments')}}
              </router-link>
            </div>
          </div>
          <v-spacer></v-spacer>
        </template>
      </v-app-bar>
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
    //color: #cc6600;
    color: rgb(24, 24, 24);
    text-decoration: none;

    &.router-link-exact-active {
      text-decoration: none;
      //border-bottom-style: outset;
      color: #cc6600;
      //border-radius: 10%;
      //border-bottom-width: 1.2px;
      
        .grayscale{ 
        filter: invert(41%) sepia(100%) saturate(5295%) hue-rotate(22deg) brightness(100%) contrast(101%);

      }
    }
  }
}

 .grayscale{ 
        filter: invert(0%) sepia(0%) grayscale(100%) saturate(100%) hue-rotate(201deg) brightness(99%) contrast(1000%);
   }
</style>