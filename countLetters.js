function countLetters(word) {
  var count = {};
  var noSpacesWord = word.split(" ").join("");
  //console.log(noSpacesWord);
  for(let i = 0; i< noSpacesWord.length ; i++) {
    if(Object.keys(count).lastIndexOf(noSpacesWord[i]) === -1) {
      count[noSpacesWord[i]] = 1;
    }
    else {
      count[noSpacesWord[i]] ++;
    }
  }
  return count;
}


console.log(countLetters("hi my name is michael"));