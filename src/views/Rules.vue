<template>
  <div id="rules" class="about text-center">
    <section>
      <v-parallax
        :height="$vuetify.breakpoint.smAndDown ? 400 : 300"
       src="../assets/home/virusblue2.jpg"
      >
        <v-container fill-height>
          <v-row class="mx-auto" style="margin: 0 auto; padding: 0 auto;">
            <v-col cols="12">
              <div class="text-center">
               <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                    class="font-weight-light"
                  ><h1>{{$t('rules.title')}}</h1></span>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </section>
    <h3 class="pt-5 mx-10">     {{$t('rules.intro')}}
</h3>
    <section style="line-height:40px;">
      <v-row style="margin: 0 auto; padding: 0 auto;">
        <!-----------------------------

    1. Distance in the cafeteria

        -------------------------------->
        <v-col cols="12"><h1 class="my-12 primary--text" style="font-size:32px;">{{$t('rules.rule1.title')}}</h1></v-col>
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
        <v-col cols="12">
            <h1 class="my-12 primary--text" style="font-size:32px;"> {{$t('rules.rule2.title')}}</h1>
        </v-col>

        <v-col md="6" sm="12">
        
          <v-img
            max-height="500"
            contain
            class="mx-auto"
            style="width:calc(100% - 80px);"
             src="../assets/rules/class.png"
          ></v-img>
        </v-col>
                <v-col md="6" sm="12" class="my-auto">
          <br />
          <p class="pt-5 mx-10 text-left" style="font-size: 20px;">
     {{$t('rules.rule2.context1')}}

          </p>
        </v-col>
        
<!-----------------------------

3. At the bar

-------------------------------->
        
<v-col cols="12">
   <h1 class="my-12 primary--text" style="font-size:32px;">  {{$t('rules.rule3.title')}}</h1>
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
          <br>
            {{$t('rules.rule3.context2')}}
          </p>
        </v-col>

      </v-row>
    </section>
  </div>
</template>


<style lang="scss" scoped>

 @media screen and (max-width: 700px) {
    #rules{
   margin-top:-104px;
    }   
 } 
</style>