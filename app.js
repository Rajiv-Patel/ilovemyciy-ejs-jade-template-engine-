var express = require('express'); //import express
var app = express(); //assignee express to our app.
var Rajroutes=require('./routes/Rajroutes'); //importing Rajroutes.js file
//app.set('view engine', 'ejs');//using ejs template engine 
app.set('view engine', 'jade');//using ejs template engine 
//we did not import ejs engine, express has inbuilt support to find out
//where the ejs package is. we just use set method to declare EJS

app.use(express.static(__dirname + '/raj-public'));
//using static serving and name our public folder to add files 
//http://localhost:3030/images/berlin/berlin-1.jpg (its static serving url)
//http://localhost:3030/raj-public/images/berlin/berlin-1.jpg (no need to type)
//nothing else beside raj-public for public, rest are hidden to http public if any

//what is path parameters? Example using two variable path params
app.get('/hello/:fname/:lname', Rajroutes.hello);//sending parameters as variable ontop of routlinks 
//two variable name given http://localhost:3030/hello/varOne/varTwo (fname & lname)

app.get('/',Rajroutes.home    //variable.import(homeVarialbe).value 
/*
roote route '/', function (Rajroutes.home)
//moving below function into Routes.js as less clutter in app.js file. 
function(req,res){
    res.render('home',{Rajtitle:"iLoveMycity",
      //render() function will lookup view as home.ejs file for content 
                      Rajheadline:"we believe that every city have somthing to say"
  });  
}*/
);

//how can we make city links(routs) more generic, and automated with one funciton  
//uinsg if and else statmetns for each city rather than separteh function like home
//path parameters in expressJS, using :(colan) prefix to variable name on path
//city is variable name on the path, :(colon) is indicating city is a variable 
app.get('/:Rajcity',Rajroutes.Rajcity  //variable(Rajroutes).import(cityVarialbe).value

/*
//moving below function into Routes.js as less clutter in app.js file. 
function(req,res){//req obj.//we specify route, 
  //anthing that follows root route, will be availalb in the varialbe name city
  //how to retrive it? In the req obj., there is expressJS creted obj call .params
  var cityName = req.params.city;  
  var title, heading;  
  var imageCount=4;  
//req.params, withing which all the parameters(variable of the path) will be availabe.
//once we have city name fetch from the route(eg. localhost:3030/paris) 'paris'
//using if and else if statment we will pass the title and heading variable value 
  if(cityName === 'berlin'){ 
    title="berlin";
    heading="berlin:Where love is in the air";
  }
  else if(cityName==='paris'){
    title="Paris";
    heading="Paris: Good talkers are only found in Paris";    
  }
  else if(cityName==='madrid'){
    title="Madrid";
    heading="Madrid: Buzz, Beautiful architecture are Football";    
  }
  else if(cityName==='london'){
    title="London";
    heading="London: Sparkling, still, Food, Gorgeous";
  }
  else if(cityName==='newyork'){
    title="New York";
    heading="New York: Come to New York to become someone new";
    imageCount=6;
  }
//http://localhost:3030/paris (/:paris = Rajcity)
 res.render('city',{//rendering city.ejs file passing value to variables in the file
//render() function will lookup view as city.ejs file for content
//create data object and send when rendering (view) city.ejs page
      Rajtitle:title, //assigning Rajtitle :(to) IfElseLocalVar title
      Rajheadline:heading,
      Rajcity:cityName,
      RajnumberOfImages:imageCount});
  }
  */

  );
var port = process.env.PORT || 3031;

var server = app.listen(port,function(req,res){
  console.log("Catch the action at http://localhost:"+port);
});
module.exports = app;




