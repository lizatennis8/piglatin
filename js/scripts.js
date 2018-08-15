// Business Logic

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var vowels = ["a", "e", "i", "o", "u"]
var cons = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
var pigLatin = []

var pigLatin = function(sentence) {
  for (var i = 0; i < letters.length; i++) {
  var letter = letters[i];
console.log(sentence);
console.log(letter);
if (sentence === letter) {
    console.log("true")
    return true;
  } else {
    // return false;
  }
}
};








// User/Front End Logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var sentence = ($("input#sentence").val());
    var result = pigLatin(sentence);
    $("#pigresult").text(result);
  });
});
