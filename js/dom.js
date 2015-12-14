$(document).ready(function() {
  dragula([document.querySelector(".freezer"), document.querySelector(".fridge")]);
  var freezer = $(".freezer");
  var fridge = $(".fridge");
  var titlecard = $(".titlecard")
  var start = $("#start");
  $(start).click(function(){
    writePreps(makeRandom(), fridge);
    writeWords(wordList);
  });
  function writeWords(array) {
    array.forEach(function(i){
      fridge.append("<p>" + i.word + "</p>");
    });
  }

});
