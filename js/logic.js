var wordCount = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
var wordList = [];
var partsOfSpeech = ['noun','verb','adjective','conjunction','interjection','preposition'];
//get all the words
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
      console.log(wordList);
    });
  }
}
// write words to fridge container
function writeWords(array, container) {
  array.forEach(function(i) {
    container.append("<p>" + i + "</p>");
  });
}
// write words to page
function writePreps(num, container) {
  while (num > 0) {
    $(container).append("<p>the</p>");
    $(container).append("<p>while</p>");
    $(container).append("<p>can\'t</p>");
    $(container).append("<p>did</p>");
    $(container).append("<p>not</p>");
    $(container).append("<p>for</p>");
    $(container).append("<p>and</p>");
    $(container).append("<p>is</p>");
    $(container).append("<p>are</p>");
    $(container).append("<p>not</p>");
    $(container).append("<p>, </p>");
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

function displayToggle(element1, element2, element3) {
  element1.fadeToggle("slow");
  element2.fadeToggle("slow");
  element3.fadeToggle("slow");
}
// post to twitter
function tweet(string) {
  $.ajax({
    url: "https://api.twitter.com/1.1/statuses/update.json",
    method: "POST",
    status: string
  });
}
// make random rotation amount
function rotato() {
  var num = Math.floor(Math.random() * 5) + 1; // this will get a number between 1 and 99;
  num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
  return num;
}
// apply rotation
function rotate(container) {
  var fridgepeas = $(".fridge > p");
  fridgepeas = jQuery.makeArray(fridgepeas);
  for (var i = 0; i < fridgepeas.length; i++) {
    $(fridgepeas[i]).css('transform', 'rotate(' + parseInt(rotato()) + 'deg)')
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
