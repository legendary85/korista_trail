 
 
 $(document).ready(function(){

  //variables initilized and declared

  var youtubeUrl ='https://www.youtube.com/watch?v=';
  var bikeTips= ['OFoSU1ytTys','sZE8tJnTHhw','deuWgGzNCK8'];

  for(var i = 0; i < bikeTips.length; i++){
    var col = $('<div class="col-sm-6">')
    var video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/"' + bikeTips[i] + 'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      col.append(video);
      $('#videos').append(col);
  }

})    


  
