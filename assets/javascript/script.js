$(document).ready(function () {

    $('.weather').hide()
    $('.tabledos').hide()


    $('#zip-btn').on('click', function (check) {
        check.preventDefault()




        console.log('button works')

        var zipcode = $('#zip-code').val().trim()
        console.log(zipcode)

        // var zipcode = '75228'


        var APIkey = 'fb0ce6d825db30974bf096625bf170a2';

        var queryURL = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&APPID=' + APIkey;


        $.ajax({
            url: queryURL,
            method: 'GET'

        }).then(function (weather) {


            // city///////////////////////////////////////////////
            console.log(weather)

            console.log(weather.name)
            $('.cityplaceholder ').text(weather.name)


            // temperature///////////////////////
            console.log(weather.main.temp)

            var temperature = weather.main.temp;
            var temp = (temperature - 273.15) * 1.80 + 32;
            console.log(temp + 'F')
            var roundTemp = Math.round(temp * 10) / 10
            console.log(roundTemp)
            $('.tempplaceholder').text(roundTemp + ' F')


            // weather descriptio//////////////////////

            console.log(weather.weather[0].description)
            var weatherDesc = weather.weather[0].description
            $('.descplaceholder').text(weatherDesc)

            // humidity//////////////////////////////////////////////////
            console.log(weather.main.humidity)
            $('.humidityPH').text(weather.main.humidity + ' %')


            // wind///////////////////////////////////////////////

            console.log(weather.wind.speed)
            $('.windPH').text(weather.wind.speed + ' mph')

            // sunrise////////////////////////////////////////////////////////////
            console.log(weather.sys.sunrise)
            $('.risePH').text(weather.sys.sunrise)

            var rise = weather.sys.sunrise
            var convertedDate = new Date(rise * 1000)


            console.log(convertedDate)

            console.log(convertedDate.getHours())
            var hrs = convertedDate.getHours()

            console.log(convertedDate.getMinutes())
            var min = (convertedDate.getMinutes())

            var time = hrs + ' : ' + min

            console.log(time)
            $('.risePH').text(time + ' AM')



            // sunset//////////////////////////////////////////////////////////////////
            console.log(weather.sys.sunset)
            // $('.setPH').text(weather.sys.sunset)

            var set = weather.sys.sunset
            var convertedDate = new Date(set * 1000)


            console.log(convertedDate)

            console.log(convertedDate.getHours())
            var hrs = convertedDate.getHours()

            console.log(convertedDate.getMinutes())
            var min = (convertedDate.getMinutes())

            var time = hrs + ' : ' + min

            console.log(time)
            $('.setPH').text(time + ' PM')





            //temperature////////////////////////////////////////////////////////////////////

            console.log(weather.main.temp_max)
            var tempo = weather.main.temp_max
            var maxitemp = (tempo - 273.15) * 1.80 + 32;
            console.log(maxitemp + 'F')
            // $('.maxtempPH').text(maxitemp + ' F')

            var roundMaxiTemp = Math.round(maxitemp * 10) / 10
            console.log(roundMaxiTemp)
            $('.maxtempPH').text(roundMaxiTemp + ' F')


            // lon and lat//////////////////////////////////////////

            console.log(weather.coord.lat)
            console.log(weather.coord.lon)

            var currentLat = weather.coord.lat
            var currentLon = weather.coord.lon

            $('.lonplaceholder').text(weather.coord.lon)
            $('.latplaceholder').text(weather.coord.lat)






            // Gif section/////////////////////////////////////////////////////////////////

            // var search = ('weather ' + weatherDesc + ' ' + weather.name)
            // var search = (' weather ' + weatherDesc)
            var search = ('jogging ')
            console.log(search)
            var gifURL = "https://api.giphy.com/v1/gifs/search?q=" +
                search + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";


            $.ajax({
                url: gifURL,
                method: 'GET'
            }).then(function (gifs) {

                var gif = gifs.data
                console.log(gif)



                for (var i = 0; i < gif.length; i++) {
                    console.log('pic is called')
                    var img = gif[3].images.fixed_height.url;
                    console.log(gif[3].rating)

                }

                var picDiv = $('<img>')
                picDiv.addClass('imagClass')
                picDiv.attr('src', img)

                $('.imageDiv').html(picDiv)
            })

            // display weather card///////////////////////////////////////
            $('.weather').show()



        })



    })





})