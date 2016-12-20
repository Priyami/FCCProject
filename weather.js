$(document).ready(function() {

  $("#search").hide();

  $("#search_icon").click(function() {

    $("#search").toggle("slow");
    $("#search").focus();
 //   $("#search_icon").hide();

  });

  $("#search").keypress(function(e) {

    if (e.which == 13) {
      var item = $("#search").val();
      console.log("Key pressed");
      $.ajax({
        url: "https://en.wikipedia.org/w/api.php",
        jsonp: "callback",
        dataType: 'jsonp',
        data: {
          action: "query",
          list: "search",
          srsearch: item,
          srinfo: "suggestion",
          srlimit: "10",
          format: "json"
        },
        xhrFields: {
          withCredentials: true
        },
        success: displayResult
      });
    }
  });

  function displayResult(data) {

    $('#results td').remove();

    $.each(data.query.search, function(index, value) {
      var strTitle = value.title;
      var strSnippet = value.snippet;

      $('#results').append('<tr><td><a>' + strTitle + '</a></tr><<tr><td>' + strSnippet + '</td></tr><td><hr></td>');

    });

  }

  $("div").on("click", "#results tr", function(e) {
    var item = $("#search").val();
    var heading = e.target.innerText;

    $.ajax({
      url: "https://en.wikipedia.org/w/api.php",
      jsonp: "callback",
      dataType: 'jsonp',
      data: {
        action: "query",
        generator: "search",
        gsrsearch: item,
        prop: "info",
        inprop: "url",
        format: "json"
      },
      xhrFields: {
        withCredentials: true
      },
      success: linkResult

    });

    function linkResult(data) {
      $.each(data.query.pages, function(index, value) {

        if (value.title === heading) {

          window.open(value.canonicalurl, 'target_blank');
        }
      });
    }
  });

});
