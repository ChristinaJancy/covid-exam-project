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

        <!--Language dropdown menu-->
        <Languageswitcher />
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
      <v-app-bar app bottom height="60" color="white">
        <v-row dense>
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

          <v-col cols="2" align="right">
            <div class="img-gradient">
              <router-link to="/dailydevelopments">
                <v-img contain class="grayscale" width="50" src="../assets/icons/info-alone.png"></v-img>
              </router-link>
            </div>
          </v-col>
          <v-col cols="1">
            <template>
              <div class="text-center">
                <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="40" offset-x>
                  <template v-slot:activator="{ on }">
                    <v-btn color="grey darken-3" dark v-on="on" icon>
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>

                  <v-card width="auto" elevation="12" class="text-right">
                    <v-list class="text-center primary">
                      <v-list-item >
                        <v-list-item-action class="text-right" >
                          <h3>
                          <Languageswitcher />
                          </h3>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list>
                    <v-divider></v-divider>
                  </v-card>
                </v-menu>
              </div>
            </template>
          </v-col>
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
      //border-bottom-style: outset;
      color: #cc6600;
      //border-radius: 10%;
      //border-bottom-width: 1.2px;

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
    //color: #cc6600;
    color: rgb(24, 24, 24);
    text-decoration: none;

    &.router-link-exact-active {
      text-decoration: none;
      //border-bottom-style: outset;
      color: #cc6600;
      //border-radius: 10%;
      //border-bottom-width: 1.2px;

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