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
                  ><h1>RULES</h1></span>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </section>
    <h3 class="pt-5 mx-10">We hope you get a safe return to your educational institution. For the reopening of these institutions,  a new set of rules will be set in place, to stop the virus from spreading. 
</h3>
    <section style="line-height:40px;">
      <v-row style="margin: 0 auto; padding: 0 auto;">
        <!-----------------------------

    1. Distance in the cafeteria

        -------------------------------->
        <v-col md="6" sm="12">
          <h1 class="my-12 primary--text" style="font-size:32px;">1. Distance in the cafeteria</h1>
          <v-img
            max-height="500"
            contain
            class="mx-auto"
            style="width:calc(100% - 80px);"
            src="../assets/rules/cafeteria.jpg"
          ></v-img>
        </v-col>

        <v-col md="6" sm="12" class="my-auto">
          <br />
          <p class="pt-5 mx-10 text-left" style="font-size: 20px;">
      There will be stickers on the floor telling you to keep at least 1. m distance. 
            <br />
            <br />
           The tables will also have more space in between them, and we encourage you to go back to your classroom when eating lunch, to make sure the social distancing is being kept. 

            <br />
          </p>
        </v-col>
<!-----------------------------

    2. In the classrooms

-------------------------------->
        

        <v-col md="6" sm="12">
          <h1 class="my-12 primary--text" style="font-size:32px;">2. in the classrooms</h1>
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
    There will be more space in between the tables, to make sure you and your fellow classmates can keep a safe distance. 

          </p>
        </v-col>
        
<!-----------------------------

3. At the bar

-------------------------------->
        

        <v-col md="6" sm="12">
          <h1 class="my-12 primary--text" style="font-size:32px;">3. At the bar</h1>
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
            Just as in the classroom, you need to keep a certain distance. 
            There will be more space in between the tables, to make sure you keep the social distance.
          <br>
          We also require you to sit with at least 1 meter a part from each other. 
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