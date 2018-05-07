const express = require('express');
const hbs     = require('hbs');
const axios   = require('axios');

const port = process.env.PORT || 3000

var app = express();
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {

  axios({
    method: 'get',
    url: 'https://api.twitch.tv/kraken/games/top',
    headers: { 'Client-ID': '<API KEY>'}
  }).then((response) => {
    var data = response.data.top;
    console.log(data)
    res.render('home', {data: data});
  }).catch((e) => {
    console.log(e);
  });
})



app.listen(port, () => {
  console.log('Server running.');
});
