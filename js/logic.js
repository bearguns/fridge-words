var wordList = [];
// make ajax call
var ajaxi = $.ajax({
  url: "https://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&minCorpusCount=1&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=10&api_key=78598b23ab7389d7d520b0972b20221b03e702bf7aba96083",
  method: "GET",
  dataType: "json"
});
// ajax call response capture
ajaxi.done(function(response){
  response.forEach(function(i){
    wordList.push(i);
  });
  wordList.forEach(function(i){
    console.log(i.word);
  });
});
// write words to page
