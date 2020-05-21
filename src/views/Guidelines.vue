<template>
  <div id="guidelines" class="about text-center">
    <section>
      <v-parallax
        :height="$vuetify.breakpoint.smAndDown ? 400 : 300"
        src="../assets/guidelines/background1.jpg"
      >
        <v-container fill-height >
          <v-row class="mx-auto" style="margin: 0 auto; padding: 0 auto;">
            <v-col cols="12">
              <div class="text-center">
                <div class="display-2 font-weight-black mb-4">{{$t('guidelines.title')}}</div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </section>
    <h3
      class="pt-5 mx-10"
    >{{$t('guidelines.intro')}}</h3>
    <section style="line-height:40px;">
      <v-row style="margin: 0 auto; padding: 0 auto;">
        <!-----------------------------

    1. Wash your hands

        -------------------------------->
        <v-col sm="12" md="6">
          <h1 class="my-12 primary--text" style="font-size:32px;">{{$t('guidelines.guide1.title')}}</h1>
          <v-img
            max-height="350"
            contain
            class="mx-auto orangefilter"
            style="width:calc(100% - 80px);"
            src="../assets/icons/washinghands.png"
          ></v-img>
        </v-col>

        <v-col md="6" sm="12" class="my-auto">
          <br />
          <p class="pt-5 mx-10 text-left" style="font-size: 20px;">
            {{$t('guidelines.guide1.context1')}}
            <br />
            <br />
            <b class="primary--text"> {{$t('guidelines.guide1.context2')}}</b>
            <br />
          </p>
          <div class="text-left mx-10" style="font-size: 20px;" >
            <li> {{$t('guidelines.guide1.context3.li1')}}</li>
            <li>{{$t('guidelines.guide1.context3.li2')}}</li>
            <li>{{$t('guidelines.guide1.context3.li3')}}</li>
            <li>{{$t('guidelines.guide1.context3.li4')}}</li>
          </div>
        </v-col>
        <!---------- 

    2. Avoid touching eyes, nose and mouth

        -------->
        <v-col sm="12" md="6">
          <h1 class="my-12 primary--text" style="font-size:32px;">{{$t('guidelines.guide2.title')}}</h1>
          <v-img
            class="mx-auto orangefilter"
            contain
            max-height="350"
            style="width:calc(100% - 80px);"
            src="../assets/icons/touchingface.png"
          ></v-img>
        </v-col>
        <v-col sm="12" md="6" class="my-auto">
          <p class="pt-5 mx-10 text-left" style="font-size: 20px;">
            {{$t('guidelines.guide2.context1')}}
            {{$t('guidelines.guide2.context2')}}   
          </p>
        </v-col>

        <!---------------------

    3. Maintain social distancing

        --------------------->
        <v-col sm="12" md="6">
          <h1 class="my-12 primary--text" style="font-size:32px;">3. Maintain social distancing</h1>
          <v-img
            class="mx-auto orangefilter"
            max-height="350"
            contain
            style="width:calc(100% - 80px);"
            src="../assets/icons/distance.png"
          ></v-img>
        </v-col>
        <v-col sm="12" md="6" class="my-auto">
          <p class="pt-5 mx-10 text-left" style="font-size: 20px;">
            Maintain at least
            <b class="primary--text">1 metre distance</b> yourself and others.
            <br />
            <br />When someone
            <b class="primary--text">coughs, sneezes, or speaks</b> they spray small liquid droplets from their nose or mouth which may contain virus.
            <br />
            <br />
If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person has the disease.
          </p>
        </v-col>
      </v-row>
    </section>

    <!-------------------------------------- 

Posters 

--------------------------------------

    -->
  </div>
</template>


<style lang="scss" scoped>
.orangefilter{
        filter: invert(41%) sepia(100%) saturate(5295%) hue-rotate(22deg)
          brightness(100%) contrast(101%);
}

@media screen and (max-width: 700px) {
  #guidelines {
    margin-top: -104px;
  }
}
</style>