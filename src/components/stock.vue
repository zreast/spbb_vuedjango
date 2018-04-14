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
        <v-data-table
          :headers="bloodbag_headers"
          :items="bloodbag_items"
          hide-actions
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.calories }}</td>
            <td class="text-xs-right">{{ props.item.fat }}</td>
            <td class="text-xs-right">{{ props.item.carbs }}</td>
            <td class="text-xs-right">{{ props.item.protein }}</td>
            <td class="text-xs-right">{{ props.item.iron }}</td>
          </template>
        </v-data-table>
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

  @import url(//fonts.googleapis.com/css?family=Lato:300,400,700);

.fm-datum-color-wheel-a {
  fill: #ECB53E;
  &.with-stroke {
    stroke: #ECB53E;
  }
  &.no-fill {
    fill: none;
  }
}

.fm-datum-color-wheel-b {
  fill: #8AC37E;
  &.with-stroke {
    stroke: #8AC37E;
  }
  &.no-fill {
    fill: none;
  }
}

.fm-datum-color-wheel-c {
  fill: #88B25B;
  &.with-stroke {
    stroke: #88B25B;
  }
  &.no-fill {
    fill: none;
  }
}

.fm-datum-color-wheel-d {
  fill: #459C76;
  &.with-stroke {
    stroke: #459C76;
  }
  &.no-fill {
    fill: none;
  }
}

.fm-datum-color-wheel-e {
  fill: #32AFE5;
  &.with-stroke {
    stroke: #32AFE5;
  }
  &.no-fill {
    fill: none;
  }
}

.fm-datum-color-wheel-f {
  fill: #2A7FB9;
  &.with-stroke {
    stroke: #2A7FB9;
  }
  &.no-fill {
    fill: none;
  }
}

.fm-datum-color-wheel-g {
  fill: #385F8C;
  &.with-stroke {
    stroke: #385F8C;
  }
  &.no-fill {
    fill: none;
  }
}

.fm-datum-color-wheel-h {
  fill: #AE74AF;
  &.with-stroke {
    stroke: #AE74AF;
  }
  &.no-fill {
    fill: none;
  }
}

.fm-datum-color-wheel-i {
  fill: #744589;
  &.with-stroke {
    stroke: #744589;
  }
  &.no-fill {
    fill: none;
  }
}

.fm-datum-color-wheel-j {
  fill: #A7305D;
  &.with-stroke {
    stroke: #A7305D;
  }
  &.no-fill {
    fill: none;
  }
}

.fm-datum-color-wheel-k {
  fill: #D03B43;
  &.with-stroke {
    stroke: #D03B43;
  }
  &.no-fill {
    fill: none;
  }
}

.fm-datum-color-wheel-l {
  fill: #DC8336;
  &.with-stroke {
    stroke: #DC8336;
  }
  &.no-fill {
    fill: none;
  }
}

.fm-datum-color-overflow {
  fill: #191919;
  &.with-stroke {
    stroke: #191919;
  }
  &.no-fill {
    fill: none;
  }
}

.fm-datum-color-wheel-a {
  &.tint-1 {
    fill: #ecb847;
  }
  &.tint-2 {
    fill: #edbc51;
  }
  &.tint-3 {
    fill: #eec05a;
  }
  &.tint-4 {
    fill: #efc364;
  }
  &.tint-5 {
    fill: #f0c76e;
  }
  &.tint-6 {
    fill: #f1cb77;
  }
  &.tint-7 {
    fill: #f2ce81;
  }
  &.tint-8 {
    fill: #f3d28b;
  }
  &.tint-9 {
    fill: #f4d694;
  }
  &.inactive {
    fill: #faeac9;
  }
}

.fm-datum-color-wheel-b {
  &.tint-1 {
    fill: #8fc684;
  }
  &.tint-2 {
    fill: #95c98a;
  }
  &.tint-3 {
    fill: #9bcc91;
  }
  &.tint-4 {
    fill: #a1cf97;
  }
  &.tint-5 {
    fill: #a7d29e;
  }
  &.tint-6 {
    fill: #add5a4;
  }
  &.tint-7 {
    fill: #b2d8ab;
  }
  &.tint-8 {
    fill: #b8dbb1;
  }
  &.tint-9 {
    fill: #bedeb8;
  }
  &.inactive {
    fill: #e9f4e6;
  }
}

.fm-datum-color-wheel-c {
  &.tint-1 {
    fill: #8db563;
  }
  &.tint-2 {
    fill: #93b96b;
  }
  &.tint-3 {
    fill: #99bd73;
  }
  &.tint-4 {
    fill: #9fc17b;
  }
  &.tint-5 {
    fill: #a5c584;
  }
  &.tint-6 {
    fill: #abc98c;
  }
  &.tint-7 {
    fill: #b1cc94;
  }
  &.tint-8 {
    fill: #b7d09c;
  }
  &.tint-9 {
    fill: #bdd4a4;
  }
  &.inactive {
    fill: #d4e3c3;
  }
}

.fm-datum-color-wheel-d {
  &.tint-1 {
    fill: #4ea07c;
  }
  &.tint-2 {
    fill: #57a583;
  }
  &.tint-3 {
    fill: #60aa8a;
  }
  &.tint-4 {
    fill: #6aaf91;
  }
  &.tint-5 {
    fill: #73b498;
  }
  &.tint-6 {
    fill: #7cb99f;
  }
  &.tint-7 {
    fill: #86bea5;
  }
  &.tint-8 {
    fill: #8fc3ac;
  }
  &.tint-9 {
    fill: #98c8b3;
  }
  &.inactive {
    fill: #a3d7c0;
  }
}

.fm-datum-color-wheel-e {
  &.tint-1 {
    fill: #3cb3e6;
  }
  &.tint-2 {
    fill: #46b7e7;
  }
  &.tint-3 {
    fill: #50bbe8;
  }
  &.tint-4 {
    fill: #5bbfea;
  }
  &.tint-5 {
    fill: #65c3eb;
  }
  &.tint-6 {
    fill: #6fc7ec;
  }
  &.tint-7 {
    fill: #79cbee;
  }
  &.tint-8 {
    fill: #84cfef;
  }
  &.tint-9 {
    fill: #8ed3f0;
  }
  &.inactive {
    fill: #bae4f6;
  }
}

.fm-datum-color-wheel-f {
  &.tint-1 {
    fill: #3485bc;
  }
  &.tint-2 {
    fill: #3f8bc0;
  }
  &.tint-3 {
    fill: #4992c3;
  }
  &.tint-4 {
    fill: #5498c7;
  }
  &.tint-5 {
    fill: #5f9fca;
  }
  &.tint-6 {
    fill: #69a5ce;
  }
  &.tint-7 {
    fill: #74abd1;
  }
  &.tint-8 {
    fill: #7fb2d5;
  }
  &.tint-9 {
    fill: #89b8d8;
  }
  &.inactive {
    fill: #95c6e7;
  }
}

.fm-datum-color-wheel-g {
  &.tint-1 {
    fill: #416791;
  }
  &.tint-2 {
    fill: #4b6f97;
  }
  &.tint-3 {
    fill: #55779d;
  }
  &.tint-4 {
    fill: #5f7fa3;
  }
  &.tint-5 {
    fill: #6987a8;
  }
  &.tint-6 {
    fill: #738fae;
  }
  &.tint-7 {
    fill: #7d97b4;
  }
  &.tint-8 {
    fill: #879fba;
  }
  &.tint-9 {
    fill: #91a7bf;
  }
  &.inactive {
    fill: #8cacd1;
  }
}

.fm-datum-color-wheel-h {
  &.tint-1 {
    fill: #b27ab3;
  }
  &.tint-2 {
    fill: #b681b7;
  }
  &.tint-3 {
    fill: #ba88bb;
  }
  &.tint-4 {
    fill: #be8fbf;
  }
  &.tint-5 {
    fill: #c296c3;
  }
  &.tint-6 {
    fill: #c69dc7;
  }
  &.tint-7 {
    fill: #caa4cb;
  }
  &.tint-8 {
    fill: #ceabcf;
  }
  &.tint-9 {
    fill: #d2b2d3;
  }
  &.inactive {
    fill: #e7d5e7;
  }
}

.fm-datum-color-wheel-i {
  &.tint-1 {
    fill: #7a4e8e;
  }
  &.tint-2 {
    fill: #815794;
  }
  &.tint-3 {
    fill: #88609a;
  }
  &.tint-4 {
    fill: #8f6aa0;
  }
  &.tint-5 {
    fill: #9673a6;
  }
  &.tint-6 {
    fill: #9d7cac;
  }
  &.tint-7 {
    fill: #a486b2;
  }
  &.tint-8 {
    fill: #ab8fb8;
  }
  &.tint-9 {
    fill: #b298be;
  }
  &.inactive {
    fill: #bd9bcc;
  }
}

.fm-datum-color-wheel-j {
  &.tint-1 {
    fill: #ab3a65;
  }
  &.tint-2 {
    fill: #af446d;
  }
  &.tint-3 {
    fill: #b44f75;
  }
  &.tint-4 {
    fill: #b8597d;
  }
  &.tint-5 {
    fill: #bd6385;
  }
  &.tint-6 {
    fill: #c16e8d;
  }
  &.tint-7 {
    fill: #c57895;
  }
  &.tint-8 {
    fill: #ca829d;
  }
  &.tint-9 {
    fill: #ce8da5;
  }
  &.inactive {
    fill: #df91ae;
  }
}

.fm-datum-color-wheel-k {
  &.tint-1 {
    fill: #d2444c;
  }
  &.tint-2 {
    fill: #d44e55;
  }
  &.tint-3 {
    fill: #d7585f;
  }
  &.tint-4 {
    fill: #d96268;
  }
  &.tint-5 {
    fill: #db6c72;
  }
  &.tint-6 {
    fill: #de757b;
  }
  &.tint-7 {
    fill: #e07f84;
  }
  &.tint-8 {
    fill: #e2898e;
  }
  &.tint-9 {
    fill: #e59397;
  }
  &.inactive {
    fill: #eeb6b9;
  }
}

.fm-datum-color-wheel-l {
  &.tint-1 {
    fill: #dd8940;
  }
  &.tint-2 {
    fill: #df8f4a;
  }
  &.tint-3 {
    fill: #e19554;
  }
  &.tint-4 {
    fill: #e39b5e;
  }
  &.tint-5 {
    fill: #e4a268;
  }
  &.tint-6 {
    fill: #e6a872;
  }
  &.tint-7 {
    fill: #e8ae7c;
  }
  &.tint-8 {
    fill: #eab486;
  }
  &.tint-9 {
    fill: #ebba90;
  }
  &.inactive {
    fill: #f3d3b8;
  }
}

.fm-white-fill {
  fill: white;
}

.fm-hidden {
  display: none;
}

.fm-scale {
  fill: none;
}

.fm-axis {
  text {
    font-family: Lato, sans-serif;
    font-size: 12px;
    &.fm-squeezed-label {
      font-size: 10px;
    }
  }
  line {
    stroke: #808080;
    stroke-width: 1px;
  }
}

.fm-major-grid-line {
  stroke: #808080;
  stroke-width: 1px;
}

.fm-minor-grid-line {
  stroke: #B3B3B3;
}

.fm-y-axis text {
  text-anchor: end;
  dominant-baseline: central;
}

.fm-tick-mark line {
  stroke: #B3B3B3;
}

.fm-label text {
  fill: white;
}

.fm-axis-label {
  text-anchor: middle;
  dominant-baseline: text-before-edge;
}

.fm-inverted-axis-label {
  text-anchor: middle;
  dominant-baseline: text-after-edge;
}

.fm-pulled-out-label {
  font-weight: 700;
}

.fm-column-bar-tooltip {
  text {
    font-family: 'Lato', sans-serif;
    font-size: 13px;
    fill: black;
    stroke: none;
  }
  &.with-fill {
    text {
      fill: white;
    }
    .fm-tooltip-arrow, .fm-tooltip-bg {
      stroke: none;
    }
  }
}

.fm-column-bar-datum {
  transition: 0.1s fill;
  &:hover {
    cursor: pointer;
  }
}

.fm-pullout {
  fill: black;
  opacity: 0.09;
}

.fm-key {
  rect.fm-key-container {
    fill: #e4e4e3;
  }
  line {
    stroke: black;
  }
  .fm-key-dividor {
    stroke: #B2B2B2;
  }
  .fm-pullout-key {
    stroke: black;
    stroke-width: 1;
    fill: #B2B2B2;
  }
  .fm-pullout-title {
    dominant-baseline: central;
    font-family: 'Lato', sans-serif;
    font-size: 12px;
  }
}

.fm-datum-color-wheel-a.active {
  fill: #ECB53E;
}

.fm-datum-color-wheel-b.active {
  fill: #8AC37E;
}

.fm-datum-color-wheel-c.active {
  fill: #88B25B;
}

.fm-datum-color-wheel-d.active {
  fill: #459C76;
}

.fm-datum-color-wheel-e.active {
  fill: #32AFE5;
}

.fm-datum-color-wheel-f.active {
  fill: #2A7FB9;
}

.fm-datum-color-wheel-g.active {
  fill: #385F8C;
}

.fm-datum-color-wheel-h.active {
  fill: #AE74AF;
}

.fm-datum-color-wheel-i.active {
  fill: #744589;
}

.fm-datum-color-wheel-j.active {
  fill: #A7305D;
}

.fm-datum-color-wheel-k.active {
  fill: #D03B43;
}

.fm-datum-color-wheel-l.active {
  fill: #DC8336;
}

</style>
