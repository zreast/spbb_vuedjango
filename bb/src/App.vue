<template>
  <v-app light>
    <v-navigation-drawer
      fixed
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          value="true"
        >
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
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
            <v-btn block color="secondary" dark>Lab Exam</v-btn>
					<v-card>
				    <v-card-title>
				      <h2>Blood Chemistry</h2>
				      <v-spacer></v-spacer>
							<v-btn
					      color="grey"
					      class="white--text"
					    >
					      Refresh
					      <v-icon right dark>refresh</v-icon>
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
	                <v-btn color="error" dark large>Next</v-btn>
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
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
					{ title: 'Dashboard', icon: 'dashboard' },
          { title: 'Do it now!', icon: 'extension' },
          { title: 'Statistic', icon: 'trending_up' },
          { title: 'Email', icon: 'email' },
          { title: 'Social', icon: 'message' }
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
