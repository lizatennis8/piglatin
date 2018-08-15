// Business Logic

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var pigLatin = []

var pigLatin = function(sentence) {

  if (sentence !== letters) {
    return false;
  }
};









// User/Front End Logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var sentence = parseInt($("input#sentence").val());
    var result = pigLatin(sentence);
    $("#pigresult").text(result);
  });
});
