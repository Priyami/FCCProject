$(document).ready(function(){
	$("#search").hide();

	$("#search_icon").click(function() {
        
        $("#search").toggle("slow");
        $("#search").focus();
        $("#search_icon").hide();
        

    });


    $("#search").keypress(function(e){

        if(e.which == 13){
        	alert("I am here");
        	$('#results td').remove();
        	
    	   var item = $("#search").val();
    	   $.getJSON("https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+item+"&srwhat=text&format=json", function(data){
                 alert(data);
    	         $.each(data.query.search, function(index, value){
                    var strTitle = value.title;
    	   	        var strSnippet = value.snippet;
    	            /*$('<h5>').text(strTitle).appendTo('#title');
                    $('<p>').html(strSnippet).appendTo('#title');
                    $('<a>').appendTo('#results');
                    $('<div>').appendTo('#results');
                    $('<hr>').appendTo('#results');*/

		                  
                            $('#results').append('<tr><td><a>' + strTitle +'</a></tr><<tr><td>'+ strSnippet + '</td></tr><td><hr></td>');

                 });
                 
    	   });
    	}

    });
    
     $("div").on("click", "#results tr", function () {
                   var item = $("#search").val();
                   var heading = $(this).find('td').text();
                   $.getJSON("https://en.wikipedia.org/w/api.php?action=query&generator=search&format=json&gsrsearch="+item+"&prop=info&inprop=url", function(data1){
                      $.each(data1.query.pages, function(index, value){

                 	   if(value.title === heading){
                 	   	window.open(value.canonicalurl, 'target_blank');
                 	   }


                 });
          });	
      });

  

 });