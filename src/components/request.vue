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
        <v-list-tile v-for="item in items" :key="item.text" @click="route(item.link)">
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

            <h1 style='color:#1976D2'><v-icon color="blue darken-2">local_hospital
            </v-icon> Blood Request Board</h1>
            <br>
            <v-container grid-list-md text-xs-center>
              <v-layout row wrap>
                <v-flex xs3 class='animated zoomIn'>
                  <v-card>
                    <v-card-text class="px-0 caption_task">New Request</v-card-text>
                    <span class='stat_task'>{{requests.requests.length}}</span>
                  </v-card>
                </v-flex>
                <v-flex xs3 class='animated zoomIn'>
                  <v-card>
                    <v-card-text class="px-0 caption_task">Crossmatch Stage</v-card-text>
                    <span class='stat_task'>N/A</span>
                  </v-card>
                </v-flex>
                <v-flex xs3 class='animated zoomIn'>
                  <v-card>
                    <v-card-text class="px-0 caption_task">จ่ายถุงเลือดแล้ววันนี้</v-card-text>
                    <span class='stat_task'>{{requests.requests.length}}</span>
                  </v-card>
                </v-flex>
                <v-flex xs3 class='animated zoomIn'>
                  <v-card>
                    <v-card-text class="px-0 caption_task">Today in Process</v-card-text>
                    <span class='stat_task'>{{requests.requests.length}}</span>
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
            @click="route('newrequest')"
          >
            <v-icon dark>add</v-icon>
            New Request
          </v-btn>
        </v-layout>
        <br>
        <br>
        <v-card v-for='item in requests.requests.slice().reverse()' style='margin-bottom: 1em'>
          <v-card-actions>
            <v-container grid-list-md text-xs-center>
              <v-layout row wrap>
                <v-flex xs2>
                  <v-card class='custom_card'>
                    <v-card-text class="px-0 text_grey">
                      สถานะ
                    </v-card-text>
                    <v-card-text class="px-0">
                      <v-chip
                        label
                        small
                        class="white--text"
                        color="yellow darken-2"
                      >{{item.status}}</v-chip>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs2>
                  <v-card class='custom_card'>
                    <v-card-text class="px-0 text_grey">
                      Request Date
                    </v-card-text>
                    <v-card-text class="px-0">
                      {{item.date}}
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs2>
                  <v-card class='custom_card'>
                    <v-card-text class="px-0 text_grey">
                      Recipient
                    </v-card-text>
                    <v-card-text class="px-0">
                      {{item.petName}}
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs2>
                  <v-card class='custom_card'>
                    <v-card-text class="px-0 text_grey">
                      Owner
                    </v-card-text>
                    <v-card-text class="px-0">
                      {{item.ownerName}}
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs2>
                  <v-card class='custom_card'>
                    <v-card-text class="px-0 text_grey">
                      From
                    </v-card-text>
                    <v-card-text class="px-0">
                      {{item.doctorFirstname}}
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs2>
                  <v-card class='custom_card'>
                    <v-card-text class="px-0 text_grey">
                      Symptom
                    </v-card-text>
                    <v-card-text class="px-0">
                      {{item.requestReason}}
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
            <v-layout row justify-center>
              <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
                <v-btn color="primary" dark slot="activator" @click='selected_request=item; getDetail()'>Detail</v-btn>
                <v-toolbar dark color="primary">
                  <v-btn icon @click.native="dialog = false" dark>
                    <v-icon>close</v-icon>
                  </v-btn>
                  <v-toolbar-title>Blood Request:{{selected_request.requestID}}</v-toolbar-title>
                </v-toolbar>
                <v-card>
                  <v-card-text>
                    <v-layout justify-center column>
                      <v-card>
                        <v-card-text>
                          <v-layout row wrap>
                            <v-flex xs1>
                              <v-avatar
                                size="50px"
                                slot="activator"
                              >
                                <img
                                  src="https://www.what-dog.net/Images/faces2/scroll007.jpg"
                                  alt=""
                                  v-if="current_pet.img"
                                >
                                <v-icon v-else>{{ current_pet.img }}</v-icon>
                              </v-avatar>
                            </v-flex>
                            <v-flex xs3>
                              <v-chip
                                label
                                small
                                class="ml-0"
                                v-if="current_pet.petName"
                              >{{current_pet.patientSpecies}}</v-chip>
                              <br>
                              <h2 v-html="current_pet.petName"/>
                              <span class="grey--text" v-if="current_pet.petID">&nbsp;(ID: {{current_pet.petID}})</span>
                            </v-flex>
                            <v-flex xs4>
                              <b>กรุ๊ปเลือด:</b> {{current_pet.petBloodType}}<br>
                              <b>เพศ:</b> {{current_pet.patientGender}}<br>
                              <b>วันเกิด:</b> {{current_pet.patientBirthDt}}<br>
                            </v-flex>
                            <v-flex xs4>
                              <b>เจ้าของ:</b> {{current_pet_owner.ownerName}}<br>
                              <b>เบอร์ติดต่อ:</b> {{current_pet_owner.TelNumer}}<br>
                            </v-flex>
                          </v-layout>

                        </v-card-text>
                      </v-card>
                    </v-layout>
                    <v-btn block class='bg__mdteal'  dark >สถานะ</v-btn>
                    <v-stepper v-model="e6" vertical>
                      <v-stepper-step step="1" :complete="e6 > 1">
                        Request Submit
                      </v-stepper-step>
                      <v-stepper-content step="1">
                        <v-layout row wrap>
                          <v-flex xs2>
                            <v-card class='custom_card' style='padding-left:2em'>
                              <v-card-text class="px-0 text_grey">
                                Request Date
                              </v-card-text>
                              <v-card-text class="px-0">
                                {{item.date}}
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex xs2>
                            <v-card class='custom_card' style='padding-left:2em'>
                              <v-card-text class="px-0 text_grey">
                                Recipient
                              </v-card-text>
                              <v-card-text class="px-0">
                                {{item.petName}}
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex xs2>
                            <v-card class='custom_card' style='padding-left:2em'>
                              <v-card-text class="px-0 text_grey">
                                Owner
                              </v-card-text>
                              <v-card-text class="px-0">
                                {{item.ownerName}}
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex xs2>
                            <v-card class='custom_card' style='padding-left:2em'>
                              <v-card-text class="px-0 text_grey">
                                From
                              </v-card-text>
                              <v-card-text class="px-0">
                                {{item.doctorFirstname}}
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex xs2>
                            <v-card class='custom_card' style='padding-left:2em'>
                              <v-card-text class="px-0 text_grey">
                                Symptom
                              </v-card-text>
                              <v-card-text class="px-0">
                                {{item.requestReason}}
                              </v-card-text>
                            </v-card>
                          </v-flex>
                        </v-layout>
                        <v-btn color="primary" @click.native="e6 = 2">ปรับสถานะ - Crossmatch</v-btn>
                      </v-stepper-content>
                      <v-stepper-step step="2" :complete="e6 > 2">Crossmatch</v-stepper-step>
                      <v-stepper-content step="2">
                        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                        <v-btn color="primary" @click.native="e6 = 3">Continue</v-btn>
                        <v-btn flat>Cancel</v-btn>
                      </v-stepper-content>
                      <v-stepper-step step="3" :complete="e6 > 3">Transfusion</v-stepper-step>
                      <v-stepper-content step="3">
                        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                        <v-btn color="primary" @click.native="e6 = 4">Continue</v-btn>
                        <v-btn flat>Cancel</v-btn>
                      </v-stepper-content>
                      <v-stepper-step step="4">เสร็จสิ้น</v-stepper-step>
                      <v-stepper-content step="4">
                        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                        <v-btn color="primary" @click.native="e6 = 1">Continue</v-btn>
                        <v-btn flat>Cancel</v-btn>
                      </v-stepper-content>
                    </v-stepper>
                    <v-btn block class='bg__mdteal'  dark >ถุงเลือดที่ใช้</v-btn>
                    <v-card>
                      <v-container grid-list-md text-xs-center>
                        <v-layout row wrap style='border-bottom: 1px solid #f4f4f4'>
                          <v-flex xs2>
                            <v-card class='custom_card'>
                              <v-card-text class="px-0 text_grey">
                                <img src='../assets/request/bloodbag.svg' style='width:40px'>
                                </img>
                              </v-card-text>
                              <v-card-text class="px-0 pink--text darken-6">
                                {{current_bloodbags.product_type}}
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex xs2>
                            <v-card class='custom_card'>
                              <v-card-text class="px-0 text_grey">
                                กรุ๊ปเลือด
                              </v-card-text>
                              <v-card-text class="px-0">
                                {{current_bloodbags.blood_type}}
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex xs2>
                            <v-card class='custom_card'>
                              <v-card-text class="px-0 text_grey">
                                ปริมาณ
                              </v-card-text>
                              <v-card-text class="px-0">
                                <b>{{current_bloodbags.quantity}}</b> ml.
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex xs2>
                            <v-card class='custom_card'>
                              <v-card-text class="px-0 text_grey">
                                หมายเลขถุงเลือด
                              </v-card-text>
                              <v-card-text class="px-0">
                                {{current_bloodbags.bag_id}}
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex xs2>
                            <v-card class='custom_card'>
                              <v-card-text class="px-0 text_grey">
                                วันหมดอายุ
                              </v-card-text>
                              <v-card-text class="px-0">
                                {{current_bloodbags.ExpDate}}
                              </v-card-text>
                            </v-card>
                          </v-flex>
                        </v-layout>
                      </v-container>
        					  </v-card>
                    <v-btn block class='bg__mdteal'  dark >บันทึกผลการใช้เลือด</v-btn>
                    <v-card>
                      <v-container grid-list-md text-xs-center>
                        <v-layout row>
                          <v-flex xs3>
                            <v-subheader>บันทึกผลโดยย่อ</v-subheader>
                          </v-flex>
                          <v-flex xs6>
                            <v-text-field
                              v-model="comment"
                              label="ความคิดเห็นจากสัตวแพทย์"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs3>
                            <v-btn
                              @click="saveNote(selected_request.request_id)"
                            >
                            บันทึก
                            </v-btn>
                          </v-flex>
                        </v-layout>
                        <v-divider></v-divider>
                        <br>
                        <v-layout row wrap v-for='item in notes.diagnostic_result' style='border-bottom: 1px solid #f4f4f4'>
                          <v-flex xs1>
                            <v-card class='custom_card2'>
                              <v-card-text class="px-0 text_grey">
                                เลขที่บันทึก
                              </v-card-text>
                              <v-card-text class="px-0">
                                {{item.diagnostic_id}}
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex xs3>
                            <v-card class='custom_card2'>
                              <v-card-text class="px-0 text_grey">
                                สัตวแพทย์ที่ตรวจ
                              </v-card-text>
                              <v-card-text class="px-0">
                                {{item.doctor_firstname}}
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex xs3>
                            <v-card class='custom_card2'>
                              <v-card-text class="px-0 text_grey">
                                โรงพยาบาล
                              </v-card-text>
                              <v-card-text class="px-0">
                                {{item.hospital_name}}
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex xs5>
                            <v-card class='custom_card2'>
                              <v-card-text class="px-0 text_grey">
                                ความคิดเห็น
                              </v-card-text>
                              <v-card-text class="px-0">
                                {{item.others
                                }}
                              </v-card-text>
                            </v-card>
                          </v-flex>
                        </v-layout>
                      </v-container>
        					  </v-card>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-layout>
          </v-card-actions>
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
    created () {
				var headers = {
            'Content-Type': 'application/json'
        }
        axios.post('https://nqh48rassj.execute-api.ap-southeast-1.amazonaws.com/deploy/blood-bank/request/detail/request-byhospital', {
          hospitalID : "1"
        },headers)
        .then(response => {
					this.requests = response.data
				})
		    .catch(e => {
		      this.errors.push(e)
		    })
    },
    components: {
      AppFooter
    },
    data () {
      return {
        e6: 1,
        requests: [],
        postBody: [],
        errors: [],
        current_pet: [],
        current_pet_detail: [],
        current_pet_owner: [],
        current_request: null,
        current_product: null,
        current_bloodbags: null,
        selected_request: [],
        selected_bags: [],
        notes: [],
        comment: '',
        dialog: false,
        clipped: false,
        drawer: false,
        clipped: false,
				breadcrumbs: [
          {
            text: 'ธนาคารเลือดสัตว์เลี้ยง',
            disabled: false
          },
          {
            text: 'การเบิกเลือด',
            disabled: true
          }
        ],
        items: [
          { title: 'Dashboard', icon: 'dashboard', link: '/' },
          { title: 'บริจาคเลือด', icon: 'add_circle_outline', link: '/donation'  },
          { title: 'เบิกเลือด', icon: 'local_hospital', link: '/request'  },
          { title: 'จัดการ Stock เลือด', icon: 'account_balance', link: '/stock'  },
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
      route (page) {
        window.location.href = page
      },
      saveNote (id) {
        var headers = {
            'Content-Type': 'application/json'
        }
        axios.post('https://odnooein50.execute-api.ap-southeast-1.amazonaws.com/Dev/diagnosticresult/add', {
          "vetID": "1",
          "hospitalID": "1",
          "PCV": "11",
          "others": this.comment,
          "resultID": id
        },headers)
        .then(response => {
					window.location.reload()
				})
		    .catch(e => {
		      this.errors.push(e)
		    })

      },
      getOwner ()
      {
        var headers = {
            'Content-Type': 'application/json'
        }

        //owner-detail
        axios.post('https://nqh48rassj.execute-api.ap-southeast-1.amazonaws.com/deploy/owner/detail', {
          ownerID : this.current_pet.ownerID
        },headers)
        .then(response => {
					this.current_pet_owner = response.data
				})
		    .catch(e => {
		      this.errors.push(e)
		    })
      },
      getDetail () {
				var headers = {
            'Content-Type': 'application/json'
        }
        axios.post('https://nqh48rassj.execute-api.ap-southeast-1.amazonaws.com/deploy/pet/datail', {
          petID : this.selected_request.petID
        },headers)
        .then(response => {
          this.current_pet = response.data
          this.current_pet.img = 'https://www.what-dog.net/Images/faces2/scroll007.jpg'
          this.getOwner()
				})
		    .catch(e => {
		      this.errors.push(e)
		    })

        axios.post('https://nqh48rassj.execute-api.ap-southeast-1.amazonaws.com/deploy/blood-bank/request/product/request-with-product-request-detail', {
          "RequestID" : this.selected_request.requestID
        },headers)
        .then(response => {
					this.current_request = response.data
          axios.post('https://nqh48rassj.execute-api.ap-southeast-1.amazonaws.com/deploy/blood-bank/request/product/blood-bag/product-request-with-bloodbag-detail', {
            "productRequestID" : this.current_request.detail[0].productRequestID
          },headers)
          .then(response => {
  					this.current_product = response.data
            axios.post('https://nqh48rassj.execute-api.ap-southeast-1.amazonaws.com/deploy/blood-bank/blood-bag/detail', {
              "bloodbagID" : this.current_product.detail[0].bag_id
            },headers)
            .then(response => {
    					this.current_bloodbags = response.data
    				})
    		    .catch(e => {
    		      this.errors.push(e)
    		    })
  				})
  		    .catch(e => {
  		      this.errors.push(e)
  		    })
				})
		    .catch(e => {
		      this.errors.push(e)
		    })
	    },
    },
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
  .custom_card2{
    box-shadow: 0px 0px 0px 0px !important;
  }
  .zoomIn {
    -webkit-animation: zoomIn 0.3s; /* Safari 4+ */
    -moz-animation:    zoomIn 0.3s; /* Fx 5+ */
    -o-animation:      zoomIn 0.3s; /* Opera 12+ */
    animation:         zoomIn 0.3s; /* IE 10+, Fx 29+ */
  }

</style>
