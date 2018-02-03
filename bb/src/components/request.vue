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
						<h1>Blood Request</h1>
						<br>
	          <v-btn block>Recipient Profile</v-btn>
						<v-card>
					    <v-card-title>
								<v-text-field
					        append-icon="search"
					        label="Pet Name, H.N., Owner, Address"
					        single-line
					        hide-details
					        v-model="search"
					      ></v-text-field>
								<v-btn
						      color="grey"
						      class="white--text"
						    >
									<v-icon dark>add</v-icon>
						      Add New Pet
						    </v-btn>
					      <v-spacer></v-spacer>
					    </v-card-title>
						</v-card>
						<br>
	          <v-btn block color="secondary" dark>Medical Record</v-btn>
						<v-container grid-list-md text-xs-center>
					    <v-layout row wrap>
					      <v-flex xs6>
					        <v-card>
					          <v-btn block>Physical Exam</v-btn>
										<v-flex>
											<v-layout row>
					              <v-text-field
					                name="input-1"
					                label="Weight (kg.)"
					                textarea
													rows=3
													class='pa-2'
					              ></v-text-field>
												<v-text-field
					                name="input-1"
					                label="Temp (F)"
					                textarea
													rows=3
													class='pa-2'
					              ></v-text-field>
												<v-text-field
					                name="input-1"
					                label="HR (bmp)"
					                textarea
													rows=3
													class='pa-2'
					              ></v-text-field>
											</v-layout>
											<v-layout row>
					              <v-text-field
					                name="input-1"
					                label="RR (tpm)"
					                textarea
													rows=3
													class='pa-2'
					              ></v-text-field>
												<v-text-field
					                name="input-1"
					                label="CRT (Sec)"
					                textarea
													rows=3
													class='pa-2'
					              ></v-text-field>
												<v-text-field
					                name="input-1"
					                label="BP (mmHg)"
					                textarea
													rows=3
													class='pa-2'
					              ></v-text-field>
											</v-layout>
				            </v-flex>
					        </v-card>
					      </v-flex>
								<v-flex xs6>
									<v-flex text-xs-left>
						        <v-card>
						          <v-btn block>History Taking</v-btn>
											<v-card class='pa-2'>
												<v-radio-group v-model="ex8" :mandatory="false">
						              <v-radio label="ไม่เคยได้รับเลือดมาก่อน" value="radio-1"></v-radio>
						              <v-radio label="เคยได้รับเลือดมาก่อน" value="radio-2"></v-radio>
						            </v-radio-group>
												<v-menu
									        lazy
									        :close-on-content-click="false"
									        v-model="menu"
									        transition="scale-transition"
									        offset-y
									        full-width
									        :nudge-right="40"
									        max-width="290px"
									        min-width="290px"
									      >
									        <v-text-field
									          slot="activator"
									          label="Date in M/D/Y"
									          v-model="dateFormatted"
									          prepend-icon="event"
									          @blur="date = parseDate(dateFormatted)"
									        ></v-text-field>
									        <v-date-picker v-model="date" @input="dateFormatted = formatDate($event)" no-title scrollable actions>
									          <template slot-scope="{ save, cancel }">
									            <v-card-actions>
									              <v-spacer></v-spacer>
									              <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
									              <v-btn flat color="primary" @click="save">OK</v-btn>
									            </v-card-actions>
									          </template>
									        </v-date-picker>
									      </v-menu>
											</v-card>
						        </v-card>
						      </v-flex>
									<v-flex>
						        <v-card>
						          <v-btn block>Diagnosis</v-btn>
											เคยได้รับเลือดมาก่อน
						        </v-card>
						      </v-flex>
									<v-flex>
										<v-card>
											<v-btn block>Date Use</v-btn>
											เคยได้รับเลือดมาก่อน
										</v-card>
									</v-flex>
									<v-flex text-xs-left>
						        <v-card>
						          <v-btn block>Note</v-btn>
											<v-card class='pa-2'>
												ความคิดเห็นอื่นๆ
												<v-flex>
							            <v-text-field
							              name="vet_comment"
							              label="บันทึกเพิ่มเติม"
							              multi-line
							            ></v-text-field>
							          </v-flex>
											</v-card>
						        </v-card>
						      </v-flex>
					      </v-flex>
					    </v-layout>
					  </v-container>
						<br>
						<br>
						<div class="text-xs-center">
							<a href='#/lab_exam' style='text-decoration: none !important;'>
		           <v-btn color="error" dark large>Next</v-btn>
						 </a>
		        </div>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>

  </v-app>
</template>

<script>
	/* eslint-disable */
  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
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
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'iTaam CRM tools for Animal Hospital',
				max25chars: (v) => v.length <= 25 || 'Input too long!',
        tmp: '',
        search: '',
        pagination: {},
				lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
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
      }
    }
  }
</script>


<style>
	.color__mdred {
		color: #df5249 !important;
	}
	.navbar {
		background-color: #df5249 !important;
		color: white;
	}
/* html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, Arial, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
} */
</style>
