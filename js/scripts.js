
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
        var useSingleWord = singleWord
        // console.log(firstLetter);

// vowel rules

      vowels.forEach(function(vowel) {

        if (sentence === ay) {
         $("#pigresult").text(sentence);}
        else if (firstLetter === vowel) {
          $("#pigresult").text(sentence + "way");}
        });

// consonant rules

      cons.forEach(function(con) {

        if (sentence === way) {
          $("#pigresult").text(sentence);
        } else if (firstLetter === con) {
          $("#pigresult").text(sentence + "dreamy");
        }
      })
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

// for loop format - not working though
// })
//   for (var i = 0; i < vowels.length; i++) {
//     var vowel = vowels[i];}
