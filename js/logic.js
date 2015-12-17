// small random number
var wordCount = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
// empty array to catch our words from the api
// random number generator
function randomWordCount() {
  return Math.floor(Math.random() * (10 - 5 + 1)) + 5;
};
var wordList = [];
// basic connectors for making sentences
var basicWordList = ['the','and','as','Sean','for','while','can','not','do','is','are','were','to','a','an'];
// types of words we will be requesting from the api
var partsOfSpeech = ['noun','verb','adjective','conjunction','interjection','preposition'];
// make API call and put the words into the wordList array
function callWords(array) {
  for (var i = 0; i < array.length; i++) {
    var p = array[i];
    var wordGetter = $.ajax({
      url: 'http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech='+p+'&minCorpusCount=350&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=' + randomWordCount() + '&api_key=78598b23ab7389d7d520b0972b20221b03e702bf7aba96083',
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
// shuffle fridge contents
function shuffleArray(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
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
    arguments[i].fadeToggle();
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
// make string from poem contents
function concatPoem(el) {
var elArray = jQuery.makeArray($(el));
finalString =[];
for (var i = 0; i < elArray.length; i++) {
  finalString.push(elArray[i].innerText);
};
return finalString.toString().split(',').join(' ');
}
// write poem to screen
function displayPoem(string, container) {
  container.append("<p>"+string+"</p>");
}
// make special string for posting to twitter
function tweetString(string){
  var newString = string.split(' ').join('%20');
  $(".twitter-share-button").attr('href', 'https://twitter.com/intent/tweet?text='+newString+' -http://bargeruns.github.io/fridge-words'+'&hashtags=fridgewords');
}
