/*
let getRandomTranslatedWord = function (obj: any) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};
*/

export interface IWordList {
  [key: string]: string;
}

export const wordList: IWordList = {
  dog: "pes",
  house: "dum",
  cat: "kocka",
};

const getRandomOriginalWord = (obj: IWordList) => {
  const keys = Object.keys(obj);
  const randomKeyIndex = (keys.length * Math.random()) << 0;
  const originalWord = keys[randomKeyIndex];
  return originalWord;
};

const getGuess = (originalWord: string) => {
  const guess = prompt(`What is the translation of ${originalWord}?`, "word");
  if (!guess) {
    alert("empty input");
    return "";
  }
  return guess;
};

const checkTranslation = (originalWord: string, translatedWord: string) => {
  return wordList[originalWord] === translatedWord;
};

const play = () => {
  const originalWord = getRandomOriginalWord(wordList);
  const translatedWord = getGuess(originalWord);

  if (checkTranslation(originalWord, translatedWord)) {
    alert("Correct!");
  } else {
    alert("Incorrect!");
  }
};

play();
