var express = require('express')
var app = express();
app.set('view engine', 'jade')
app.set('views','./')
app.use(express.static(__dirname + '/'))
app.get('/',function(req,res){
  res.render('index')
})


app.listen(4800)
