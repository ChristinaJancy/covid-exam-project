<template>
  <div>
    <section id="hero">
      <v-row no-gutters id="home">
        <v-img
          :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
          src="../assets/home/virusblue2.jpg"
        >
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row align="center" class="white--text mx-auto" justify="center">
                <v-col class="white--text text-center" cols="12" tag="h1">
                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                    class="font-weight-light"
                  >{{$t('home.welcometo')}}</span>
                  <br />
                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                    class="font-weight-black"
                  >EDUCOVID</span>
                </v-col>
                <v-col cols="12">
                  <div style="padding-right:20%;padding-left:20%;">
                  <v-text-field light label="Search.." 
                  filled 
                  rounded 
                  solo
                  background-color="white"
                  dense
                  prepend-inner-icon="mdi-magnify"
                  clearable
                  >
                  </v-text-field>
                  </div>
                </v-col>

                <v-btn
                  class="align-self-end"
                  fab
                  outlined
                  color="white"
                  @click="$vuetify.goTo('#about-us')"
                >
                  <v-icon>mdi-chevron-double-down</v-icon>
                </v-btn>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-img>
      </v-row>
    </section>

    <section id="about-us">
      <div class="py-12"></div>

      <v-container class="text-center">
        <h2 class="font-weight-bold mb-3" style="font-size:50px;">{{$t('about.title')}}</h2>
        <v-responsive class="mx-auto mb-8" width="56">
          <v-divider class="mb-1"></v-divider>
          <v-divider></v-divider>
        </v-responsive>
        <v-responsive
          class="mx-auto title font-weight-light mb-8"
          max-width="720"
        >{{$t('about.content')}}</v-responsive>
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
            <h1 class="icons--text font-weight-black text-uppercase" style="font-size:40px;">Have some Questions?</h1> 
            <br>
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
// @ is an alias to /src
import Contact from "../components/Contact.vue";

export default {
  name: "Home",
  components: {
    Contact
  },
  data: () => ({
    features: [
      {
        icon: "mdi-account-group-outline",
        title: "Message",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
      },
      {
        icon: "mdi-account-group-outline",
        title: "Goals",
        text:
          "We strive to be the number one trustworthy informational site about corona end educational institutions."
      },
      {
        icon: "mdi-account-group-outline",
        title: "Values",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
      }
    ],
    stats: [
      ["", ""],
      ["", ""],
      ["", ""],
      ["", ""]
    ]
  })
};
</script>

<style lang="scss" scoped>
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

@media screen and (max-width: 700px) {
  #home {
    margin-top: -104px;
  }
}
</style>