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
					</v-layout>
				</v-slide-y-transition>
			</v-container>
		</v-content>
    <v-content>
      <v-container fluid grid-list-md>
				<v-layout row wrap>
		      <v-flex d-flex xs12 sm6 md4>
		        <v-card color="purple" dark>
		          <v-card-title primary class="title">Lorem</v-card-title>
		          <v-card-text
		            v-text="lorem">
		          </v-card-text>
		        </v-card>
		      </v-flex>
		      <v-flex d-flex xs12 sm6 md3>
		        <v-layout row wrap>
		          <v-flex d-flex>
		            <v-card color="indigo" dark>
		              <v-card-text
		                v-text="lorem.slice(0, 70)">
		              </v-card-text>
		            </v-card>
		          </v-flex>
		          <v-flex d-flex>
		            <v-layout row wrap>
		              <v-flex d-flex
		                v-for="n in 2"
		                :key="n"
		                xs12
		              >
		                <v-card
		                  color="red lighten-2"
		                  dark
		                >
		                  <v-card-text
		                    v-text="lorem.slice(0, 40)">
		                  </v-card-text>
		                </v-card>
		              </v-flex>
		            </v-layout>
		          </v-flex>
		        </v-layout>
		      </v-flex>
		      <v-flex d-flex xs12 sm6 md2 child-flex>
		        <v-card color="green lighten-2" dark>
		          <v-card-text
		            v-text="lorem.slice(0, 90)">
		          </v-card-text>
		        </v-card>
		      </v-flex>
		      <v-flex d-flex xs12 sm6 md3>
		        <v-card color="blue lighten-2" dark>
		          <v-card-text
		            v-text="lorem.slice(0, 100)">
		          </v-card-text>
		        </v-card>
		      </v-flex>
		    </v-layout>
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
        drawer: true,
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
				lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
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
