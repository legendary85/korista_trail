$(document).ready(function () {
    $("#trail").hide();
    $("#latlon").hide();

    $('.btn').on('click', function (check) {
        check.preventDefault()



        var zipcode = $('#zip-code').val().trim()

        var APIkey = 'fb0ce6d825db30974bf096625bf170a2';

        var weatherURL = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&APPID=' + APIkey;


        $.ajax({
            url: weatherURL,
            method: 'GET'

        }).then(function (weather) {
            console.log(weather.coord)



            var apiKey = '200539518-a7f439df1f890a0da50bf22dc41ff20e';
            var lat = weather.coord.lat;
            var lon = weather.coord.lon;
            var hikingURL = 'https://www.hikingproject.com/data/get-trails?lat=' + lat + '&lon=' + lon + '&maxDistance=20&key=' + apiKey;


            $.ajax({
                url: hikingURL,
                method: 'GET'
            }).then(function (hiking) {
                console.log(hiking)
                $('#trail').show();

                var trailResults = hiking.trails;
                for (var i = 0; i < trailResults.length; i++) {
                    console.log(trailResults[i].location);

                    // var divCard = $("<div>");
                    // divCard.addClass("container");

                    // $("#trailHeader").append(divCard);

                    var cardBody = $("<div>");
                    cardBody.addClass("card-body");

                    $("#trailHeader").append(cardBody);

                    var hikeImage = $("<img>");
                    hikeImage.addClass("rounded float-left mr-2");
                    hikeImage.attr("src", trailResults[i].imgSmallMed);

                    cardBody.append(hikeImage);

                    var pLocation = $("<p>").text("Location: " + trailResults[i].location);
                    pLocation.append($("<p>").text("Trail name: " + trailResults[i].name));
                    pLocation.append($("<p>").text("Summary: " + trailResults[i].summary));
                    pLocation.append($("<p>").text("Trail miles in length: " + trailResults[i].length));
                    pLocation.addClass("clearfix");
                    cardBody.append(pLocation);

                };


            });

        });


    });

    $(document).on("click", '.btn', function () {
        $("#trailHeader").empty();
    })

})