var express=require('express');
var app=express();


app.use(express.static('public'));
app.listen($PORT, function(){
 console.log('express server is upon $PORT ');
});
