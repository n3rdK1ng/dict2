import wordListJson from "./words.json";
interface IWordList {
  [key: string]: string;
}

const wordList = wordListJson as IWordList;

/*
let getRandomTranslatedWord = function (obj: any) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};
*/

function getRandomOriginalWord(obj: IWordList) {
  const keys = Object.keys(obj);
  const randomKeyIndex = (keys.length * Math.random()) << 0;
  const originalWord = keys[randomKeyIndex];
  return originalWord;
}

function getGuess(originalWord: string) {
  const guess = prompt(`What is the translation of ${originalWord}?`, "word");
  if (!guess) {
    alert("empty input");
    return "";
  }
  return guess;
}

function checkTranslation(originalWord: string, translatedWord: string) {
  return wordList[originalWord] === translatedWord;
}

function play(): void {
  const originalWord = getRandomOriginalWord(wordList);
  const translatedWord = getGuess(originalWord);

  if (checkTranslation(originalWord, translatedWord)) {
    alert("Correct!");
  } else {
    alert("Incorrect!");
  }
}

play();
