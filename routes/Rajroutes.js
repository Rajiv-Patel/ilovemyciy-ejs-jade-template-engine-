//testing purpose http://localhost:3030/hello/varOne/varTwo (fname & lname) 
//EJS6 = export function hello(req,res){  
exports.hello = function(req,res){                
    console.log("path param:",req.params);
    res.end()
}

//EJS6 = export function home(req,res){  
exports.home = function(req,res){                
    res.render('home',{Rajtitle:"iLoveMycityJade",
    //rander () funciton will lookup view as home.ejs file for content 
                      Rajheadline:"we believe that every city have somthing to say"
  });  
}

//var = function(req,res){ } EJS6 = export function Rajcity(req,res){
exports.Rajcity = function(req,res){
//anthing that follows root route, will be availalb in the varialbe name city, 
//how to retrive it? In the req obj., there is expressJS creted obj call .params
var cityName = req.params.Rajcity; 
//req.params, within which all the parameters(variable of the path) will be available.
  var title, heading;  
  var imageCount=4;
//once we have city name fetch from the route(eg. localhost:3030/paris) 'paris'
//using if and else if statement we will pass the title and heading variable value  
  if(cityName === 'berlin'){ 
    title="berlin";
    heading="berlin:Where love is in the air";
  }else if(cityName==='paris'){
    title="Paris";
    heading="Paris: Good talkers are only found in Paris";    
  }else if(cityName==='madrid'){
    title="Madrid";
    heading="Madrid: Buzz, Beautiful architecture are Football";    
  }else if(cityName==='london'){
    title="London";
    heading="London: Sparkling, still, Food, Gorgeous";
  }else if(cityName==='newyork'){
    title="New York";
    heading="New York: Come to New York to become someone new";
    imageCount=6;
  }

//http://localhost:3030/paris (/:paris = Rajcity)
      res.render('city',{ //rendering city.ejs file passing value to variables in the file
  //render() function will lookup view as city.ejs file for content
//create data object and send when rendering (view) city.ejs page
    Rajtitle:title, //declaring Rajtitle (to): IfElseLocalVar title
    Rajheadline:heading,
    Rajcity:cityName,
    RajnumberOfImages:imageCount});
  }

