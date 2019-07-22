//import module
const express = require("express");
//create an app
const app = express();

//listen on the port, call-back function
app.listen(3000, function(){
    console.log("Server start at port 3000!");
});

//homepage
app.get("/", function(request, response){
    console.log(request)
    response.send("<h1> Hello world! <h1>");
})

//contact
app.get("/contact", function(request,response){
    response.send("<h1> Contact me at tung007@e.ntu.edu.sg</h1>");
});

//contact
app.get("/about", function(request,response){
    response.send("<h1> My name is Tony and I love beer, coffe and code");
});

//hobbies
app.get("/hobbies", function(request,response){
    response.send("<ol> <li>Coffee</li> <li>Beer</li> <li>Code</li> </ol>");
});



