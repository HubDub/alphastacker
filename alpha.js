// this function creates a printout of the alphabet one letter, then two letters, then three, etc with a space every 5

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
console.log(letters)
console.log(letters.length)

var alphabet = ' ';
var count = 1;
function stackLetters () {
  for (var i = 0; i < letters.length; i = i + 1) {
    alphabet += (letters[i]);
    if (count === 5) {
      alphabet += ' ';
      count = 0;
    }
    count = count + 1
    console.log(alphabet)
  }
}

stackLetters();