<template>
  <v-app light id="inspire">
		<v-navigation-drawer
      fixed
      :clipped="$vuetify.breakpoint.width > 1264"
      v-model="drawer"
      app
    >
      <v-list>
				<v-list>
          <v-list-tile v-for="item in items2" :key="item.text" avatar @click="">
            <v-list-tile-avatar>
              <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt="">
            </v-list-tile-avatar>
            <v-list-tile-title v-text="item.text"></v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-list-tile v-for="item in items" :key="item.text" @click="">
          <v-list-tile-action class="grey--text darken-4">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="black--text">
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon color="grey darken-1">settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Settings</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>


    <v-toolbar app class="navbar white--text">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="white--text"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

		<v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
					<v-layout column align-left>
						<v-breadcrumbs>
				      <v-icon slot="divider">chevron_right</v-icon>
				      <v-breadcrumbs-item
				        v-for="item in breadcrumbs" :key="item.text"
				        :disabled="item.disabled"
				      >
				        {{ item.text }}
				      </v-breadcrumbs-item>
				    </v-breadcrumbs>

						<h1>Blood Request Board</h1>
            <br>
            <v-container grid-list-md text-xs-center>
              <v-layout row wrap>
                <v-flex xs3>
                  <v-card dark color="secondary">
                    <v-card-text class="px-0 caption_task">New Request</v-card-text>
                    <span class='stat_task'>2</span>
                  </v-card>
                </v-flex>
                <v-flex xs3>
                  <v-card dark color="secondary">
                    <v-card-text class="px-0 caption_task">Crossmatch Stage</v-card-text>
                    <span class='stat_task'>6</span>
                  </v-card>
                </v-flex>
                <v-flex xs3>
                  <v-card dark color="secondary">
                    <v-card-text class="px-0 caption_task">จ่ายถุงเลือดแล้ววันนี้</v-card-text>
                    <span class='stat_task'>5/9</span>
                  </v-card>
                </v-flex>
                <v-flex xs3>
                  <v-card dark color="secondary">
                    <v-card-text class="px-0 caption_task">Today in Process</v-card-text>
                    <span class='stat_task'>15</span>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>

          </v-layout>
        </v-slide-y-transition>

        <br>
        <v-layout row wrap>
          <v-spacer></v-spacer>
          <v-text-field
            append-icon="search"
            label="Search by name"
          ></v-text-field>
          <v-btn
            color="grey"
            class="white--text"
          >
            <v-icon dark>add</v-icon>
            New Request
          </v-btn>
        </v-layout>
        <br>
        <br>
        <v-card>
          <v-card-actions>
            <v-container grid-list-md text-xs-center>
              <v-layout row wrap>
                <v-flex xs2>
                  <v-card class='custom_card'>
                    <v-card-text class="px-0 text_grey">
                      Request Date
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs2>
                  <v-card class='custom_card'>
                    <v-card-text class="px-0 text_grey">
                      Recipient
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs2>
                  <v-card class='custom_card'>
                    <v-card-text class="px-0 text_grey">
                      Owner
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs2>
                  <v-card class='custom_card'>
                    <v-card-text class="px-0 text_grey">
                      Product
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs2>
                  <v-card class='custom_card'>
                    <v-card-text class="px-0 text_grey">
                      From
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs2>
                  <v-card class='custom_card'>
                    <v-card-text class="px-0 text_grey">
                      Use Date
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
            <br><br>
            <v-btn>See Details</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click.native="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-slide-y-transition>
            <v-card-text v-show="show">
              test expand
            </v-card-text>
          </v-slide-y-transition>
        </v-card>

      </v-container>
    </v-content>

    <app-footer></app-footer>

  </v-app>
</template>

<script>
	/* eslint-disable */

  import AppFooter from '@/components/common/Footer.vue'
  import axios from 'axios'

  export default {
    components: {
      AppFooter
    },
    data () {
      return {
        postBody: '',
        errors: [],
        clipped: false,
        drawer: false,
        clipped: false,
				breadcrumbs: [
          {
            text: 'การเก็บเลือด',
            disabled: false
          },
          {
            text: 'การบริจาคเลือด',
            disabled: true
          }
        ],
				items: [
					{ title: 'Dashboard', icon: 'dashboard' },
          { title: 'Do it now!', icon: 'extension' },
          { title: 'Statistic', icon: 'trending_up' },
          { title: 'Email', icon: 'email' },
          { title: 'Social', icon: 'message' }
        ],
	      items2: [
	        { picture: 28, text: 'โรงพยาบาลสัตว์ สวนผัก' }
	      ],
				date: null,
	      dateFormatted: null,
	      menu: false,
				date2: null,
	      dateFormatted2: null,
	      menu2: false,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Smart Pet Blood Bank',
        show: false,
      }
    },
		methods: {
      formatDate (date) {
        if (!date) {
          return null
        }

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) {
          return null
        }

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    }
  }
</script>


<style lang="scss">
  $grey_line: #979797;

  .text_grey{
    color: $grey_line;
  }
  .color__mdred {
    color: #df5249 !important;
  }

  .bg__mdteal {
    background-color: #5c9ba4 !important;
  }

  .navbar {
    background-color: #df5249 !important;
    color: white;
  }
  a{
    text-decoration: none;
  }

  .stat_task{
    font-size: 3em;
    font-weight: bold;
  }
  .caption_task{
    font-size: 1.4em;
    font-weight: bold;
  }
  .custom_card{
    box-shadow: 0px 0px 0px 0px !important;
    border-right: 1px solid $grey_line;
  }

</style>
