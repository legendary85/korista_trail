$(document).ready(function () {
    // Hide the trail Id in html
    $("#trail").hide();
    // $("#latlon").hide();

    // When the class btn is clicked this function happens
    $('.btn').on('click', function (check) {
        check.preventDefault()


        //variables to store the weather API key, zipcode to use in ajax url
        var zipcode = $('#zip-code').val().trim()

        var APIkey = 'fb0ce6d825db30974bf096625bf170a2';

        var weatherURL = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&APPID=' + APIkey;

        //using weatherURL variable for url:
        $.ajax({
            url: weatherURL,
            method: 'GET'

        }).then(function (weather) {
            //console log the weather return and coord that displays lat and lon
            console.log(weather.coord)


            //variables to store the Trail API key and lat/lon info from weather API
            var apiKey = '200539518-a7f439df1f890a0da50bf22dc41ff20e';
            var lat = weather.coord.lat;
            var lon = weather.coord.lon;
            var hikingURL = 'https://www.hikingproject.com/data/get-trails?lat=' + lat + '&lon=' + lon + '&maxDistance=20&key=' + apiKey;

            //using hikingURL variable for url:
            $.ajax({
                url: hikingURL,
                method: 'GET'

            }).then(function (hiking) {
                //console log the return from hiking API
                console.log(hiking)

                //show ID trail in HTML
                $('#trail').show();

                //Make a variable to cycle through the array
                var trailResults = hiking.trails;
                for (var i = 0; i < trailResults.length; i++) {
                    //console log the array return
                    console.log(trailResults[i].location);

                    //create a variable that creates a div in html
                    var cardBody = $("<div>");
                    //add a class to new div variable cardBody
                    cardBody.addClass("card-body");

                    //append new div to ID trailHeader
                    $("#trailHeader").append(cardBody);

                    //create a variable that creates a img in html, add class, add src
                    var hikeImage = $("<img>");
                    hikeImage.addClass("rounded float-left mr-2");
                    hikeImage.attr("src", trailResults[i].imgSmallMed);

                    //append new img to new div cardBody
                    cardBody.append(hikeImage);

                    //create a variable that creates a H4 in HTML that stores the location from trail API as the header
                    var pLocationHeader =$("<h4>").text("Location: " + trailResults[i].location);
                    //append the H4 to cardBody div
                    cardBody.append(pLocationHeader);

                    //create a variable that creates a <p> in HTML that stores the trail name, summary, and trail length info
                    var pLocation = $("<p>").text("Trail name: " + trailResults[i].name);
                    pLocation.append($("<p>").text("Summary: " + trailResults[i].summary));
                    pLocation.append($("<p>").text("Trail miles in length: " + trailResults[i].length));
                    //adds a class clearfix to prevent next div information from colliding with this div
                    pLocation.addClass("clearfix");
                    //append the <p> to cardBody div
                    cardBody.append(pLocation);

                };


            });

        });


    });

    $(document).on("click", '.btn', function () {
        $("#trailHeader").empty();
    })

})