var express= require('express');
var mongoose= require('mongoose');

var app = express();

app.get('/', function (res, req, next){
    res.json('Welcome to beranda ');
});

app.listen(3000,function(err){
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Server berjalan pada 3000");
    }

});