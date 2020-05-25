<template>
 <div id="daily" class="about text-center">
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
                src="../assets/icons/info-alone.png"
              ></v-img>
            </v-col>

            <v-col cols="12" align="center">
              <div class="text-center">
                <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                  class="font-weight-light banner-text"
                >
                  <h1>{{$t('nav.dailydevelopments')}}</h1>
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
      </v-row>
    </section>
 </div>
</template>


<style lang="scss" scoped>
@media screen and (max-width: 700px) {
  #daily {
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