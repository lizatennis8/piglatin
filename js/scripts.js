
// Business Logic

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var vowels = ["a", "e", "i", "o", "u"]
var cons = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
var pigLatin = []

var ay = "ay"
var way = "way"

// for (var i = 0; i < vowels.length; i++) {
//   var vowel = vowels[0];};}

// console.log(ifVowel);}

// User/Front End Logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();

    var sentence = $("input#sentence").val().toLowerCase();
    // var firstSentenceLetter = sentence.slice(0,1);
    var arrayOfSingleWords = sentence.split(" ");
    // console.log(arrayOfSingleWords);

    arrayOfSingleWords.forEach(function(singleWord) {
      var splitWord = singleWord.split("");
      var firstLetter = singleWord.slice(0,1);
      // console.log(firstLetter);

      for (var i = 0; i < vowels.length; i++) {
        var vowel = vowels[0]};

if

(firstLetter === vowel) {
$("#pigresult").text(sentence + "test");
}

else if (sentence === ay || sentence === way) {
 $("#pigresult").text(sentence + "n"); }

else if (sentence === sentence) {
$("#pigresult").text("(no rule applied)");
}
console.log(firstLetter);
  })






  });
});

// for (var j = 0; j < vowels.length; i++) {
//   var vowel = vowels[j];

// console.log("true")

// // var pigLatin = function(sentence) {
// for (var i = 0; i < vowels.length; i++) {
//   var vowel = vowels[i];
//   if (firstLetter === vowel) {
//     var result = sentence + "way";
//     $("#pigresult").text(result);
//   } else (firstLetter === vowel)
//     var result = sentence + "noway";
//   for (var j = 0; j < cons.length; j++) {
//     var con = cons[j];
//     $("#pigresult").text(result);
