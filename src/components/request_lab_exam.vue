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
							  <div class="circle done">
							    <span class="label"></span>
							    <span class="title">Profile</span>
							  </div>
							</a>
						  <span class="bar done"></span>
							<a href='/lab_exam'>
							  <div class="circle active">
							    <span class="label"></span>
							    <span class="title">Lab</span>
							  </div>
							</a>
						  <span class="bar half"></span>
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
	          <v-btn block class='bg__mdteal' dark>Lab Exam</v-btn>
						<v-card>
					    <v-card-title>
					      <h2>Blood Chemistry</h2>
					      <v-spacer></v-spacer>
								<v-btn
						      color="grey"
						      class="white--text"
						    >
						      ล่าสุด
						      <v-icon right dark>update</v-icon>
						    </v-btn>
								<v-btn
						      color="grey"
						      class="white--text"
						    >
						      ทั้งหมด
						      <v-icon right dark>sort</v-icon>
						    </v-btn>
					    </v-card-title>
					    <v-data-table
					        v-bind:headers="headers"
					        v-bind:items="t_items"
					        v-bind:search="search"
					      >
					      <template slot="items" slot-scope="props">
					        <td>
					          <v-edit-dialog
					            lazy
					          > {{ props.item.name }}
					            <v-text-field
					              slot="input"
					              label="Edit"
					              v-model="props.item.name"
					              single-line
					              counter
					              :rules="[max25chars]"
					            ></v-text-field>
					          </v-edit-dialog>
					        </td>
					        <td class="text-xs-right">{{ props.item.value }}</td>
					        <td class="text-xs-right">{{ props.item.value_oum_cd }}</td>
					        <td class="text-xs-right">{{ props.item.critical_low }}</td>
					        <td class="text-xs-right">{{ props.item.low }}</td>
					        <td class="text-xs-right">{{ props.item.high }}</td>
					        <td class="text-xs-right">{{ props.item.critical_high }}</td>
					        <td class="text-xs-right">
					          <v-edit-dialog
					            @open="tmp = props.item.iron"
					            @save="props.item.iron = tmp || props.item.iron"
					            large
					            lazy
					          >
					            <div>{{ props.item.iron }}</div>
					            <div slot="input" class="mt-3 title">Update Iron</div>
					            <v-text-field
					              slot="input"
					              label="Edit"
					              v-model="tmp"
					              single-line
					              counter
					              autofocus
					              :rules="[max25chars]"
					            ></v-text-field>
					          </v-edit-dialog>
					        </td>
					      </template>
					      <template slot="pageText" slot-scope="{ pageStart, pageStop }">
					        From {{ pageStart }} to {{ pageStop }}
					      </template>
					    </v-data-table>
					  </v-card>
						<br>
						<br>
						<div class="text-xs-center">
							<a href='/suggestion' style='text-decoration: none !important;'>
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
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'iTaam CRM tools for Animal Hospital',
				max25chars: (v) => v.length <= 25 || 'Input too long!',
        tmp: '',
        search: '',
        pagination: {},
        headers: [
          {
            text: 'Testd',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'value', value: 'value' },
          { text: 'value_oum_cd', value: 'value_oum_cd' },
          { text: 'critical low', value: 'critical_low' },
          { text: 'low', value: 'low' },
          { text: 'high', value: 'high' },
          { text: 'critical high', value: 'critical_high' }
        ],
        t_items: [
          {
						name: 'CREA',
            value: 0.6,
            value_oum_cd: 'mg/dL',
            critical_low: 0.0,
            low: 0.5,
            high: 1.8,
            critical_high: 5.0
          },
          {
						name: 'BUN',
            value: 11,
            value_oum_cd: 'mg/dL',
            critical_low: 0,
            low: 7,
            high: 27,
            critical_high: 100
          },
          {
						name: 'BUN/CREA',
            value: 19,
            value_oum_cd: '',
            critical_low: '',
            low: '',
            high: '',
            critical_high: ''
          },
          {
						name: 'ALT',
            value: 33,
            value_oum_cd: 'U/L',
            critical_low: 0,
            low: 10,
            high: 125,
            critical_high: 2000
          },
          {
						name: 'AST',
            value: 38,
            value_oum_cd: 'U/L',
            critical_low: 0,
            low: 0,
            high: 50,
            critical_high: 1500
          },
          {
						name: 'ALKP',
            value: 65,
            value_oum_cd: 'U/L',
            critical_low: 0,
            low: 23,
            high: 212,
            critical_high: 5000
          }
        ]
      }
    }
  }
</script>


<style>
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
	}
	.progress .circle,
	.progress .bar {
	  display: inline-block;
	  background: #fff;
	  width: 28px; height: 28px;
	  border-radius: 40px;
	  border: 1px solid #d5d5da;
	}
	.progress .bar {
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
	.progress .circle .label {
	  display: inline-block;
	  width: 20px;
	  height: 20px;
	  line-height: 32px;
	  border-radius: 32px;
	  margin-top: 3px;
	  color: #b5b5ba;
	  font-size: 17px;
	}
	.progress .circle .title {
		color: #b5b5ba;
	  font-size: 13px;
	  line-height: 30px;
	}

	/* Done / Active */
	.progress .bar.done,
	.progress .circle.done {
	  background: #eee;
	}
	.progress .bar.active {
	  background: linear-gradient(to right, #EEE 40%, #FFF 60%);
	}
	.progress .circle.done .label {
	  color: #FFF;
	  background: #8bc435;
	  box-shadow: inset 0 0 2px rgba(0,0,0,.2);
	}
	.progress .circle.done .title {
	  color: #444;
	}
	.progress .circle.active .label {
	  color: #FFF;
	  background: #0c95be;
	  box-shadow: inset 0 0 2px rgba(0,0,0,.2);
	}
	.progress .circle.active .title {
	  color: #0c95be;
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
