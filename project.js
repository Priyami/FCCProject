$(document).ready(function() {

  $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(data) {

    $(".quote").html("\"" + data.quote + "<br\>-" + data.author);
    var text = data.quote;

    $(".page").css('background-color', colr());
    $(".box").css('background-color', "white");  
    var mynewlink = "<button><a id = 'tweetlink' class='twitter-share-button' > tweet </a></button>";

    $("#quotediv").append(mynewlink);  
    var urllink='https://twitter.com/intent/tweet'+'?text='+data.quote+' -- by '+data.author;
     var res = encodeURI(urllink);

    $('#tweetlink').attr('href',res);  
 
	
   var mytweet ="<a href='https://twitter.com/share'+?text='data.quote+' -- by '+data.author; id='mytweet' class='twitter-share-button' data-show-count='false'>Tweet</a>";
 		 	 $("#quotediv").append(mytweet);

           //var urllink='https://twitter.com/share';

       $('#mytweet').attr('data-text', text);

  });

  $(".btn").on("click", function() {
    $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(data) {
      $(".quote").html("\"" + data.quote + "<br\>-" + data.author);
      $(".page").css('background-color', colr());
      $(".box").css('background-color', "white");  
      var urllink='https://twitter.com/intent/tweet'+'?text='+data.quote+' -- by '+data.author;
     var res = encodeURI(urllink);
    $('#tweetlink').attr('href',res);  
	    
    });  
  });

   

});


$(document).load(function() {
	$('a[data-text]').each(function() {
	      $(this).attr('data-text', text);
	    });
});

function colr() {
  var hexChars = '0123456789ABCDEF'.split(''); // will split each character
  var hexColor = '#';
  for (var i = 0; i < 6; i++) {
    hexColor += hexChars[Math.round(Math.random() * 15)]; // 0..15 = 16 hex range
  }
  return hexColor;
}