$(document).ready(function() {
  dragula([document.querySelector(".freezer"), document.querySelector(".fridge")]);
  $(".overlay").hide();
  var freezer = $(".freezer");
  var fridge = $(".fridge");
  var titlecard = $(".titlecard")
  var start = $("#start");
  var finalString = [];
  $(start).click(function(){
    writePreps(makeRandom(), fridge);
    writeWords(wordList, fridge);
  });
  $("#submit").click(function(){
    $(".overlay").show();
    var frozenpeas = $(".freezer > p");
    frozenpeas = jQuery.makeArray(frozenpeas);
    for (var i = 0; i < frozenpeas.length; i++) {
      finalString.push(frozenpeas[i].innerText);
    };
    titlecard.append(finalString.toString().split(',').join(' '));
  });
});
