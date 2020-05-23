<template>
  <div id="guidelines" class="about text-center">
    <section>
      <v-parallax
        :height="$vuetify.breakpoint.smAndDown ? 300 : 300"
        src="../assets/home/virusblue2.jpg"
      >
        <v-container fill-height>
          <v-row class="mx-auto" style="margin: 0 auto; padding: 0 auto;">
            <v-col cols="12" align="center" class="my-auto mx-auto banner-img">
              <v-img
                class="png-shadow banner-img"
                style="margin-top:-10px"
                contain
                width="auto"
                max-width="250"
                src="../assets/icons/guidelines-alone.png"
              ></v-img>
            </v-col>

            <v-col cols="12" align="center">
              <div class="text-center">
                <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                  class="font-weight-light banner-text"
                >
                  <h1>{{$t('guidelines.title')}}</h1>
                </span>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </section>
    <br />
    <h3 class="pt-5 mx-10">{{$t('guidelines.intro')}}</h3>
    <section style="line-height:40px;">
      <v-row style="margin: 0 auto; padding: 0 auto;">
        <!-----------------------------

    1. Wash your hands

        -------------------------------->
        <v-col cols="12">
          <h1 class="my-12 primary--text" style="font-size:32px;">{{$t('guidelines.guide1.title')}}</h1>
        </v-col>
        <v-col sm="12" md="6">
          <v-img max-height="350" contain class src="../assets/icons/washinghands.png"></v-img>
        </v-col>

        <v-col md="6" sm="12" class="my-auto">
          <br />
          <p class="pt-5 mx-10 text-left" style="font-size: 20px;">
            {{$t('guidelines.guide1.context1')}}
            <br />
            <br />
            <b class="primary--text">{{$t('guidelines.guide1.context2')}}</b>
            <br />
          </p>
          <div class="text-left mx-10" style="font-size: 20px;">
            <li>{{$t('guidelines.guide1.context3.li1')}}</li>
            <li>{{$t('guidelines.guide1.context3.li2')}}</li>
            <li>{{$t('guidelines.guide1.context3.li3')}}</li>
            <li>{{$t('guidelines.guide1.context3.li4')}}</li>
          </div>
        </v-col>
        <!---------- 

    2. Avoid touching eyes, nose and mouth

        -------->
        <v-col cols="12" class="secondary">
          <h1 class="my-12 primary--text" style="font-size:32px;">{{$t('guidelines.guide2.title')}}</h1>
        </v-col>
        <v-col sm="12" md="6" class="secondary">
          <v-img
            class="mx-auto"
            contain
            max-height="350"
            style="width:calc(100% - 80px);"
            src="../assets/icons/touchingface.png"
          ></v-img>
        </v-col>
        <v-col sm="12" md="6" class="secondary">
          <p class="pt-5 mx-10 text-left" style="font-size: 20px;">
            {{$t('guidelines.guide2.context1')}}
            {{$t('guidelines.guide2.context2')}}
          </p>
        </v-col>

        <!---------------------

    3. Maintain social distancing

        --------------------->
        <v-col cols="12">
          <h1 class="my-12 primary--text" style="font-size:32px;">{{$t('guidelines.guide3.title')}}</h1>
        </v-col>
        <v-col sm="12" md="6">
          <v-img
            class="mx-auto"
            max-height="350"
            contain
            style="width:calc(100% - 80px);"
            src="../assets/icons/distance.png"
          ></v-img>
        </v-col>
        <v-col sm="12" md="6" class="my-auto">
          <p class="pt-5 mx-10 text-left" style="font-size: 20px;">
            {{$t('guidelines.guide3.context1')}}
            <b
              class="primary--text"
            >{{$t('guidelines.guide3.context2')}}</b>
            <br />
            <br />
            {{$t('guidelines.guide3.context3')}}
            <br />
            <br />
            {{$t('guidelines.guide3.context4')}}
          </p>
        </v-col>

        <!---------------------

    4. if feeling symptoms, stay home and isolate

        --------------------->
        <v-col cols="12" class="secondary">
          <h1 class="my-12 primary--text" style="font-size:32px;">{{$t('guidelines.guide4.title')}}</h1>
        </v-col>
        <v-col sm="12" md="6" class="secondary">
          <v-row dense>
            <v-col cols="6">
              <v-img
                class="mx-auto"
                max-height="250"
                contain
                style="width:calc(100% - 80px);"
                src="../assets/icons/coughing.png"
              ></v-img>
            </v-col>
            <v-col cols="6">
              <v-img
                class="mx-auto"
                max-height="250"
                contain
                style="width:calc(100% - 80px);"
                src="../assets/icons/headache.png"
              ></v-img>
            </v-col>
            <v-col cols="12">
              <v-img
                class="mx-auto"
                max-height="250"
                contain
                style="width:calc(100% - 80px);"
                src="../assets/icons/hightempeture.png"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
        <v-col sm="12" md="6" class="pt-5 secondary">
          <p class="mx-10 text-left" style="font-size: 20px;">
            {{$t('guidelines.guide4.context1')}}
            <br />
            <br />
            <b class="primary--text">{{$t('guidelines.guide4.context2')}}</b>
            {{$t('guidelines.guide4.context3')}}
            <br />
            <br />
            {{$t('guidelines.guide4.context4')}}
            <br />
            {{$t('guidelines.guide4.context5')}}
          </p>
        </v-col>

        <!---------------------

5. Feeling worried?

        --------------------->
        <v-col cols="12">
          <h1 class="my-12 primary--text" style="font-size:32px;">{{$t('guidelines.guide5.title')}}</h1>
        </v-col>
        <v-col sm="12" md="6">
          <v-img
            class="mx-auto orangefilter"
            max-height="300"
            contain
            style="width:calc(100% - 80px);"
            src="../assets/icons/confused.png"
          ></v-img>
        </v-col>
        <v-col sm="12" md="6" class="my-auto">
          <p class="pt-5 mx-10 text-left" style="font-size: 20px;">
            {{$t('guidelines.guide5.context1')}}
            <br />
            <b class="primary--text">{{$t('guidelines.guide5.context2')}}</b>
            <br />
            <br />
            {{$t('guidelines.guide5.context3')}}
            <br />
            <br />
            {{$t('guidelines.guide5.context4')}}
            <a
              href="mailto:educovid@outlook.com"
              class="primary--text font-weight-bold"
            >educovid@outlook.com</a>
          </p>
        </v-col>
      </v-row>
    </section>
  </div>
</template>


<style lang="scss" scoped>
.orangefilter {
  filter: invert(40%) sepia(25%) saturate(10000%) hue-rotate(15deg)
    brightness(104%) contrast(90%);
}

@media screen and (max-width: 700px) {
  #guidelines {
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