var wordCount = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
// var nouns = [];
// var verbs = [];
// var adjectives = [];
// var conjunctions = [];
// var interjections = [];
// var prepositions = [];
var partsOfSpeech = ['noun','verb','adjective','conjunction','interjection','preposition'];
//get all the words
function callWords(array) {
  for (var i = 0; i < array.length; i++) {
    var partOfSpeech = array[i];
    var wordGetter = $.ajax({
      url: 'http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech='+array[i]+'&minCorpusCount=300&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=' + randomWordCount() + '&api_key=78598b23ab7389d7d520b0972b20221b03e702bf7aba96083',
      method: "GET",
      dataType: "json"
    });
    wordGetter.done(function(response) {
      partOfSpeech = new Array();
      response.forEach(function(w) {
        partOfSpeech.push(w);
      })
      console.log(partOfSpeech);
    });
  }
}
// get nouns


function writeWords(array, container) {
  array.forEach(function(i) {
    container.append("<p>" + i.word + "</p>");
  });
}
// get verbs
var verbgetter = $.ajax({
  url: "http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=verb&minCorpusCount=300&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=" + randomWordCount() + "&api_key=78598b23ab7389d7d520b0972b20221b03e702bf7aba96083",
  method: "GET",
  dataType: "json"
});
verbgetter.done(function(response) {
  response.forEach(function(i) {
    verbs.push(i);
  })
});
// get adjectives
var adjgetter = $.ajax({
  url: "http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=adjective&minCorpusCount=300&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=" + randomWordCount() + "&api_key=78598b23ab7389d7d520b0972b20221b03e702bf7aba96083",
  method: "GET",
  dataType: "json"
});
adjgetter.done(function(response) {

  response.forEach(function(i) {
    adjectives.push(i);
  })

});
// get conjunctions
var conjgetter = $.ajax({
  url: "http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=conjunction&minCorpusCount=300&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=" + randomWordCount() + "&api_key=78598b23ab7389d7d520b0972b20221b03e702bf7aba96083",
  method: "GET",
  dataType: "json"
});
conjgetter.done(function(response) {

  response.forEach(function(i) {
    conjunctions.push(i);
  })

});
// get interjections
var jectgetter = $.ajax({
  url: "http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=interjection&minCorpusCount=300&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=" + randomWordCount() + "&api_key=78598b23ab7389d7d520b0972b20221b03e702bf7aba96083",
  method: "GET",
  dataType: "json"
});
jectgetter.done(function(response) {
  response.forEach(function(i) {
    interjections.push(i);
  })
});
// get prepositions
var prepgetter = $.ajax({
  url: "http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=preposition&minCorpusCount=300&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=" + randomWordCount() + "&api_key=78598b23ab7389d7d520b0972b20221b03e702bf7aba96083",
  method: "GET",
  dataType: "json"
});
prepgetter.done(function(response) {
  response.forEach(function(i) {
    prepositions.push(i);
  })
});

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

// // make ajax call
// var ajaxi = $.ajax({
//   url: "http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&minCorpusCount=300&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit="+wordCount+"&api_key=78598b23ab7389d7d520b0972b20221b03e702bf7aba96083",
//   method: "GET",
//   dataType: "json"
// });
// // ajax call response capture
// ajaxi.done(function(response){
//   console.log(ajaxi);
//   response.forEach(function(i){
//     wordList.push(i);
//   });
//   wordList.forEach(function(i){
//     console.log(i.word);
//   });
// });
