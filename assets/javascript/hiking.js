$(document).ready(function(){

var apiKey = '200539518-a7f439df1f890a0da50bf22dc41ff20e';
var lat = '32.776665';
var lon = '-96.796989';
var queryURL = 'https://www.hikingproject.com/data/get-trails?lat=' + lat + '&lon=' + lon + '&maxDistance=30&key=' + apiKey;


$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function(hiking){
    console.log(hiking)

    
});




})