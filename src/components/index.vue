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

						<h1>Blood Request</h1>

						<div class="progress">
							<a href='/'>
							  <div class="circle active">
							    <span class="label"></span>
							    <span class="title">Profile</span>
							  </div>
							</a>
						  <span class="bar"></span>
							<a href='/lab_exam'>
							  <div class="circle">
							    <span class="label"></span>
							    <span class="title">Lab</span>
							  </div>
							</a>
						  <span class="bar"></span>
							<a href='/suggestion'>
							  <div class="circle">
							    <span class="label"></span>
							    <span class="title">Request</span>
							  </div>
							</a>
						</div>
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
	          <v-btn block class='bg__mdteal' dark>Medical Record</v-btn>
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
												เคยได้รับเลือดมาก่อน
												<v-layout row>
													<v-flex xs6>
														<v-radio-group v-model="ex8" :mandatory="false">
								              <v-radio label="ไม่เคย" value="radio-1"></v-radio>
								              <v-radio label="เคย เมื่อ" value="radio-2"></v-radio>
								            </v-radio-group>
													</v-flex>
													<v-flex xs6>
														<br><br>
														<v-menu
											        lazy
											        :close-on-content-click="false"
											        v-model="menu2"
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
											          v-model="dateFormatted2"
											          prepend-icon="event"
											          @blur="date = parseDate(dateFormatted)"
											        ></v-text-field>
											        <v-date-picker v-model="date" @input="dateFormatted2 = formatDate($event)" no-title scrollable actions>
											          <template slot-scope="{ save, cancel }">
											            <v-card-actions>
											              <v-spacer></v-spacer>
											              <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
											              <v-btn flat color="primary" @click="save">OK</v-btn>
											            </v-card-actions>
											          </template>
											        </v-date-picker>
											      </v-menu>
													</v-flex>
												</v-layout>


											</v-card>
						        </v-card>
						      </v-flex>

									<v-flex text-xs-left>
						        <v-card>
						          <v-btn block>Diagnosis</v-btn>
											<v-card class='pa-2'>
												สาเหตุของความต้องการเลือด / Diagnosis
												<v-flex>
													<v-select
							              v-bind:items="items"
							              v-model="e1"
							              label="Select Diagnosis"
							              single-line
							              bottom
							            ></v-select>
							          </v-flex>
											</v-card>
						        </v-card>
						      </v-flex>

									<v-flex text-xs-left>
						        <v-card>
						          <v-btn block>Date Use</v-btn>
											<v-card class='pa-2'>
												วันที่ต้องการใช้เลือด
												<v-layout row>
													<v-flex xs6>
														<v-radio-group v-model="ex8" :mandatory="false">
								              <v-radio label="ทันที" value="radio-1"></v-radio>
								              <v-radio label="จองใช้เมื่อ" value="radio-2"></v-radio>
								            </v-radio-group>
													</v-flex>
													<v-flex xs6>
														<br><br>
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
													</v-flex>
												</v-layout>


											</v-card>
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
							<a href='/lab_exam' style='text-decoration: none !important;'>
		           <v-btn color="error" dark large>Next</v-btn>
						 </a>
		        </div>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </v-content>

    <app-footer></app-footer>

  </v-app>
</template>

<script>
	/* eslint-disable */

  import AppFooter from '@/components/common/Footer.vue'

  export default {
    components: {
      AppFooter
    },
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
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


<style lang="scss">
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

  /* Form Progress */

  .progress {
    margin: 20px auto;
    text-align: center;
    .circle {
      display: inline-block;
      background: #fff;
      width: 28px;
      height: 28px;
      border-radius: 40px;
      border: 1px solid #d5d5da;
    }
    .bar {
      display: inline-block;
      background: #fff;
      width: 28px;
      height: 28px;
      border-radius: 40px;
      border: 1px solid #d5d5da;
      position: relative;
      width: 200px;
      height: 6px;
      top: -33px;
      margin-left: -5px;
      margin-right: -5px;
      border-left: none;
      border-right: none;
      border-radius: 0;
    }
    .circle {
      .label {
        display: inline-block;
        width: 20px;
        height: 20px;
        line-height: 32px;
        border-radius: 32px;
        margin-top: 3px;
        color: #b5b5ba;
        font-size: 17px;
      }
      .title {
        color: #b5b5ba;
        font-size: 13px;
        line-height: 30px;
      }
    }
    .bar.done, .circle.done {
      background: #eee;
    }
    .bar.active {
      background: linear-gradient(to right, #EEE 40%, #FFF 60%);
    }
    .circle {
      &.done {
        .label {
          color: #FFF;
          background: #8bc435;
          box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.2);
        }
        .title {
          color: #444;
        }
      }
      &.active {
        .label {
          color: #FFF;
          background: #0c95be;
          box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.2);
        }
        .title {
          color: #0c95be;
        }
      }
    }
  }
</style>
