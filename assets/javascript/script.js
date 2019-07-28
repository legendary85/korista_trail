$(document).ready(function () {



    $('.btn').on('click', function (check) {
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



            console.log(weather)

            console.log(weather.name)
            $('.cityplaceholder').text(weather.name)

            console.log(weather.main.temp)
            $('.tempplaceholder').text(weather.main.temp)


            console.log(weather.weather[0].description)
            $('.descplaceholder').text(weather.weather[0].description)


            console.log(weather.main.humidity)
            $('.humidityPH').text(weather.main.humidity)

            console.log(weather.wind.speed)
            $('.windPH').text(weather.wind.speed + ' mph')


            console.log(weather.sys.sunrise)
            $('.risePH').text(weather.sys.sunrise)



            console.log(weather.sys.sunset)
            $('.setPH').text(weather.sys.sunset)
            var rise = weather.sys.sunset
            var date = new Date(rise*1000)
            console.log(date)

            moment().add(10, 'days').calendar();
            

            
            console.log(weather.visibility)
            $('.visibPH').text(weather.visibility)









        })

    })

})