$(document).ready(function() {
  var drake = dragula([document.querySelector(".poem"), document.querySelector(".fridge")]);
  var overlay = $(".overlay")
  var submit = $("#submit")
  var freezer = $(".freezer");
  var fridge = $(".fridge");
  var titlecard = $(".titlecard")
  var start = $("#start");
  var finalString = [];
  var showpoem = $(".showpoem");
  overlay.hide();
  submit.hide();
  callWords(partsOfSpeech);
  $(start).click(function(){
    writeWords(wordList, fridge);
    basicWords(wordCount, basicWordList, fridge);
    rotate($(".fridge > p"), fridge);
    $(".fridge p").hide();
    $(".fridge p").fadeIn("slow");
    $(start).fadeToggle();
    $(submit).fadeToggle("slow");
  });
  drake.on('drop',function(el, target){
    console.log(el);
    console.log(target);
    if (target.className === 'poem'){
      el.style.transform = 'rotate(0deg)';
    }
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
