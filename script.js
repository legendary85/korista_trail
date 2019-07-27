
var APIkey = b0b6044b52msh84991d47a52955ap1516e9jsnedb3635cb2ea;

var queryURL = 'https://community-open-weather-map.p.rapidapi.com/weather?zip='+zipcode+ ',us';


$.ajax({
    url: queryURL,
    method: 'GET'

}).then(function(weather){

})