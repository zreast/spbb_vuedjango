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
                    <span class='stat_task'>{{badge1}}</span>
                  </v-card>
                </v-flex>
                <v-flex xs3 class='animated zoomIn'>
                  <v-card>
                    <v-card-text class="px-0 caption_task">Crossmatch Stage</v-card-text>
                    <span class='stat_task'>{{badge2}}</span>
                  </v-card>
                </v-flex>
                <v-flex xs3 class='animated zoomIn'>
                  <v-card>
                    <v-card-text class="px-0 caption_task">จ่ายถุงเลือดแล้ววันนี้</v-card-text>
                    <span class='stat_task'>{{badge3}}</span>
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
                    <v-card-text class="px-0 blue--text text--darken-3">
                      สถานะ
                    </v-card-text>
                    <v-card-text class="px-0">
                      <v-chip
                        v-show="item.status=='Request Submit'"
                        label
                        small
                        class="white--text"
                        color="yellow darken-2"
                      >{{item.status}}</v-chip>
                      <v-chip
                        v-show="item.status=='Crossmatch'"
                        label
                        small
                        class="white--text"
                        color="pink lighten-3"
                      >{{item.status}}</v-chip>
                      <v-chip
                        v-show="item.status=='Transfusion'"
                        label
                        small
                        class="white--text"
                        color="deep-purple lighten-3"
                      >{{item.status}}</v-chip>
                      <v-chip
                        v-show="item.status=='Success'"
                        label
                        small
                        class="white--text"
                        color="green lighten-1"
                      >{{item.status}}</v-chip>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs2>
                  <v-card class='custom_card'>
                    <v-card-text class="px-0 blue--text text--darken-3">
                      Request Date
                    </v-card-text>
                    <v-card-text class="px-0">
                      {{item.date}}
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs2>
                  <v-card class='custom_card'>
                    <v-card-text class="px-0 blue--text text--darken-3">
                      Recipient
                    </v-card-text>
                    <v-card-text class="px-0">
                      {{item.petName}}
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs2>
                  <v-card class='custom_card'>
                    <v-card-text class="px-0 blue--text text--darken-3">
                      Owner
                    </v-card-text>
                    <v-card-text class="px-0">
                      {{item.ownerName}}
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs2>
                  <v-card class='custom_card'>
                    <v-card-text class="px-0 blue--text text--darken-3">
                      From
                    </v-card-text>
                    <v-card-text class="px-0">
                      {{item.doctorFirstname}}
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs2>
                  <v-card class='custom_card'>
                    <v-card-text class="px-0 blue--text text--darken-3">
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
                <v-btn color="primary" dark slot="activator" @click='selected_request=item; e6Update(); getDetail()'>Detail</v-btn>
                <v-toolbar dark color="primary">
                  <v-btn icon @click.native="dialog = false" dark>
                    <v-icon>close</v-icon>
                  </v-btn>
                  <v-toolbar-title>Blood Request: {{selected_request.requestID}}</v-toolbar-title>
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
                        <b>Request Submit</b>
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
                        <v-btn color="primary" @click.native="requestChange(selected_request.requestID,'Crossmatch'); e6 = 2">ปรับสถานะเป็น Crossmatch</v-btn>
                      </v-stepper-content>
                      <v-stepper-step step="2" :complete="e6 > 2"><b>Crossmatch</b></v-stepper-step>
                      <v-stepper-content step="2">
                        <v-card>
                          อยู่ในระหว่างนำผลิตภัณฑ์ไป Crossmatch
                        </v-card>
                        <v-btn color="primary" @click.native="requestChange(selected_request.requestID,'Transfusion'); e6 = 3">ปรับสถานะเป็น Transfusion</v-btn>
                      </v-stepper-content>
                      <v-stepper-step step="3" :complete="e6 > 3"><b>Transfusion</b></v-stepper-step>
                      <v-stepper-content step="3">
                          อยู่ในระหว่างการถ่ายเลือด
                          <br><br>
                          - 30 นาทีแรก ควรให้ WB อย่างช้าๆ (0.25 ml/kg) ร่วมกับสังเกตุอาการอย่างใกล้ชิด<br>
                          - หากมั่นใจว่าไม่มีอาการของ tranfusion reaction เกิดขึ้น จึงค่อยเพิ่มความเร็วของการให้ WB ขึ้น แต่ไม่เกิน 10-20 ml/kg/hr<br>
                          - ควรให้ WB ที่เหลืออยู่ให้หมดในเวลา ไม่เกิน 4 ชั่วโมง เพื่อป้องกัน functional loss ของส่วนประกอบของเลือด ณ อุณหภูมิห้อง<br>
                          - ถ้าคำนวณแล้วเกิน 4 ชั่วโมง อาจต้องแบ่งเลือดเป็นหลายส่วน แล้วแบ่งหลายวัน เพื่อป้องกันอันตรายจากภาวะ hypervolemia<br><br>
                        <v-btn color="primary" @click.native="requestChange(selected_request.requestID,'Success'); e6 = 4">ปรับสถานะเป็น Success</v-btn>
                      </v-stepper-content>
                      <v-stepper-step step="4"><b>Success</b></v-stepper-step>
                      <v-stepper-content step="4">
                        <v-card>
                          การถ่ายเลือดเสร็จสมบูรณ์
                        </v-card>
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
                                {{current_bloodbags.product_type}} <b>{{current_bloodbags.quantity}}</b> ml.
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
                                PCV
                              </v-card-text>
                              <v-card-text class="px-0">
                                {{current_bloodbags.pcv}}
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
                          <v-flex xs4>
                            <v-text-field
                              v-model="note_comment"
                              label="ความคิดเห็นจากสัตวแพทย์"
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs2>
                            <v-text-field
                              v-model="note_pcv"
                              label="PCV"
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
                        <v-layout row wrap v-for='item in notes.bloodRequestResult' style='border-bottom: 1px solid #f4f4f4'>
                          <v-flex xs1>
                            <v-card class='custom_card2'>
                              <v-card-text class="px-0 text_grey">
                                เลขที่บันทึก
                              </v-card-text>
                              <v-card-text class="px-0">
                                {{item.blood_request_result_id}}
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex xs3>
                            <v-card class='custom_card2'>
                              <v-card-text class="px-0 text_grey">
                                สัตวแพทย์ที่ตรวจ
                              </v-card-text>
                              <v-card-text class="px-0">
                                {{item.doctorFirstname}}
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex xs3>
                            <v-card class='custom_card2'>
                              <v-card-text class="px-0 text_grey">
                                ค่า PCV
                              </v-card-text>
                              <v-card-text class="px-0">
                                {{item.resultBefore}}
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex xs5>
                            <v-card class='custom_card2'>
                              <v-card-text class="px-0 text_grey">
                                ความคิดเห็น
                              </v-card-text>
                              <v-card-text class="px-0">
                                {{item.note}}
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
          for(var i in this.requests.requests)
          {
            if(this.requests.requests[i].status=='Request Submit')
              this.badge1++
            if(this.requests.requests[i].status=='Crossmatch')
              this.badge2++
            if(this.requests.requests[i].status=='Transfusion'||this.requests.requests[i].status=='Success')
              this.badge3++
          }
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
        badge1: 0,
        badge2: 0,
        badge3: 0,
        e6: 1,
        requests: [],
        note_comment: '',
        note_pcv: '',
        postBody: [],
        errors: [],
        current_pet: [],
        current_pet_detail: [],
        current_pet_owner: [],
        current_request: null,
        current_product: null,
        current_bloodbags: [],
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
        console.log(this.note_pcv)
        axios.post('https://nqh48rassj.execute-api.ap-southeast-1.amazonaws.com/deploy/blood-bank/request/result/add', {
          "requestID": this.selected_request.requestID,
          "note": this.note_comment,
          "vetID": "1",
          "resultName": "PCV",
          "resultBefore": this.note_pcv
        },headers)
        .then(response => {
					this.getDetail ()
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
      requestChange (req_id,state)
      {
        var headers = {
            'Content-Type': 'application/json'
        }
        axios.post('https://nqh48rassj.execute-api.ap-southeast-1.amazonaws.com/deploy/blood-bank/request/change-status', {
          "requestID":req_id,
          "status":state
        },headers)
        .then(response => {
				})
		    .catch(e => {
		      this.errors.push(e)
		    })
      },
      e6Update()
      {
        if(this.selected_request.status=='Request Submit')
          this.e6=1
        if(this.selected_request.status=='Crossmatch')
          this.e6=2
        if(this.selected_request.status=='Transfusion')
        {
          this.e6=3
        }
        if(this.selected_request.status=='Success')
          this.e6=4
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

        axios.post('https://nqh48rassj.execute-api.ap-southeast-1.amazonaws.com/deploy/blood-bank/request/result/detail', {
          "requestID" : this.selected_request.requestID
        },headers)
        .then(response => {
          this.notes = response.data
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
