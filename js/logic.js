var wordCount = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
var wordList = [];
function makeRandom() {
  return Math.floor(Math.random() * (4 - 2 + 1)) + 1;
};
// make ajax call
var ajaxi = $.ajax({
  url: "http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&minCorpusCount=1&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit="+wordCount+"&api_key=78598b23ab7389d7d520b0972b20221b03e702bf7aba96083",
  method: "GET",
  dataType: "json"
});
// ajax call response capture
ajaxi.done(function(response){
  console.log(ajaxi);
  response.forEach(function(i){
    wordList.push(i);
  });
  wordList.forEach(function(i){
    console.log(i.word);
  });
});
function writeWords(array, container) {
  array.forEach(function(i){
    container.append("<p>" + i.word + "</p>");
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
    num--;
  }
}
// concat words in container into a string
function makeArray(container) {
  return $(container).toArray();
}
