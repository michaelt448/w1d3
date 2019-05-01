function countLetters(word) {
  var count = {};
  for(let i = 0; i< word.length ; i++) {
    if(Object.key(count).lastIndexOf(word[i]) === -1) {
      count[word[i]] = 1;
    }
    else {
      count[word[i]] ++;
    }
  }
  return count;
}


console.log(countLetters("hi my name is michael"));