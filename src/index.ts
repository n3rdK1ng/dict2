/*
let getRandomTranslatedWord = function (obj: any) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};
*/

import { IWordList, wordList } from "./wordList";

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
