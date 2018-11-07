function findLongestWordLength(str) {
  const longestWord = str.split(' ').reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");