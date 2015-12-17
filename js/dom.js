$(document).ready(function() {
  // load dragula into the environment and designate our drag containers
  var drake = dragula([document.querySelector(".poem"), document.querySelector(".fridge")]);
  // jQuery DOM variables
  var overlay = $(".overlay")
  var freezer = $(".freezer");
  var fridge = $(".fridge");
  var titlecard = $(".titlecard")
  var submit = $("#submit")
  var start = $("#start");
  var reset = $("#reset");
  var back = $("#return");
  var finalString = [];
  var showpoem = $(".showpoem");
  // 'set the stage' for the user
  overlay.hide();
  submit.hide();
  callWords(partsOfSpeech);
  // event listeners and controls
  // ## start button
  $(start).click(function(){
    writeWords(wordList, fridge);
    basicWords(2, basicWordList, fridge);
    rotate($(".fridge > p"), fridge);
    $(".fridge p").hide();
    $(".fridge p").fadeIn("slow");
    $(start).fadeToggle("fast");
    $(submit).fadeToggle("fast");
  });
  // ## drag and drop functions
  drake.on('drop',function(el, target){
    if (target.className === 'poem'){
      el.style.transform = 'rotate(0deg)';
    } else if (target.className === 'fridge') {
      el.style.transform = 'rotate('+rotato()+'deg)'
    }
  });
  // ## submit button
  $(submit).click(function(){
    displayToggle(overlay, fridge, freezer);
    displayPoem(concatPoem($(".poem > p")), showpoem);
});
// ## reset button
  $(reset).click(function(){
    $(".poem").empty();
    $(fridge).empty();
    writeWords(wordList, fridge);
    basicWords(2, basicWordList, fridge);
    rotate($(".fridge > p"), fridge);
  });
// ## return button
$(back).click(function(){
  displayToggle(overlay,fridge,freezer);
  $(".showpoem p").remove();
});
// ## share button
$("#share").click(function(){
  tweetString(concatPoem($(".poem > p")));
});
// end of program
});
