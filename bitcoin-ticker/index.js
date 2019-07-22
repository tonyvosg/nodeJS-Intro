const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = new express();
app.use(bodyParser.urlencoded({extended:true}));
//route - request - response
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})
app.post("/", function(req, res){
    //get request data
    var crypto = req.body.crypto;
    var fiat = req.body.fiat;
    var amount = req.body.amount;
    //call API to get data from apiv2 site
    var baseURL = "https://apiv2.bitcoinaverage.com/convert/global";
    //var finalURL = baseURL + crypto + fiat;
    var options = {
        url : baseURL,
        method: "GET",
        qs:{
            from:crypto,
            to:fiat,
            amount:amount,
        }
    }
    //call API
    request(options, function(error, response, body){
        if(!error && response.statusCode==200){
            console.log(response.statusCode);
            var data = JSON.parse(body);
            var current_time = data.time;
            var price = data.price;  //do less talking and buy more bitcoin
            console.log(price);
            //var week_avarage = data.avarages.week;
            res.write("<html>")
            res.write("<h1> The current timestamp is: "+ current_time +" </h1> <br>");
            res.write("<h1> The current price of "+ crypto + " is " + price + " " + fiat + ".</h1>");
            res.write("</html>")
            res.send();
        }
    })
}) 

//listen to the web
app.listen(3000, function(){
    console.log("Server is running on port 3000!.");
}) 
