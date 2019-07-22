//import module
const express = require("express");
const bodyParser = require("body-parser");
//create the app
var app = new express();
app.use(bodyParser.urlencoded({extended:true}));
//process request for home page
app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html");
});
//return result for the request
app.post("/", function(req, res){
    //console.log(req);
    var num1 = Number(req.body.number1);
    var num2 = Number(req.body.number2);
    var result = num1 + num2;
    res.send("Your result is: " + result);
})
//BMI calculator
app.get("/bmicalculator", function(request, response){
    response.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmiCalculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var result = weight/ (height*height);
    res.send("Your BMI is: " + result);
}) 
//listen to the port
app.listen(3000, function(){
    console.log("Server run successfully at port 3000!")
})
