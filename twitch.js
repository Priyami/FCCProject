$(document).ready(function(){
	 
    var streamArray = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    var streamName, streamStatus; 
$.each(streamArray, function(index, value){
	console.log(value);
$.ajax({
 type: 'GET',
 url: 'https://api.twitch.tv/kraken/streams/'+value,
 dataType: 'JSON',
 headers: {
   'Client-ID': 'xsiplishf3xbea8zo3hrnkxfgflmdq'
 },
 success: displayResult
	 
});
     
   function displayResult(data) {
 	      
 	       
      if (data.stream !== null){
      	     streamLogo = data.stream.channel.logo;
      	     gameName = data.stream.game;
      	     streamName =  data.stream.channel.display_name;
	  	     streamStatus =  data.stream.channel.status;
	  	     streamUrl = data.stream.channel.url;
	  	 	
	  	 	$('#results').append('<tr bgcolor="yellowgreen"><td><img src=' + streamLogo + ' class ="img-circle" width="50" height="50"></td><td><a href='+ streamUrl+ ' target="_blank">'  + streamName + '</a><td>' + gameName + ':' + streamStatus + '</td></tr><hr><hr>');

	     	 
	 
	  }
	 else {

	 	  displayOffline();
           
       }
     
    }

    function displayOffline(data) {

    	$.ajax({
 				type: 'GET',
 				url: 'https://api.twitch.tv/kraken/channels/'+value,
				dataType: 'JSON',
 				headers: {
   					'Client-ID': 'xsiplishf3xbea8zo3hrnkxfgflmdq'
 			    },
 		        success: function(data) {
                     streamLogo = data.logo;
                     streamName =  data.display_name;
                     streamStatus = "offline";
                     streamUrl = data.url;
           
                     $('#results').append('<tr bgcolor="grey"><td><img src='+ streamLogo +' class ="img-circle"  width="50" height="50" /></td><td><a href='+streamUrl+' target="_blank">' + streamName + '</a><td> ' + streamStatus + ' </td></tr><hr><hr>');
          
                }

            });

    }



});

$('#Offline').click(function(e) 
   { 
    

    	  $('#results tr').remove();

    	   $.each(streamArray, function(index, value){
	
          $.ajax({
                type: 'GET',
                url: 'https://api.twitch.tv/kraken/streams/'+value,
                dataType: 'JSON',
                headers: {
                        'Client-ID': 'xsiplishf3xbea8zo3hrnkxfgflmdq'
                },
                success: displayOffline
	 
          });
     
          function displayOffline(data) {
          	

    	  $.ajax({
 				type: 'GET',
 				url: 'https://api.twitch.tv/kraken/channels/'+value,
				dataType: 'JSON',
 				headers: {
   					'Client-ID': 'xsiplishf3xbea8zo3hrnkxfgflmdq'
 			    },
 		        success: function(data) {
                     streamLogo = data.logo;
                     streamName =  data.display_name;
                     streamStatus = "offline";
                     streamUrl = data.url;
           
                     $('#results').append('<tr bgcolor="grey"><td><img src='+ streamLogo +' class ="img-circle"  width="50" height="50" /></td><td><a href='+streamUrl+' target="_blank">' + streamName + '</a><td> ' + streamStatus + ' </td></tr><hr><hr>');
          
                }

            });

        }
      });

    
   });
$('#Online').click(function(e) 
   { 
    

    	  $('#results tr').remove();

    	   $.each(streamArray, function(index, value){
	
          $.ajax({
                type: 'GET',
                url: 'https://api.twitch.tv/kraken/streams/'+value,
                dataType: 'JSON',
                headers: {
                        'Client-ID': 'xsiplishf3xbea8zo3hrnkxfgflmdq'
                },
                success: displayResult
	 
          });
     
         function displayResult(data) {
 	      
 	       
            if (data.stream !== null){
      	     streamLogo = data.stream.channel.logo;
      	     gameName = data.stream.game;
      	     streamName =  data.stream.channel.display_name;
	  	     streamStatus =  data.stream.channel.status;
	  	     streamUrl = data.stream.channel.url;
	  	 	
	  	 	$('#results').append('<tr bgcolor="yellowgreen"><td><img src=' + streamLogo + ' class ="img-circle" width="50" height="50"></td><td><a href='+ streamUrl+ ' target="_blank">'  + streamName + '</a><td>' + gameName + ':' + streamStatus + '</td></tr><hr><hr>');

	     	 
	 
	        }
	    }
      });

    
   });

$("#All").click(function(e){
	$('#results tr').remove();

	$.each(streamArray, function(index, value){
	console.log(value);
$.ajax({
 type: 'GET',
 url: 'https://api.twitch.tv/kraken/streams/'+value,
 dataType: 'JSON',
 headers: {
   'Client-ID': 'xsiplishf3xbea8zo3hrnkxfgflmdq'
 },
 success: displayResult
	 
});
     
   function displayResult(data) {
 	      
 	       
      if (data.stream !== null){
      	     streamLogo = data.stream.channel.logo;
      	     gameName = data.stream.game;
      	     streamName =  data.stream.channel.display_name;
	  	     streamStatus =  data.stream.channel.status;
	  	     streamUrl = data.stream.channel.url;
	  	 	
	  	 	$('#results').append('<tr bgcolor="yellowgreen"><td><img src=' + streamLogo + ' class ="img-circle" width="50" height="50"></td><td><a href='+ streamUrl+ ' target="_blank">'  + streamName + '</a><td>' + gameName + ':' + streamStatus + '</td></tr><hr><hr>');

	     	 
	 
	  }
	 else {

	 	  displayOffline();
           
       }
     
    }

    function displayOffline(data) {

    	$.ajax({
 				type: 'GET',
 				url: 'https://api.twitch.tv/kraken/channels/'+value,
				dataType: 'JSON',
 				headers: {
   					'Client-ID': 'xsiplishf3xbea8zo3hrnkxfgflmdq'
 			    },
 		        success: function(data) {
                     streamLogo = data.logo;
                     streamName =  data.display_name;
                     streamStatus = "offline";
                     streamUrl = data.url;
           
                     $('#results').append('<tr bgcolor="grey"><td><img src='+ streamLogo +' class ="img-circle"  width="50" height="50" /></td><td><a href='+streamUrl+' target="_blank">' + streamName + '</a><td> ' + streamStatus + ' </td></tr><hr><hr>');
          
                }

            });

    }



});
});




});

