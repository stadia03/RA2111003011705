# RA2111003011705
affordmed online test

**Hello Team,**
I have developed routes for filtering products based on their categories and other variables. However, I encountered an issue when attempting to make API calls to the test company server. Despite multiple attempts using the bearer token in the headers, it consistently returns an "Invalid Authorization Token" error.

I have been using Postman for API testing and am comfortable with it.

*For getting Client ID*
![image](https://github.com/stadia03/RA2111003011705/assets/93596846/4790ed6c-11bd-48c0-a634-b06c88018cc7)

*For the access token*
![image](https://github.com/stadia03/RA2111003011705/assets/93596846/2300254a-545d-4a75-bcdc-aff327c68648)

*But everytime I try to trigger any route it shows Invalid Token, or error 404*
![image](https://github.com/stadia03/RA2111003011705/assets/93596846/ef40a7a0-0a45-416f-9af3-5247ed544d68)

**So, let me explain What I have builded,**

<img src="https://github.com/stadia03/RA2111003011705/assets/93596846/4933a7cf-bab6-467f-939f-e8a8ef2c3f36" width="500">
Here I have defined a route which will take category as params and other variables such as N: no. of products , page no. and sorting criteria  with default values set.

<img src="https://github.com/stadia03/RA2111003011705/assets/93596846/8827e0e8-9522-4441-b658-5b7ac57563a7" width="500">
Next, I have created an array of allProducts and storing the items received from different api calls, into one place and assigning them with unique id using UUID package.

<img src="https://github.com/stadia03/RA2111003011705/assets/93596846/b01e6231-f8d0-4f7d-8699-adf60d4d5b15" width="500">

Sorting them using switch case and returning the desired results as an json object.

I know there will be many buds and fixed needed to be done. But this ACCESS TOKEN PROBLEM didn't let me started . 



[========]


**For the frontend , due to time constraint and that issue with token , I have created a static react site with compoennts but the list is not dynamically fetched from api. sorry.**
![image](https://github.com/stadia03/RA2111003011705/assets/93596846/fd68fde3-c39f-439b-a1e1-cbda4d5f2e70)
Basic Navbar and footer using bootstrap, also used react routes to route between all products page and product search page. 
![image](https://github.com/stadia03/RA2111003011705/assets/93596846/eb37b3ff-7751-48c9-8b91-a83870dc19c8)

 I can fine tune this lot more and make it dynamically work, but time constraints. 
