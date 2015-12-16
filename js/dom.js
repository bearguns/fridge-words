$(document).ready(function() {
  // load dragula into the environment and designate our drag containers
  var drake = dragula([document.querySelector(".poem"), document.querySelector(".fridge")]);
  // jQuery DOM variables
  var overlay = $(".overlay")
  var submit = $("#submit")
  var freezer = $(".freezer");
  var fridge = $(".fridge");
  var titlecard = $(".titlecard")
  var start = $("#start");
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
    basicWords(wordCount, basicWordList, fridge);
    rotate($(".fridge > p"), fridge);
    $(".fridge p").hide();
    $(".fridge p").fadeIn("slow");
    $(start).fadeToggle();
    $(submit).fadeToggle("slow");
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
  $("#submit").click(function(){
    displayToggle(overlay, fridge, freezer);
    displayPoem(concatPoem($(".poem > p")), showpoem);
});
// ## return button
$("#return").click(function(){
  displayToggle(overlay,fridge,freezer);
  $(".showpoem p").remove();
});
// end of program
});
