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
        <v-list-tile v-for="item in items" :key="item.text" @click="route(item.page)">
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

            <v-layout row wrap>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" persistent max-width="500px">
                <v-btn
                  large
                  color="blue"
                  class="white--text"
                  slot="activator"
                >
                  <v-icon dark>add</v-icon>
                  เพิ่มถุงเลือด
                </v-btn>
                <v-card>
                  <v-card-title>
                    <span class="headline">User Profile</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex xs12 sm6 md4>
                          <v-text-field label="Legal first name" required></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                          <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                          <v-text-field
                            label="Legal last name"
                            hint="example of persistent helper text"
                            persistent-hint
                            required
                          ></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                          <v-text-field label="Email" required></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                          <v-text-field label="Password" type="password" required></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6>
                          <v-select
                            label="Age"
                            required
                            :items="['0-17', '18-29', '30-54', '54+']"
                          ></v-select>
                        </v-flex>
                        <v-flex xs12 sm6>
                          <v-select
                            label="Interests"
                            multiple
                            autocomplete
                            chips
                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                          ></v-select>
                        </v-flex>
                      </v-layout>
                    </v-container>
                    <small>*indicates required field</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click.native="addBloodBag(); dialog = false">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-layout>
            <br><br>

            <v-container grid-list-md text-xs-center>
              <v-layout row wrap>
                <v-flex xs2>
                  <v-card dark color="secondary">
                    <v-card-text class="px-0 caption_task">FWB</v-card-text>
                    <span class='stat_task'>4</span>
                    <v-card-text class="px-0 caption_task">จอง:1</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs2>
                  <v-card dark color="secondary">
                    <v-card-text class="px-0 caption_task">SWB</v-card-text>
                    <span class='stat_task'>4</span>
                    <v-card-text class="px-0 caption_task">จอง:1</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs2>
                  <v-card dark color="secondary">
                    <v-card-text class="px-0 caption_task">pRBCs</v-card-text>
                    <span class='stat_task'>4</span>
                    <v-card-text class="px-0 caption_task">จอง:1</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs2>
                  <v-card dark color="secondary">
                    <v-card-text class="px-0 caption_task">PRP</v-card-text>
                    <span class='stat_task'>4</span>
                    <v-card-text class="px-0 caption_task">จอง:1</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs2>
                  <v-card dark color="secondary">
                    <v-card-text class="px-0 caption_task">FFP</v-card-text>
                    <span class='stat_task'>4</span>
                    <v-card-text class="px-0 caption_task">จอง:1</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs2>
                  <v-card dark color="secondary">
                    <v-card-text class="px-0 caption_task">FP</v-card-text>
                    <span class='stat_task'>4</span>
                    <v-card-text class="px-0 caption_task">จอง:1</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>

          </v-layout>
        </v-slide-y-transition>
        <br>
        <div>
          <v-data-table
            :headers="bloodbag_headers"
            :items="bloodbag_items.bloodBags"
            :search="search"
            :pagination.sync="pagination"
            hide-actions
            class="elevation-1"
          >
            <template slot="headerCell" slot-scope="props">
              <v-tooltip bottom>
                <span slot="activator">
                  {{ props.header.text }}
                </span>
                <span>
                  {{ props.header.text }}
                </span>
              </v-tooltip>
            </template>
            <template slot="items" slot-scope="props">
              <td>
                <v-chip v-show='props.item.bag_status!="active"' color="yellow darken-2" text-color="white">{{ props.item.bag_status }}</v-chip>
                <v-chip v-show='props.item.bag_status=="active"' color="green" text-color="white">{{ props.item.bag_status }}</v-chip>
              </td>
              <td>{{ props.item.quantity }}</td>
              <td>{{ props.item.bag_id }}</td>
              <td>{{ props.item.product_type }}</td>
              <td>{{ props.item.blood_type }}</td>
              <td>{{ props.item.pcv }}</td>
              <td>{{ props.item.vet_comment }}</td>
              <td class="text-xs-right"><v-icon style='cursor:pointer' @click='deleteBloodBag(props.item.bag_id)'>delete</v-icon></td>
            </template>
          </v-data-table>
          <div class="text-xs-center pt-2">
            <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
          </div>
        </div>
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
        axios.post('https://nqh48rassj.execute-api.ap-southeast-1.amazonaws.com/deploy/blood-bank/blood-bag/get-by-hospitalid', {
          hospitalID : "1"
        },headers)
        .then(response => {
					this.bloodbag_items = response.data
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
        requests: [],
        postBody: [],
        errors: [],
        current_pet: [],
        current_pet_detail: [],
        current_pet_owner: [],
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
					{ title: 'Dashboard', icon: 'dashboard', page: '/'},
          { title: 'Do it now!', icon: 'extension', page: '/'},
          { title: 'Statistic', icon: 'trending_up', page: '/'},
          { title: 'Email', icon: 'email', page: '/'},
          { title: 'Social', icon: 'message', page: '/'}
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
        bloodbag_items: [],
        search: '',
        pagination: {},
        selected: [],
        bloodbag_headers: [
          { text: 'Status',align: 'left', value: 'bag_status' },
          {
            text: 'Volume (ml.)',
            align: 'left',
            value: 'quantity'
          },
          { text: 'ID', align: 'left',value: 'bag_id' },
          { text: 'Product Type', align: 'left',value: 'product_type' },
          { text: 'Blood Type', align: 'left',value: 'blood_type' },
          { text: 'PCV', align: 'left',value: 'pcv' },
          { text: 'Comment', align: 'left',value: 'vet_comment' },
          { text: 'Action' }
        ],
        dialog: false,
      }
    },
    computed: {
      pages () {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0

        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
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
      deleteBloodBag (id) {
        var headers = {
            'Content-Type': 'application/json'
        }
        //delete-bloodbag
        axios.post('https://nqh48rassj.execute-api.ap-southeast-1.amazonaws.com/deploy/blood-bank/blood-bag/delete', {
          bagID: id,
        },headers)
        .then(response => {
					window.location.reload()
				})
		    .catch(e => {
		      this.errors.push(e)
		    })

      },
      addBloodBag (id) {
        var headers = {
            'Content-Type': 'application/json'
        }
        //bloodbag-add
        axios.post('https://nqh48rassj.execute-api.ap-southeast-1.amazonaws.com/deploy/blood-bank/blood-bag/add', {
          "bagDate": "2018-08-08",
          "donationID": "1",
          "type": "value2",
          "expDate": "2018-08-08",
          "bagStatus": "value2",
          "bloodType": "value2",
          "productType": "value2",
          "hospitalID": "1",
          "quantity": "500ml",
          "pcv": "18",
          "vetComment": "value1"
        },headers)
        .then(response => {
          console.log(response.data)
					//window.location.reload()
				})
		    .catch(e => {
		      this.errors.push(e)
		    })

      },
      getDetail () {
				var headers = {
            'Content-Type': 'application/json'
        }
        axios.post('https://odnooein50.execute-api.ap-southeast-1.amazonaws.com/Dev/results', {
          petID : this.selected_request.pet_id
        },headers)
        .then(response => {
					this.current_pet = response.data
          this.current_pet.img = 'https://www.what-dog.net/Images/faces2/scroll007.jpg'
				})
		    .catch(e => {
		      this.errors.push(e)
		    })

        axios.post('https://odnooein50.execute-api.ap-southeast-1.amazonaws.com/Dev/pets/detail', {
          petID : this.selected_request.pet_id
        },headers)
        .then(response => {
					this.current_pet_detail = response.data
				})
		    .catch(e => {
		      this.errors.push(e)
		    })

        axios.post('https://odnooein50.execute-api.ap-southeast-1.amazonaws.com/Dev/owners/detail', {
          ownerID : '1'
        },headers)
        .then(response => {
					this.current_pet_owner = response.data
				})
		    .catch(e => {
		      this.errors.push(e)
		    })

        axios.post('https://odnooein50.execute-api.ap-southeast-1.amazonaws.com/Dev/request/specificrequestwithrequestdetail', {
          "RequestID": this.selected_request.request_id
        },headers)
        .then(response => {
          this.selected_bags = response.data
				})
		    .catch(e => {
		      this.errors.push(e)
		    })

        axios.post('https://odnooein50.execute-api.ap-southeast-1.amazonaws.com/Dev/diagnosticresult/getbyrequestid', {
          requestID : this.selected_request.request_id
        },headers)
        .then(response => {
					this.notes = response.data
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

</style>
