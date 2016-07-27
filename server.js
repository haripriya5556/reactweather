//var express=require('express');
//var app=express();
//const PORT =process.env.PORT ||3000;
//app.use(function (req, res, next){
//  if(req.headers['x-forwarded-proto']==='http') {
//    next();
//  }
//  else{
//    res.redirect('http://'+req.hostname + req.url);
//  }
//});
//app.use(express.static('public'));
//app.listen(PORT, function () {
 //console.log('express server is upon port '+ PORT);
//});
//});
//});
//});
var express = require('express');
var app     = express();

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
