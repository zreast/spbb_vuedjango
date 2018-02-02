from django.shortcuts import render
import requests

# Create your views here.
def index(request):

	mytoken = "gBTOT2AR0f6s5U6OQwoU71HLMwwWfFDB1hBABhBb"
	myurl = "https://kxwka7o2i1.execute-api.ap-southeast-1.amazonaws.com/prod/testQuery"

	headers = {
	    'x-api-key': 'gBTOT2AR0f6s5U6OQwoU71HLMwwWfFDB1hBABhBb',
	    'petID': '7'
	}
	r = requests.get('https://kxwka7o2i1.execute-api.ap-southeast-1.amazonaws.com/prod/testQuery', headers=headers)

	data = r.json()
	print(data)
	request.data = data
    return render(request, 'index.html')
