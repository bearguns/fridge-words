$(document).ready(function() {
  dragula([document.querySelector(".freezer"), document.querySelector(".fridge")]);
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
  });
  $("#submit").click(function(){
    showpoem.remove("p");
    revealer(overlay);
    hider(freezer);
    hider(fridge);
    var frozenpeas = $(".freezer > p");
    frozenpeas = jQuery.makeArray(frozenpeas);
    for (var i = 0; i < frozenpeas.length; i++) {
      finalString.push(frozenpeas[i].innerText);
    };
    showpoem.append("<p>"+finalString.toString().split(',').join(' ')+"</p>");
  });
$("#return").click(function(){
  hider(overlay);
  revealer(freezer);
  revealer(fridge);
});

});
