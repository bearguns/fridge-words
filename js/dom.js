$(document).ready(function() {
  dragula([document.querySelector(".poem"), document.querySelector(".fridge")]);
  var overlay = $(".overlay")
  var freezer = $(".freezer");
  var fridge = $(".fridge");
  var titlecard = $(".titlecard")
  var start = $("#start");
  var finalString = [];
  var showpoem = $(".showpoem");
  overlay.hide();
  $(start).click(function(){
    writePreps(makeRandom(), fridge);
    writeWords(wordList, fridge);
    rotate(fridge);
  });
  $("#submit").click(function(){
    displayToggle(overlay, fridge, freezer);
    var frozenpeas = $(".poem > p");
    frozenpeas = jQuery.makeArray(frozenpeas);
    finalString =[];
    for (var i = 0; i < frozenpeas.length; i++) {
      finalString.push(frozenpeas[i].innerText);
    };
    finalString = finalString.toString().split(',').join(' ');
    showpoem.append("<p>"+finalString+"</p>");
  });
$("#return").click(function(){
  displayToggle(overlay,fridge,freezer);
  $(".showpoem p").remove();
});
$("#share").click(function(){
  tweet(finalString);
})
});
