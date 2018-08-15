
// Business Logic

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var vowels = ["a", "e", "i", "o", "u"]
var cons = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
var pigLatin = []












// User/Front End Logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();

    var sentence = $("input#sentence").val();
    // var result = pigLatin(sentence);
    var firstLetter = sentence.slice(0,1);
    console.log(firstLetter);



    // var pigLatin = function(sentence) {
    for (var i = 0; i < vowels.length; i++) {
      var vowel = vowels[i];
      if (firstLetter === vowel) {
        var result = sentence + "way";


        $("#pigresult").text(result);
      } else {firstLetter === vowel
      }
    }
  });
});


// for (var j = 0; j < vowels.length; i++) {
//   var vowel = vowels[j];

// console.log("true")
