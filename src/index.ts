import wordList from "./words.json";

interface wordList {
  [key: string]: string;
}

/*
let getRandomTranslatedWord = function (obj: any) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};
*/

function getRandomOriginalWord(obj: Object): string {
  var keys = Object.keys(obj);
  let originalWord = keys[(keys.length * Math.random()) << 0];
  if (!originalWord) {
    return "";
  }
  return originalWord;
}

function getGuess(originalWord: string): string {
  let guess = prompt(`What is the translation of ${originalWord}?`, "word");
  if (!guess) {
    return "";
  }
  return guess;
}

function checkTranslation(
  originalWord: string,
  translatedWord: string
): boolean {
  return wordList[originalWord] === translatedWord;
}

function play(): void {
  let originalWord = getRandomOriginalWord(wordList);
  let translatedWord = getGuess(originalWord);

  if (!originalWord || !translatedWord) {
    return;
  }
  if (checkTranslation(originalWord, translatedWord)) {
    alert("Correct!");
  } else {
    alert("Incorrect!");
  }
}

play();
