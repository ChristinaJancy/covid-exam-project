<template>
  <section>
    <v-sheet id="contact" color="white" class="mx-auto" tag="section" tile max-width="800">
      <div class="py-5"></div>

      <v-container>
     
        <h4
          class="font-weight-bold mb-3 text-uppercase text-center black--text"
          style="font-size:35px"
        >{{$t('contact.intro')}}
        </h4>
        <p class="text-center font-weight-bold">
          If you have any questions, feel free to mail us.
        </p>
<div class="text-center">
       <a
          href="mailto:educovid@outlook.com"
          class="primary--text font-weight-bold"
        >educovid@outlook.com</a>
        </div>

        <v-responsive class="mx-auto mb-12" width="56">
          <v-divider class="mb-1"></v-divider>
          <v-divider></v-divider>
        </v-responsive>

        <v-theme-provider light>
          <v-row>
            <v-col md="6" sm="12" align="center">
              <div class="mx-12 my-10">
                <v-img width="auto" max-width="420" src="../assets/icons/contactus-alone.png"></v-img>
              </div>
            </v-col>
                  
            <v-form v-model="valid" class="mx-auto">
              <v-container>
                <v-row>
                  <v-col sm="12">
                    <v-col cols="12">
                      <v-text-field
                        style="margin-top: -20%;"
                        outlined
                        v-model="firstname"
                        :rules="nameRules"
                        :counter="12"
                        label="First name"
                        required
                        rounded
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                        style="margin-top: -10%;"
                        outlined
                        v-model="lastname"
                        :rules="nameRules"
                        :counter="12"
                        label="Last name"
                        required
                        rounded
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                        style="margin-top: -10%;"
                        outlined
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                        rounded
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        outlined
                        rounded
                        name="input-7-4"
                        label="Your question(s)..."
                        style="margin-top: -10%;"
                      ></v-textarea>
                    </v-col>
                  </v-col>
                </v-row>
              </v-container>

              <v-col class="mx-auto" cols="auto">
                <v-btn
                  rounded
                  color="icons"
                  large
                  width="300"
                  class="white--text"
                  style="margin-top: -30%; font-size:15px;"
                >
                  <h2>{{$t('contact.button')}}</h2>
                </v-btn>
              </v-col>
            </v-form>
          </v-row>
        </v-theme-provider>
      </v-container>

      <div class="py-12"></div>
    </v-sheet>
  </section>
</template>


<script>
export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 12 || "Name must be less than 12 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  })
};
</script>