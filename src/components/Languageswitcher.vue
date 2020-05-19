<template>
  <!-- 
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          dark
          small
          v-on="on"
        >
         Languages
        </v-btn>
      </template>
        <v-list >

<a href="#" @click.prevent="setLocale('en')">
        <v-list-item >
             <v-list-item-avatar>
              <v-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/255px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png"></v-img>
            </v-list-item-avatar>
          <v-list-item-title>English</v-list-item-title>
        </v-list-item>
</a>
<a href="#" @click.prevent="setLocale('da')">
        <v-list-item @click.prevent="setLocale('da')">
             <v-list-item-avatar>
              <v-img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQIAAADDCAMAAABeUu/HAAAAQlBMVEXGDDD////LKEXGCS7EACPeiJTFACfYa3votLnDABz78PLKHj7ab4D++Pn99ffnrbXJEzjDABfWZnbBAAbx0dXdgo49nsQuAAABjElEQVR4nO3ax21DQRAFwR55R1I2/1SlBEgd/hIQoeoE3qKus10t7/ll93Ss/eF1/eDGul7e3f0c7+Fx/eDGWt8vBGdY/HMhQIAgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQgBCEIQRdIcLO8t/dTBB/rBzfW7foOJwg+v84wuK1OPPefhAABgkEwCAbBIBgEg2AQDIJBMAgGwSAYBINgEAyCQTAIBsEgGASDYBD85KZ467J8c4Zz/cX9L1gfAgQIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEHSBBNfL+4Vg/eDGulre88vu6Vj7w+v6wY19AwdEXBVnogT9AAAAAElFTkSuQmCC"></v-img>
            </v-list-item-avatar>
          <v-list-item-title>Danish</v-list-item-title>
        </v-list-item>
        </a>
      </v-list>
    </v-menu>
  </div>

  -->
  <div class="locale-changer">
 <p align="right">
      {{$t('nav.language')}}
      
      
      <b class="router-links">
        <select v-model="$i18n.locale">
          <option
            v-for="(lang, i) in langs"
            :key="`Lang${i}`"
            :value="lang"
          >
          
          {{ lang }}
          </option>
        </select>
      </b>
      </p>
   
  </div>
</template>

<script>
export default {
  name: "locale-changer",
  data() {
    return {
      langs: ["en", "da"]
    };
  },

  setLocale(locale) {
    this.$i18n = locale;
  }
};
</script>