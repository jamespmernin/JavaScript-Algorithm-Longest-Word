let algos = require("../longestWord.js");

//LONGEST WORD

test("finds the longest word in the array", () => {
  expect(
    algos.longestWord("The quick brown fox jumped over the lazy dog")
  ).toBe("jumped")
})

  
