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
      <v-card flat tile class="mx-auto">
        <v-tabs v-model="tab" background-color="primary" centered dark icons-and-text>
          <v-tabs-slider></v-tabs-slider>

          <v-tab href="#tab-1">English</v-tab>

          <v-tab href="#tab-2">Danish</v-tab>
        </v-tabs>
        <v-col cols="12">
          <h1 class="my-12 primary--text">
            To help you remember the rules and make sure they are kept,
            <br />these poster will be hanging around the educational institutions.
            <br />
          </h1>
        </v-col>
        <v-tabs-items v-model="tab">
          <!-- English posters -->
          <v-tab-item value="tab-1">
            <v-card flat>
              <v-row class="pa-0 ma-0">
                <v-col md="4" sm="12">
                  <h1 class="primary--text">KEEP DISTANCE</h1>
                  <v-responsive class="mx-auto" width="56">
                    <v-divider class="mb-1"></v-divider>
                    <v-divider></v-divider>
                  </v-responsive>
                  <v-img
                    max-height="500"
                    contain
                    class="mx-auto poster"
                    style="width:calc(100% - 80px);"
                    src="../assets/rules/cafeteria-poster.png"
                  ></v-img>
                  <div>
                    <a
                      class
                      href="https://firebasestorage.googleapis.com/v0/b/portfolio-708bc.appspot.com/o/posterdesign-main.png?alt=media&token=19d5db26-d81e-46fe-8452-66022c251a25"
                      target="_blank"
                    >View larger (opens new tab) </a>
                  </div>
                </v-col>
                <v-col md="4" sm="12">
                  <h1 class="primary--text">WASH YOUR HANDS</h1>
                  <v-responsive class="mx-auto" width="56">
                    <v-divider class="mb-1"></v-divider>
                    <v-divider></v-divider>
                  </v-responsive>
                  <v-img
                    max-height="500"
                    contain
                    class="mx-auto poster"
                    style="width:calc(100% - 80px);"
                    src="../assets/rules/bathroom-poster.png"
                  ></v-img>
                  <div>
                    <a
                      class
                      href="https://firebasestorage.googleapis.com/v0/b/portfolio-708bc.appspot.com/o/bathroom-poster.png?alt=media&token=b015e532-d3f9-40db-8642-3e10028ee515"
                      target="_blank"
                    >View larger (opens new tab)</a>
                  </div>
                </v-col>
                <v-col md="4" sm="12">
                  <h1 class="primary--text">STAY SAFE</h1>
                  <v-responsive class="mx-auto" width="56">
                    <v-divider class="mb-1"></v-divider>
                    <v-divider></v-divider>
                  </v-responsive>
                  <v-img
                    max-height="500"
                    contain
                    class="mx-auto poster"
                    style="width:calc(100% - 80px);"
                    src="../assets/rules/posterdesign-main.png"
                  ></v-img>
                  <!--in the div = class="pa-0 ma-0 mx-12 pl-4" align="left"-->
                  <div >
                    <a
                      class
                      href="https://firebasestorage.googleapis.com/v0/b/portfolio-708bc.appspot.com/o/posterdesign-main.png?alt=media&token=19d5db26-d81e-46fe-8452-66022c251a25"
                      target="_blank"
                    >View larger (opens new tab)</a>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>

          <!-- Danish posters -->
          <v-tab-item value="tab-2">
            <v-card flat>
              <v-row class="pa-0 ma-0">
                <v-col md="4" sm="12">
                  <h1 class="primary--text">HOLD FYSISK AFSTAND</h1>
                  <v-responsive class="mx-auto" width="56">
                    <v-divider class="mb-1"></v-divider>
                    <v-divider></v-divider>
                  </v-responsive>
                  <v-img
                    max-height="500"
                    contain
                    class="mx-auto poster"
                    style="width:calc(100% - 80px);"
                    src="../assets/rules/cafeteria-posterDAN.png"
                  ></v-img>
                   <a
                      class
                      href="https://firebasestorage.googleapis.com/v0/b/portfolio-708bc.appspot.com/o/cafeteria-posterDAN.png?alt=media&token=da426986-6f53-4ac7-827d-89adb5557541"
                      target="_blank"
                    >Se større (åbner ny fane)</a>
                </v-col>
                <v-col md="4" sm="12">
                  <h1 class="primary--text">VASK DINE HÆNDER</h1>
                  <v-responsive class="mx-auto" width="56">
                    <v-divider class="mb-1"></v-divider>
                    <v-divider></v-divider>
                  </v-responsive>
                  <v-img
                    max-height="500"
                    contain
                    class="mx-auto poster"
                    style="width:calc(100% - 80px);"
                    src="../assets/rules/bathroom-posterDAN.png"
                  ></v-img>
                      <a
                      class
                      href="https://firebasestorage.googleapis.com/v0/b/portfolio-708bc.appspot.com/o/bathroom-posterDAN.png?alt=media&token=1b63e7bc-0213-4711-94f8-5ecc6d4136bb"
                      target="_blank"
                    >Se større (åbner ny fane)</a>
                </v-col>
                <v-col md="4" sm="12">
                  <h1 class="primary--text">PAS PÅ SIG SELV</h1>
                  <v-responsive class="mx-auto" width="56">
                    <v-divider class="mb-1"></v-divider>
                    <v-divider></v-divider>
                  </v-responsive>
                  <v-img
                    max-height="500"
                    contain
                    class="mx-auto poster"
                    style="width:calc(100% - 80px);"
                    src="../assets/rules/posterdesign-mainDAN.png"
                  ></v-img>
                      <a
                      class
                      href="https://firebasestorage.googleapis.com/v0/b/portfolio-708bc.appspot.com/o/posterdesign-mainDAN.png?alt=media&token=9df08b92-9da3-48b2-9bba-bc9ca92956da"
                      target="_blank"
                    >Se større (åbner ny fane)</a>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
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
</style>


<script scoped>
export default {
  data() {
    return {
      tab: null
    };
  }
};
</script> 