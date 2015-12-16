// small random number
var wordCount = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
// empty array to catch our words from the api
var wordList = [];
// basic connectors for making sentences
var basicWordList = ['the','and','for','while','can','not','do','is',',']
// types of words we will be requesting from the api
var partsOfSpeech = ['noun','verb','adjective','conjunction','interjection','preposition'];
// make API call and put the words into the wordList array
function callWords(array) {
  for (var i = 0; i < array.length; i++) {
    var p = array[i];
    var wordGetter = $.ajax({
      url: 'http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech='+p+'&minCorpusCount=300&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=' + randomWordCount() + '&api_key=78598b23ab7389d7d520b0972b20221b03e702bf7aba96083',
      method: "GET",
      dataType: "json"
    });
    wordGetter.done(function(response) {
      response.forEach(function(w){
        wordList.push(w.word);
      })
    });
  }
}
// write words from wordList to fridge container
function writeWords(array, container) {
  array.forEach(function(i) {
    container.append("<p>" + i + "</p>");
  });
}
// write basic words to page
function basicWords(num, array, container) {
  while (num > 0) {
    for (var i = 0; i < array.length; i++) {
      container.append('<p>'+array[i]+'</p>');
    }
    num--;
  }
}
// concat words in container into a string
function makeArray(container) {
  return $(container).toArray();
}
// hide shit
function hider(element) {
  element.fadeOut("slow");
}
// reveal shit
function revealer(element) {
  element.fadeIn("slow");
}
// change between main and poem-only fullscreen display
function displayToggle(e) {
  for (var i = 0; i < arguments.length; i++) {
    arguments[i].fadeToggle('slow');
  }
}
// random number generator, roughly half returned as negative numbers
function rotato() {
  var num = Math.floor(Math.random() * 5) + 1; // this will get a number between 1 and 99;
  num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
  return num;
}
// apply rotation to elements inside container, with random value thanks to line 59
function rotate(el, container) {
  var elArray = jQuery.makeArray(el);
  for (var i = 0; i < elArray.length; i++) {
    $(elArray[i]).css('transform', 'rotate('+parseInt(rotato())+'deg)');
  }
}
// randomNumbers
function makeRandom() {
  return Math.floor(Math.random() * (4 - 2 + 1)) + 1;
};
// random number generator
function randomWordCount() {
  return Math.floor(Math.random() * (15 - 7 + 1)) + 7;
};
