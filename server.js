var express=require('express');
var app=express();
const PORT =process.env.port ||3000;
app.use(function (req, res, next){
  if(req.headers['x-forwarded-proto']==='http') {
    next();
  }
  else{
    res.redirect('http://'+req.hostname + req.url);
  }
  
});
//app.use(express.static(__dirname + '/'));

//app.listen(process.env.PORT || 8080);

app.use(express.static('public'));
app.listen(PORT, function (){
 console.log('express server is upon port '+PORT);
});
