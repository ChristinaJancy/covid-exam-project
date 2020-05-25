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
   
   <!-- <br />
     <v-col cols="12">
                  <div style="padding-right:20%;padding-left:20%;">
                  <v-text-field light label="Search.." 
                  filled 
                  rounded 
                  solo
                  outlined 
                  background-color="white"
                  dense
                  prepend-inner-icon="mdi-magnify"
                  clearable
                  >
                  </v-text-field>
                  </div>
                </v-col>
                -->
    <h3 class="pt-5 mx-10">Here you can see all daily updates connected to educational institutions.

    </h3>
    <section style="line-height:40px;">

     <!-- <v-row style="margin: 0 auto; padding: 0 auto;" align="center">

<v-card class="mx-auto">
    <v-card-title>
      All Daily updates
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
       label="Search (UPPER CASE ONLY)"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
<h3>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
</h3>
  </v-card>
      </v-row> -->

      <v-container fluid>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar
          dark
          color="primary"
          class="mb-1"
        >
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              solo-inverted
              hide-details
              :items="keys"
              prepend-inner-icon="mdi-magnify"
              label="Sort by"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle
              v-model="sortDesc"
              mandatory
            >
              <v-btn
                large
                depressed
                color="icons"
                :value="false"
              >
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn
                large
                depressed
                color="icons"
                :value="true"
              >
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="12"
            md="12"
            lg="12"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">{{ item.name }}</v-card-title>

              <v-divider></v-divider>

              <v-list dense style="text-align:left;">
                <v-list-item
                  v-for="(key, index) in filteredKeys"
                  :key="index"
                >
                  <v-list-item-content :class="{ 'blue--text': sortBy === key }">{{ key }}:</v-list-item-content>
                  <v-list-item-content class="align-end" :class="{ 'blue--text': sortBy === key }">{{ item[key.toLowerCase()] }}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                dark
                text
                color="primary"
                class="ml-2"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span
            class="mr-4
            grey--text"
          >
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            fab
            dark
            color="icons"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            color="icons"
            class="ml-1"
            @click="nextPage"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
    </section>
 </div>
</template>

  

<script>
  export default {
    data () {
      return {
        itemsPerPageArray: [4, 8, 12],
        search: '',
        filter: {},
        sortDesc: false,
        page: 1,
        itemsPerPage: 4,
        sortBy: '>Date',
        keys: [
          'Date',
          'Name',
          'Content',
          
        ],
        items: [
          {
            name: 'Stage 2 opening of Denmark',
            date: "21st May",
            content: "Stage 2 - Higher education can conduct oral exams physically as well as teaching activities that require physical attendance, from May 27th.",
           
          },
          {
                name: 'Get tested for Corona',
            date: "18th May",
            content: "Adults can now and in the future book a time to get corona tested, without a referral from their own doctor. The 18-25 yar olds got a head start to book a time starting Monday 18th. ",
          },
                    {
                name: 'Stage 1 Opening of Denmark',
            date: "6th April",
            content: "Prime Minister Mette Frederiksen announced how the first phase of the reopening of Denmark may proceed after the closure as a result of COVID-19, 15th April. So far: Elementary schools: 0-5. grade, secondary education 3rd and 2nd grade classes, and care arrangements. Still no date when it comes to higher educations.",
          },
                              {
                name: 'Stage 1 Opening of Denmark',
            date: "6th April",
            content: "Prime Minister Mette Frederiksen announced how the first phase of the reopening of Denmark may proceed after the closure as a result of COVID-19, 15th April. So far: Elementary schools: 0-5. grade, secondary education 3rd and 2nd grade classes, and care arrangements. Still no date when it comes to higher educations.",
          },
                              {
                name: 'Stage 1 Opening of Denmark',
            date: "6th April",
            content: "Prime Minister Mette Frederiksen announced how the first phase of the reopening of Denmark may proceed after the closure as a result of COVID-19, 15th April. So far: Elementary schools: 0-5. grade, secondary education 3rd and 2nd grade classes, and care arrangements. Still no date when it comes to higher educations.",
          },
                              {
                name: 'Stage 1 Opening of Denmark',
            date: "6th April",
            content: "Prime Minister Mette Frederiksen announced how the first phase of the reopening of Denmark may proceed after the closure as a result of COVID-19, 15th April. So far: Elementary schools: 0-5. grade, secondary education 3rd and 2nd grade classes, and care arrangements. Still no date when it comes to higher educations.",
          },
                              {
                name: 'Stage 1 Opening of Denmark',
            date: "6th April",
            content: "Prime Minister Mette Frederiksen announced how the first phase of the reopening of Denmark may proceed after the closure as a result of COVID-19, 15th April. So far: Elementary schools: 0-5. grade, secondary education 3rd and 2nd grade classes, and care arrangements. Still no date when it comes to higher educations.",
          },

        ],
      }
    },
    computed: {
      numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      },
      filteredKeys () {
        return this.keys.filter(key => key !== `Name`)
      },
    },
    methods: {
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },
    },
  }
</script>




<!-- 
<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Date',
            align: 'start',
            sortable: false,
            value: 'date',
          },
          { text: 'Update', value: 'name' },
          { text: 'Content', value: 'content' },
          { text: 'Valid from', value: 'valid' },
        ],
        desserts: [
          {
            name: 'Stage 2 opening',
            date: "21st May",
            content: "Stage 2 - Higher education can conduct oral exams physically as well as teaching activities that require physical attendance, from May 27th.",
            valid: "27th May"
          },
          {
            name: 'COVID TEST ',
            date: "18th May",
            content: "Adults can now and in the future book a time to get corona tested, without a referral from their own doctor. The 18-25 yar olds got a head start to book a time starting Monday 18th. ",
            valid: "18th May"
          },
          {
            name: 'Eclair',
             date: 262,
             content: 16.0,

          },
          {
            name: 'Cupcake',
             date: 305,
             content: 3.7,

          },
          {
            name: 'Gingerbread',
            date: 356,
             content: 16.0,

          },
        ],
      }
    },
  }
</script> 
-->

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

