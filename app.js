var express = require('express');
var app = express();
var gsjson = require('google-spreadsheet-to-json');
var prettyjson = require('prettyjson');
var fs = require('fs');
var html = fs.readFileSync('public/apidoc.html');

app.use(express.static(__dirname + '/public'));

// API ROUTES ------------------------------------------------------------------

// API DOCS PAGE
app.get('/', function(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.send(html);});

// GET LIST OF ALL IP DATA
app.get('/api/v1/:id', function(req, res) {
  var id = req.params.id;
    // res.send('Hello World!');
    gsjson({
        spreadsheetId: id,
        // other options...
    }).then(function(result) {
        console.log(result.length);
        console.log(result);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(result, null, 2));
    }).catch(function(err) {
        console.log(err.message);
        console.log(err.stack);
        res.send(err);
    });
});


// GET IP DATA FOR ONE PERSON BY PROFILES ID
app.get('/api/v1/:id/:profilesId', function(req, res) {
  var id = req.params.id;
  var profilesId = req.params.profilesId;
    // res.send('Hello World!');
    gsjson({
        spreadsheetId: id,
        // other options...
    }).then(function(result) {
      for (var i = 0; i<result.length;i++) {
        if (result[i].profilesid == profilesId) {
          res.setHeader('Content-Type', 'application/json');
          console.log(result[i]);
          res.send(JSON.stringify(result[i], null, 2));
        }
      }
    }).catch(function(err) {
        console.log(err.message);
        console.log(err.stack);
        res.send(err);
    });
});

// END OF API ROUTES -----------------------------------------------------------

app.listen(3000, function() {
    console.log('IP API listening on 3000!');
});
