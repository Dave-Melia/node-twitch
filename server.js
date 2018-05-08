const express = require('express');
const hbs     = require('hbs');
const axios   = require('axios');

const port = process.env.PORT || 3000

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {

  const apiKey = 'o09javlyzzf1b5sfzuu9p6lwxi8x09r'

  axios({
    method: 'get',
    url: 'https://api.twitch.tv/kraken/games/top?limit=20',
    headers: { 'Client-ID': apiKey }
  }).then((response) => {
    var data = response.data.top;
    res.render('home', {data: data});
  }).catch((e) => {
    console.log(e);
  });
})



app.listen(port, () => {
  console.log('Server running.');
});
