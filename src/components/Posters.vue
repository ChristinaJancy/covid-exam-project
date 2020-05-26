<template>
  <v-card flat tile class="mx-auto">
    <v-tabs v-model="tab" background-color="primary" centered dark icons-and-text>
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">English</v-tab>

      <v-tab href="#tab-2">Danish</v-tab>
    </v-tabs>
    <p>
      <em>
        On mobile, swipe left/right to switch between languages.
        <br />
      </em>
    </p>
    <v-tabs-items v-model="tab">
      <!-- English posters -->
      <v-tab-item value="tab-1">
        <v-card flat>
          <v-row class="pa-0 ma-0">
            <!--------------------------------------

                      KEEP DISTANCE

            ------------------------------------------->
            <v-col md="4" sm="12">
              <h1 class="primary--text">KEEP DISTANCE</h1>
              <v-responsive class="mx-auto" width="56">
                <v-divider class="mb-1"></v-divider>
                <v-divider></v-divider>
              </v-responsive>

              <v-img
                @click="overlay1 = !overlay1"
                max-height="500"
                contain
                class="mx-auto poster"
                style="width:calc(100% - 80px);"
                src="../assets/rules/cafeteria-poster.png"
              ></v-img>

              <!----- Overlay  ----->
              <v-overlay class="mx-auto" max-width="90%" max-height="90%" :value="overlay1">
                <v-img
                  max-width="90vw"
                  max-height="90vh"
                  contain
                  class="mx-auto"
                  src="../assets/rules/cafeteria-poster.png"
                ></v-img>

                <v-btn icon x-large @click="overlay1 = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-overlay>
              <!-- -->

              <a
                class
                href="https://firebasestorage.googleapis.com/v0/b/portfolio-708bc.appspot.com/o/posterdesign-main.png?alt=media&token=19d5db26-d81e-46fe-8452-66022c251a25"
                target="_blank"
              >Download (opens new tab)</a>
            </v-col>

            <!--------------------------------------

                    WASH HANDS

            ------------------------------------------->
            <v-col md="4" sm="12">
              <h1 class="primary--text">WASH YOUR HANDS</h1>
              <v-responsive class="mx-auto" width="56">
                <v-divider class="mb-1"></v-divider>
                <v-divider></v-divider>
              </v-responsive>
              <v-img
                max-height="500"
                @click="overlay2 = !overlay2"
                contain
                class="mx-auto poster"
                style="width:calc(100% - 80px);"
                src="../assets/rules/bathroom-poster.png"
              ></v-img>
              <v-overlay class="mx-auto" max-width="90%" max-height="90%" :value="overlay2">
                <v-img
                  max-width="90vw"
                  max-height="90vh"
                  contain
                  class="mx-auto"
                  src="../assets/rules/bathroom-poster.png"
                ></v-img>

                <v-btn icon x-large @click="overlay2 = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-overlay>
              <div>
                <a
                  class
                  href="https://firebasestorage.googleapis.com/v0/b/portfolio-708bc.appspot.com/o/bathroom-poster.png?alt=media&token=b015e532-d3f9-40db-8642-3e10028ee515"
                  target="_blank"
                >Download (opens new tab)</a>
              </div>
            </v-col>

            <!--------------------------------------

                      STAY SAFE

            ------------------------------------------->
            <v-col md="4" sm="12">
              <h1 class="primary--text">STAY SAFE</h1>
              <v-responsive class="mx-auto" width="56">
                <v-divider class="mb-1"></v-divider>
                <v-divider></v-divider>
              </v-responsive>
              <v-img
                max-height="500"
                contain
                @click="overlay3 = !overlay3"
                class="mx-auto poster"
                style="width:calc(100% - 80px);"
                src="../assets/rules/posterdesign-main.png"
              ></v-img>
              <v-overlay class="mx-auto" max-width="90%" max-height="90%" :value="overlay3">
                <v-img
                  max-width="90vw"
                  max-height="90vh"
                  contain
                  class="mx-auto"
                  src="../assets/rules/posterdesign-main.png"
                ></v-img>

                <v-btn icon x-large @click="overlay3 = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-overlay>
              <a
                class
                href="https://firebasestorage.googleapis.com/v0/b/portfolio-708bc.appspot.com/o/posterdesign-main.png?alt=media&token=19d5db26-d81e-46fe-8452-66022c251a25"
                target="_blank"
              >Download (opens new tab)</a>
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>

      <!-- Danish posters -->
      <v-tab-item value="tab-2">
        <v-card flat>
          <v-row class="pa-0 ma-0">
            <!--------------------------------------

                     HOLD FYSISK AFSTAND

            ------------------------------------------->
            <v-col md="4" sm="12">
              <h1 class="primary--text">HOLD FYSISK AFSTAND</h1>
              <v-responsive class="mx-auto" width="56">
                <v-divider class="mb-1"></v-divider>
                <v-divider></v-divider>
              </v-responsive>
              <v-img
                max-height="500"
                contain
                @click="overlay4 = !overlay4"
                class="mx-auto poster"
                style="width:calc(100% - 80px);"
                src="../assets/rules/cafeteria-posterDAN.png"
              ></v-img>
              <v-overlay class="mx-auto" max-width="90%" max-height="90%" :value="overlay4">
                <v-img
                  max-width="90vw"
                  max-height="90vh"
                  contain
                  class="mx-auto"
                  src="../assets/rules/cafeteria-posterDAN.png"
                ></v-img>

                <v-btn icon x-large @click="overlay4 = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-overlay>
              <a
                class
                href="https://firebasestorage.googleapis.com/v0/b/portfolio-708bc.appspot.com/o/cafeteria-posterDAN.png?alt=media&token=da426986-6f53-4ac7-827d-89adb5557541"
                target="_blank"
              >Download(åbner ny fane)</a>
            </v-col>
            <!---------------------------------------------

                      VASK DINE HÆNDER

            ----------------------------------------------->
            <v-col md="4" sm="12">
              <h1 class="primary--text">VASK DINE HÆNDER</h1>
              <v-responsive class="mx-auto" width="56">
                <v-divider class="mb-1"></v-divider>
                <v-divider></v-divider>
              </v-responsive>

              <v-img
                max-height="500"
                contain
                @click="overlay5 = !overlay5"
                class="mx-auto poster"
                style="width:calc(100% - 80px);"
                src="../assets/rules/bathroom-posterDAN.png"
              ></v-img>
              <v-overlay class="mx-auto" max-width="90%" max-height="90%" :value="overlay5">
                <v-img
                  max-width="90vw"
                  max-height="90vh"
                  contain
                  class="mx-auto"
                  src="../assets/rules/bathroom-posterDAN.png"
                ></v-img>

                <v-btn icon x-large @click="overlay5 = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-overlay>
              <a
                class
                href="https://firebasestorage.googleapis.com/v0/b/portfolio-708bc.appspot.com/o/bathroom-posterDAN.png?alt=media&token=1b63e7bc-0213-4711-94f8-5ecc6d4136bb"
                target="_blank"
              >Download(åbner ny fane)</a>
            </v-col>

            <!-------------------------------------------------------

                    PAS PÅ DIG SELV

            --------------------------------------------------------->
            <v-col md="4" sm="12">
              <h1 class="primary--text">PAS PÅ SIG SELV</h1>
              <v-responsive class="mx-auto" width="56">
                <v-divider class="mb-1"></v-divider>
                <v-divider></v-divider>
              </v-responsive>
              <v-img
                max-height="500"
                contain
                @click="overlay6 = !overlay6"
                class="mx-auto poster"
                style="width:calc(100% - 80px);"
                src="../assets/rules/posterdesign-mainDAN.png"
              ></v-img>
              <v-overlay class="mx-auto" max-width="90%" max-height="90%" :value="overlay6">
                <v-img
                  max-width="90vw"
                  max-height="90vh"
                  contain
                  class="mx-auto"
                  src="../assets/rules/posterdesign-mainDAN.png"
                ></v-img>

                <v-btn icon x-large @click="overlay6 = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-overlay>
              <a
                class
                href="https://firebasestorage.googleapis.com/v0/b/portfolio-708bc.appspot.com/o/posterdesign-mainDAN.png?alt=media&token=9df08b92-9da3-48b2-9bba-bc9ca92956da"
                target="_blank"
              >Download (åbner ny fane)</a>
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>


<script scoped>
export default {
  components: {
    //
  },
  data() {
    return {
      tab: null,
      overlay1: false,
      overlay2: false,
      overlay3: false,
      overlay4: false,
      overlay5: false,
      overlay6: false
    };
  }
};
</script> 