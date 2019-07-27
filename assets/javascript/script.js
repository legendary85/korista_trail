$(document).ready(function(){




var zipcode = '75228'
var APIkey = 'fb0ce6d825db30974bf096625bf170a2';

var queryURL = 'https://api.openweathermap.org/data/2.5/weather?zip='+ zipcode + ',us&APPID=' + APIkey;


$.ajax({
    url: queryURL,
    method: 'GET'

}).then(function(weather){
    console.log(weather.name)
})


})