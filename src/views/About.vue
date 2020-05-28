<template>
  <div id="about" class="text-center">
    <section>
      <v-parallax
        :height="$vuetify.breakpoint.smAndDown ? 300 : 300"
        src="../assets/home/virusblue2.jpg"
      >
        <v-container fill-height>
          <v-row class="mx-auto" style="margin: 0 auto; padding: 0 auto;">
            <v-col cols="12" align="center" class="my-auto mx-auto banner-img">
              <v-img
                class="png-shadow banner-img my-5"
                contain
                width="auto"
                max-width="380"
                src="../assets/icons/aboutus-alone.png"
              ></v-img>
              <br />
              <br />
              <br />
              <br />
            </v-col>

            <v-col cols="12" align="center">
              <div class="text-center">
                <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                  class="font-weight-light banner-text"
                  style="line-height:55px;"
                >
                  <h1>{{$t('about.about')}}</h1>
                </span>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </section>
    <section id="about-us">
      <div class="py-12"></div>
      <v-container class="text-center">
        <v-responsive class="mx-auto title font-weight-light mb-8" max-width="720">
          <h2>{{$t('about.content')}}</h2>
          <br>
          <span
            :class="[$vuetify.breakpoint.smAndDown ? 'title': 'headline']"
            class="font-weight-light"
          >
            <h4>
              We provide you with an overview of the
              <br />
               <router-link to="/" class="white--text">
              <v-btn class="icons--text" color="transparent" depressed width="130"><h3>daily updates</h3>
                </v-btn> 
               </router-link> ,
              <router-link to="/rules" class="white--text">
                <v-btn color="transparent" depressed width="70" class="icons--text"><h3>rules</h3></v-btn>
              </router-link>and
              <router-link to="/guidelines" class="white--text">
                <v-btn width="110" color="transparent" depressed class="icons--text"><h3>guidelines</h3></v-btn>
              </router-link>
              <br />for the re-opening of educational institutions.
            </h4>
          </span>
        </v-responsive>
        <v-avatar class="elevation-12 mb-12" size="128">
          <v-img id="onlyvirus" src="../assets/onlyvirus.png" contain></v-img>
        </v-avatar>
      </v-container>
    </section>

    <section id="features" class="white">
      <v-container class="text-center">
        <!-- <h2 class="display-2 font-weight-bold mb-3">{{$t('values.headline')}}</h2> -->
        <v-responsive class="mx-auto mb-12" width="56">
          <v-divider class="mb-1"></v-divider>
          <v-divider></v-divider>
        </v-responsive>
        <v-row>
          <div class="py-12"></div>
          <v-col cols="12" md="4">
            <v-card class="py-12 px-4" color="styling" flat height="300">
              <v-theme-provider dark>
                <!--<div>
                  <v-avatar color="white" size="88">
                    <v-icon large color="icons">mdi-account</v-icon>
                  </v-avatar>
                </div>-->
              </v-theme-provider>
              <v-card-title
                class="justify-center font-weight-black white--text text-uppercase"
                style="font-size:40px; padding-bottom:30px;"
              >{{$t('values.messagetitle')}}</v-card-title>
              <v-card-text class="subtitle-1 white--text">{{$t('values.message')}}</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="py-12 px-4" color="primary" flat height="300">
              <v-theme-provider dark></v-theme-provider>
              <v-card-title
                class="justify-center font-weight-black white--text text-uppercase"
                style="font-size:40px; padding-bottom:30px;"
              >{{$t('values.goalstitle')}}</v-card-title>
              <v-card-text class="subtitle-1 white--text">{{$t('values.goals')}}</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="py-12 px-4" color="styling" flat height="300">
              <v-theme-provider dark>
                <!--<div>
                  <v-avatar color="white" size="88">
                    <v-icon large color="icons">mdi-account</v-icon>
                  </v-avatar>
                </div>-->
              </v-theme-provider>
              <v-card-title
                class="justify-center font-weight-black white--text text-uppercase"
                style="font-size:40px; padding-bottom:30px;"
              >{{$t('values.valuestitle')}}</v-card-title>
              <v-card-text class="subtitle-1 white--text">{{$t('values.values')}}</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12">
            <br />
            <br />
            <h1
              class="icons--text font-weight-black text-uppercase"
              style="font-size:40px;"
            >Have some Questions?</h1>
            <br />
            <v-btn
              class="align-self-end"
              fab
              outlined
              color="icons"
              @click="$vuetify.goTo('#contact-us')"
            >
              <v-icon>mdi-chevron-double-down</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>

      <div class="py-12"></div>
      <section id="stats">
        <v-parallax
          :height="$vuetify.breakpoint.smAndDown ? 600 : 500"
          src="../assets/home/virusblue2.jpg"
        >
          <v-container fill-height>
            <v-row class="mx-auto">
              <v-col v-for="[value, title] of stats" :key="title" cols="12" md="3">
                <div class="text-center">
                  <div class="display-3 font-weight-black mb-4" v-text="value"></div>
                  <div class="title font-weight-regular text-uppercase" v-text="title"></div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>
      <div class="py-12 white para-to-contact"></div>
    </section>

    <!-- contact us section-->
    <Contact id="contact-us"></Contact>
    <div class="py-12"></div>
  </div>
</template>

<script>
import Contact from "../components/Contact.vue";

export default {
  components: {
    Contact
  },
  data: () => ({
    //
  })
};
</script>


<style lang="scss" scoped>
@media screen and (max-width: 700px) {
  #about {
    margin-top: -104px;
  }
  .banner-img {
    display: none;
  }
}

.png-shadow {
  filter: url(#drop-shadow);
  -webkit-filter: drop-shadow(3px 1px 5px rgba(0, 0, 0));
  filter: progid:DXImageTransform.Microsoft.Dropshadow(OffX=12, OffY=12, Color='#444');
}

#onlyvirus:hover {
  transform: rotate(360deg);
}
#onlyvirus {
  transition: transform 0.8s ease-in-out;
}

.para-to-contact {
  display: flex;
  @media screen and (max-width: 815px) {
    display: none;
  }
}
</style>