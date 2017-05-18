# First time setup:

Make sure you have node installed.

#### Clone this repo:
```
git clone https://github.com/tjk1021/ip_api
```
#### Run following commands:
```
cd ip_api
```
```
npm install
```
# To start the server:
```
node app.js
```
- In your browser, navigate to http://localhost:3000
# More info:
This api uses [google-spreadsheet-to-json](https://www.npmjs.com/package/google-spreadsheet-to-json) npm package for parsing google sheets data to json.
# Using the API:
Below is the link to the google spreadsheet where the IP data is stored. The sheet is open to whoever has the link at the moment.
- https://docs.google.com/spreadsheets/d/13snUyigmel62zMB3dLxi7i90oLOrc5WN6P97HGifqhc/edit#gid=0
- the google spreadsheet id is the string in the google url.
- the profiles id is fake at the moment for demo purposes. its the last column in the spreadsheet.
#### Getting Data:
Gets list of all IP data
```
GET api/v1/{google-spreadsheet-id}
```
Gets IP data for individual faculty member
```
GET api/v1/{google-spreadsheet-id}/{profilesId}
```
