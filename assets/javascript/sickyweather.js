


$( window ).scroll(function() {
    // console.log(event)

    var bodyRect = document.body.getBoundingClientRect(),
    elemRect = document.getElementById('weatherwid').getBoundingClientRect(),
    offset   = elemRect.top - bodyRect.top;
    // console.log(offset)
    // console.log(window.scrollY)
    
    if(window.scrollY> offset -150){
        $('#openweathermap-widget-12').addClass('stickThat')

    }else{
        $('#openweathermap-widget-12').removeClass('stickThat')
    }
    
   
  });





  