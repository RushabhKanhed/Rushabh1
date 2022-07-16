var exp=require("express");

var app=exp();

app.get("/greet",function(req,res){
        
          res.send("<h1>Welcome to web App<h1>")

});

app.listen(9000,function (){console.log("server started at 9000");});