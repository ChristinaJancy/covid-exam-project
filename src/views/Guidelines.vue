<template>
  <div id="guidelines" class="about text-center">
    <section id="stats">
      <v-parallax
        :height="$vuetify.breakpoint.smAndDown ? 400 : 300"
        src="../assets/guidelines/background1.jpg"
      >
        <v-container fill-height>
          <v-row class="mx-auto" style="margin: 0 auto; padding: 0 auto;">
            <v-col cols="12">
              <div class="text-center">
                <div class="display-3 font-weight-black mb-4">Guidelines</div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </section>
    <h3
      class="pt-5 mx-10"
    >You can reduce your chances of being infected or spreading COVID-19 by taking some simple precautions:</h3>
    <section style="line-height:40px;">
      <v-row style="margin: 0 auto; padding: 0 auto;">
        
<!-----------------------------

    1. Wash your hands

-------------------------------->
        <v-col sm="12" md="6">
          <h1 class="my-12 primary--text">1. Wash your hands</h1>
          <v-img
            max-height="500"
            class="mx-auto"
            style="width:calc(100% - 80px);"
            src="https://image.freepik.com/free-vector/washing-hands-with-soap-bathroom_23-2148498584.jpg"
          ></v-img>
        </v-col>

        <v-col md="6" sm="12" class="my-auto">
          <br />
          <p class="pt-5 mx-10 text-left">
            Wash your hands, always with soap and water for at least 20 seconds. It is good to also regularly use hand sanitizer when not being able to wash your hands.
            <br />
            <br />
            <b class="primary--text">You should wash your hands...</b>
            <br />
          </p>
          <div class="text-left mx-10">
            <li>after coughing or sneezing</li>
            <li>before, during and after you prepare food</li>
            <li>after toilet use</li>
            <li>After handling animals</li>
          </div>
        </v-col>
<!---------- 

    2. Avoid touching eyes, nose and mouth

-------->
        <v-col sm="12" md="6">
          <h1 class="my-12 primary--text">2. Avoid touching eyes, nose and mouth</h1>
          <v-img
            class="mx-auto"
            max-height="500"
            style="width:calc(100% - 80px);"
            src="https://image.freepik.com/free-vector/coronavirus-protection-by-avoid-touching-eyes-nose-mouth-fight-covid-19_40876-1760.jpg"
          ></v-img>
        </v-col>
        <v-col sm="12" md="6" class="my-auto">
          <p class="pt-5 mx-10 text-left" style="font-size:20px; line-height:200%;">
            Hands touch many surfaces and can pick up viruses.
            <br />Once contaminated, hands can transfer the virus to your eyes, nose or mouth.
            <br />From there, the virus can enter your body and infect you.
          </p>
        </v-col>

<!---------------------

    3. Maintain social distancing

--------------------->
        <v-col sm="12" md="6">
          <h1 class="my-12 primary--text">3. Maintain social distancing</h1>
          <v-img
            class="mx-auto"
            max-height="500"
            style="width:calc(100% - 80px);"
            src="../assets/guidelines/distance.jpg"
          ></v-img>
        </v-col>
        <v-col sm="12" md="6" class="my-auto">
          <p class="pt-5 mx-10 text-left" style="font-size:20px; line-height:200%;">
           Maintain at least 1 metre distance yourself and others.
           <br> <br>
When someone coughs, sneezes, or speaks they spray small liquid droplets from their nose or mouth which may contain virus. 
<br>
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
@media screen and (max-width: 700px) {
  #guidelines {
    margin-top: -80px;
  }
}
</style>