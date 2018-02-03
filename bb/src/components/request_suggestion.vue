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
	          <v-btn block color="secondary" dark>เป้าหมายของการให้เลือด</v-btn>
						<v-card>
							<v-container fluid>
        				<v-layout row>
									<v-flex xs4>
				          </v-flex>
									<v-flex xs4>
										<v-layout row>
											<h2 style='padding-top:1.4em'>Target PCV</h2>
				              <v-text-field
				                name="input-1"
				                label="Type Here"
				                textarea
												rows=1
												class='pl-2'
				              ></v-text-field>
										</v-layout>
			            </v-flex>
								</v-layout>
							</v-container>
					  </v-card>
						<br>
						<br>
						<div class="text-xs-center">
							<a href='#/suggestion' style='text-decoration: none !important;'>
		           <v-btn color="error" dark large>ยืนยันการขอเลือด</v-btn>
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
        ]
      }
    }
  }
</script>


<style>
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
