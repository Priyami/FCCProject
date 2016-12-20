$(function() {  
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else { 
        document.getElementById("error").innerHTML = "Geolocation is not supported by this browser.";
    }


function showPosition(position) {

    var crd = position.coords;
            $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+crd.latitude+"&lon="+crd.longitude+"&appid=d5cf33490dffb5e8eb1bbb766241e0d6&units=metric", function(data){
            var icon = data.weather[0].icon + ".png";
            $("#weatherCelci").html("Temperature  " + Math.round(data.main.temp) + "&#8451" + "</br>City " + data.name + "," + data.sys.country + "</br>" + data.weather[0].main + "</br> <img src='http://openweathermap.org/img/w/"+icon +"' >" );
            });
    
    $("#celci").click(function () {
        if ($("#celci").is(":checked")) {
            var crd = position.coords;
            $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+crd.latitude+"&lon="+crd.longitude+"&appid=d5cf33490dffb5e8eb1bbb766241e0d6&units=metric", function(data){
            var icon = data.weather[0].icon + ".png";
            $("#weatherCelci").html("Temperature  " + Math.round(data.main.temp) + "&#8451" + "</br>City " + data.name + "," + data.sys.country + "</br>" + data.weather[0].main + "</br> <img src='http://openweathermap.org/img/w/"+icon +"' >" );
            });
        }
       
    });
    $("#faren").click(function() {
        if($("#faren").is(":checked")) {
             var crd = position.coords;
            $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+crd.latitude+"&lon="+crd.longitude+"&appid=d5cf33490dffb5e8eb1bbb766241e0d6&units=imperial", function(data){
            var icon = data.weather[0].icon + ".png";
            $("#weatherCelci").html("Temperature  " + Math.round(data.main.temp) + "&#8457" + "</br>City " + data.name + "," + data.sys.country + "</br>" + data.weather[0].main + "</br> <img src='http://openweathermap.org/img/w/"+icon +"' >" );
            });

        }
    });
    
  }

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
             document.getElementById("error").innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
             document.getElementById("error").innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
             document.getElementById("error").innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
             document.getElementById("error").innerHTML = "An unknown error occurred."
            break;
    }
 }


});