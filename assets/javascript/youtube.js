 $(document).ready(function(){

   
   // google youTube API = AIzaSyA-3_5erpoBYArNCrepyTGpkTeL0HcmtkQ
   // client id = 201425106177-o1mr3s3ql7dok9bh17q5gt2q514am9m5.apps.googleusercontent.com
   //client secret = FdszwLbTRHFDuSD8FbKwvktx
   // Load the IFrame Player API code asynchronously.
   var tag = document.createElement('script');
   tag.src = "https://www.youtube.com/iframe_api";
   var firstScriptTag = document.getElementsByTagName('script')[0];
   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
   
   // Replace the 'ytplayer' element with an <iframe> and
   // YouTube player after the API code downloads.
   var player;
   function onYouTubePlayerAPIReady() {
     player = new YT.Player('player', {
       height: '360',
       width: '640',
       videoId: 'SVSf8fNp_kg',
       playerVars: { 'rel': 0}
      });
    }
    
    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
      event.target.playVideo();
    }
    
    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    
    
    function pauseVideo() {
      player.pauseVideo();
    }
    
    
    function playVideo() {
      player.playVideo();
    }
    
    
    function stopVideo() {
      player.stopVideo();
    }
    
    
    function getPlayerState() {
      return player.getPlayerState();
    }

  })   