<template>
	<v-app light id="inspire">
    <v-container>
      <v-btn color="primary" @click="callAPI">Test API</v-btn>
      <br>
      {{posts}}
    </v-container>
  </v-app>
</template>

<script>
	/* eslint-disable */
  import axios from 'axios'

  export default {
    methods: {
	    callAPI () {
				this.postBody.petID = 8
				axios.post(`https://myfuckingapi.herokuapp.com/api/results/lastest-result`, {
		      body: this.postBody
		    })
		    .then(response => {
					this.posts = response.data
					console.log(this.posts)
				})
		    .catch(e => {
		      this.errors.push(e)
		    })
	    }
	  },
    data () {
      return {
				posts: [],
				postBody: [],
      	errors: []
      }
    }
  }
</script>


<style>
</style>
