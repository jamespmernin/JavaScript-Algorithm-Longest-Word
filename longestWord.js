//LONGEST WORD
//return the longest word in a given array
const longestWord = str => {
  let strSplit = str.split(' ');
  let longestWord = '';
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord.length) {
      longestWord = strSplit[i];
    }
  }
  return longestWord;
}
console.log(longestWord("The quick brown fox jumped over the lazy dog"))

module.exports = {
  longestWord
}
