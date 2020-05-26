<template>
  <div id="rules" class="about text-center">
    <section>
      <v-parallax
        :height="$vuetify.breakpoint.smAndDown ? 300 : 300"
        src="../assets/home/virusblue2.jpg"
      >
        <v-container fill-height>
          <v-row class="mx-auto" style="margin: 0 auto; padding: 0 auto;">
            <v-col cols="12" align="center" class="my-auto mx-auto banner-img">
              <v-img
                class="my-5 png-shadow banner-img"
                contain
                width="auto"
                max-width="300"
                src="../assets/icons/rules-alone.png"
              ></v-img>
            </v-col>
            <v-col cols="12" align="center">
              <div class="text-center">
                <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                  class="font-weight-light"
                >
                  <h1>{{$t('rules.title')}}</h1>
                </span>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </section>
    <br />
    <h3 class="pt-5 mx-12">
      {{$t('rules.intro1')}}
      <br />
      {{$t('rules.intro2')}}
    </h3>
    <section style="line-height:40px;">
      <br />
      <br />
      <v-row style="margin: 0 auto; padding: 0 auto;">
        <!-----------------------------

    1. Distance in the cafeteria

        -------------------------------->
        <v-col cols="12">
          <h1 class="my-12 primary--text" style="font-size:32px;">{{$t('rules.rule1.title')}}</h1>
        </v-col>
        <v-col md="6" sm="12">
          <v-img
            max-height="500"
            contain
            class="mx-auto"
            style="width:calc(100% - 80px);"
            src="../assets/rules/canteenscreen.png"
          ></v-img>
        </v-col>

        <v-col md="6" sm="12" class="my-auto">
          <br />
          <p class="pt-5 mx-10 text-left" style="font-size: 20px;">
            {{$t('rules.rule1.context1')}}
            <br />
            <br />
            {{$t('rules.rule1.context2')}}
            <br />
          </p>
        </v-col>
        <!-----------------------------

    2. In the classrooms

        -------------------------------->
        <v-col cols="12" class="secondary">
          <h1 class="my-12 primary--text" style="font-size:32px;">{{$t('rules.rule2.title')}}</h1>
        </v-col>

        <v-col md="6" sm="12" class="secondary">
          <v-img
            max-height="500"
            contain
            class="mx-auto"
            style="width:calc(100% - 80px);"
            src="../assets/rules/class.png"
          ></v-img>
        </v-col>
        <v-col md="6" sm="12" class="secondary">
          <br />
          <p
            class="pt-12 mt-12 mx-12 text-left"
            style="font-size: 20px;"
          >{{$t('rules.rule2.context1')}}</p>
        </v-col>

        <!-----------------------------

3. At the bar

        -------------------------------->

        <v-col cols="12">
          <h1 class="my-12 primary--text" style="font-size:32px;">{{$t('rules.rule3.title')}}</h1>
        </v-col>
        <v-col md="6" sm="12">
          <v-img
            max-height="500"
            contain
            class="mx-auto"
            style="width:calc(100% - 80px);"
            src="../assets/rules/schoolbar.jpg"
          ></v-img>
        </v-col>

        <v-col md="6" sm="12" class="my-auto">
          <br />
          <p class="pt-5 mx-10 text-left" style="font-size: 20px;">
            {{$t('rules.rule3.context1')}}
            <br />
            {{$t('rules.rule3.context2')}}
          </p>
        </v-col>

        <!--------------------

Posters 

        --------------------->

      
      </v-row>
    <v-row class="pa-0 ma-0 primary" dense>
             <v-col cols="12">
          <h1 class="my-12 white--text" style="line-height:50px;">
            To help you remember the rules and make sure they are kept,
            <br />these poster will be hanging around the educational institutions.
          </h1>
          <b class="white--text" style="font-size:20px;">Click image to view large version.</b>
        </v-col>
    </v-row>
      <Posters> </Posters>
    </section>
  </div>
</template>


<style lang="scss" scoped>
@media screen and (max-width: 700px) {
  #rules {
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

/* --------------------  

VIEW LARGE IMAGE

------------------------*/


</style>


<script scoped>
import Posters from "../components/Posters.vue"

export default {
  components: {
    Posters,
  },
  data() {
    return {
      tab: null,
       overlay: false,
    };
  }
};
</script> 