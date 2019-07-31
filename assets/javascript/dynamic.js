
// $(document).ready(function () {
//     var zipCode =" "
//     var queryURL = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ",us&units=imperial&appid="
//     $("#zip-btn").click(function(){

//         var zipCode = $("#zip-code").val();
//         if (zipCode != ''){

//             $.ajax({
//                 url: queryURL,
//                 method:"GET",
//                 dataType: "jsonp",
//                 success:function(data){
//                     console.log(data);
//                 }
//         })

//     } else {
//         $("#error").html('Field cannot be empty');
//     }
//    }); 
// })

$(document).ready(function () {

    var zipcode = '75223'
    var APIkey = 'fb0ce6d825db30974bf096625bf170a2';

    var queryURL = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + ',us&APPID=' + APIkey;

    $("#zip-btn").click(function () {
        var zipCode = $("#zip-code").val();
        if (zipCode != '') {

            $.ajax({
                url: queryURL,
                method: 'GET',
            }).then(function (weather) {
                console.log(weather.name)
            })


        }
    })

})
