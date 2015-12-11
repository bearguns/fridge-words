$(document).ready(function() {
  var freezer = $(".freezer");
  var fridge = $(".fridge");
  var titlecard = $(".titlecard")
  var start = $("#start");

  linkTest();

  $("#start").click(function() {
    ajaxcall();
  });


function linkTest() {
  console.log('js files linked!');
}

function ajaxcall() {
  var ajaxdata = $.ajax({
    url: 'https://wordsapiv1.p.mashape.com/words/?random=true',
    method: "GET",
    datatype: "json",
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", "fuLpcihFgjmshxoWGAv5FDdYHC4kp1fOnKRjsnD03CdkmExrvu"); // Enter here your Mashape key
    },
    success: function(response) {
      freezer.append("<p>" + response['word'] + "</p>");
    }
  })
}

});
