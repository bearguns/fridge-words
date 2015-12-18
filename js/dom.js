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
  var shuffle = $("#shuffle");
  var poem = $(".poem");
  var newwords = $("#newwords");
  var buttons = $(".buttons");
  var finalString = [];
  var showpoem = $(".showpoem");
  // 'set the stage' for the user
  overlay.hide();
  submit.hide();
  shuffle.hide();
  newwords.hide();
  callWords(partsOfSpeech);
  // event listeners and controls
  // ## drag and drop functions
  drake.on('drop',function(el, target){
    if (target.className === 'poem'){
      el.style.transform = 'rotate(0deg)';
    } else if (target.className === 'fridge') {
      el.style.transform = 'rotate('+rotato()+'deg)'
    }
  });
  // ## start button
  $(start).click(function(){
    writeWords(wordList, fridge);
    basicWords(2, basicWordList, fridge);
    rotate($(".fridge > p"), fridge);
    $(".fridge p").hide();
    $(".fridge p").fadeIn("slow");
    $(start).fadeToggle("fast");
    $(submit).fadeToggle("fast");
    $(shuffle).fadeToggle("fast");
    $(newwords).fadeToggle("fast");
  });

  // ## submit button
  $(submit).click(function(){
    displayToggle(buttons, $(".fridge p"), poem, $(".overlay"));
    displayPoem(concatPoem($(".poem > p")), showpoem);
});
// ## shuffle button
$(shuffle).click(function(){
  $(".fridge p").remove();
  shuffleArray(wordList);
  basicWords(2, basicWordList, fridge);
  writeWords(wordList, fridge);
  rotate($(".fridge > p"), fridge);
});
// ## reset button
  $(reset).click(function(){
    $(".fridge p").remove();
    $(".poem").empty();
    writeWords(wordList, fridge);
    basicWords(2, basicWordList, fridge);
    rotate($(".fridge > p"), fridge);
  });
// ## new words button
$(newwords).click(function(){
  $(".fridge p").remove();
  wordList = [];
  callWords(partsOfSpeech);
  setTimeout(function(){
    writeWords(wordList, fridge);
  },800);
  setTimeout(function(){
    basicWords(2, basicWordList, fridge),
    rotate($(".fridge > p"), fridge)},800);
});
// ## return button
$(back).click(function(){
  displayToggle(buttons, $(".fridge p"), poem, $(".overlay"));
  $(".showpoem p").remove();
});
// ## share button
$("#share").click(function(){
  tweetString(concatPoem($(".poem > p")));
});
// end of program
});
