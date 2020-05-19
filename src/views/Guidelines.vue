<template>
  <div id="guidelines" class="about text-center">
    <h1 class="pt-5">Guidelines</h1>
    <!-- search bar-->
     <div class="search-wrapper">
    <input type="text" v-model="search" placeholder="Search here.."/>
    <v-icon>mdi-magnify</v-icon>
        <label></label>
  </div>
    <p
      class="pt-5"
    >You can reduce your chances of being infected or spreading COVID-19 by taking some simple precautions:</p>

    <v-container fluid>
      <v-row class="mx-6 pa-0 ma-0">
        <v-col md="3" sm="6">
          <v-img
            src="https://via.placeholder.com/150"
            gradient="to top right, rgba(25,32,72,.7), rgba(25,32,72,.7)"
          ></v-img>
          <h1 class="black--text">Poster</h1>
        </v-col>

        <v-col md="3" sm="6">
          <v-img src="https://via.placeholder.com/150"
          gradient="to top right, rgba(25,32,72,.7), rgba(25,32,72,.7)"></v-img>
          <h1 class="black--text">Poster</h1>
        </v-col>

        <v-col md="3" sm="6">
          <v-img src="https://via.placeholder.com/150"
          gradient="to top right, rgba(25,32,72,.7), rgba(25,32,72,.7)"></v-img>
          <h1 class="black--text">Poster</h1>
        </v-col>
        <v-col sm="6" md="3">
          <v-img src="https://via.placeholder.com/150"
          gradient="to top right, rgba(25,32,72,.7), rgba(25,32,72,.7)"></v-img>
          <h1 class="black--text">Poster</h1>
          <br />
          <br />
          <br />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<style lang="scss" scoped>

 @media screen and (max-width: 700px) {
    #guidelines{
   margin-top:-110px;
    }   
 } 
</style>