$(document).ready(function() {
  var freezer = $(".freezer");
  var fridge = $(".fridge");
  var titlecard = $(".titlecard")
  var start = $("#start");
  $(start).click(function(){
    writeWords(wordList);
  });

  function writeWords(array) {
    array.forEach(function(i){
      fridge.append("<p>" + i.word + "</p>");
    });
  }

});
