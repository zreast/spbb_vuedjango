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
				axios.get('https://kxwka7o2i1.execute-api.ap-southeast-1.amazonaws.com/prod/nokey/result-lastest?petID=5')
		    .then(response => {
		      // JSON responses are automatically parsed.
		      this.posts = response.data
					console.log(response.data)
		    })
		    .catch(e => {
		      this.errors.push(e)
		    })
	    }
	  },
    data () {
      return {
        posts: [],
        errors: []
      }
    }
  }
</script>


<style>
</style>
