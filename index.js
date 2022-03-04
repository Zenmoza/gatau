const express = require('express')
var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req,res) { 
return res.send('Babi')
})

app.listen(8000, function(){
  console.log(`Localhost:8000`)
});

module.exports = app;

