/*
const getRandomTranslatedWord = (obj: IWordList) => {
  const keys = Object.keys(obj);
  const randomKeyIndex = (keys.length * Math.random()) << 0;
  const translatedWord = obj[keys[randomKeyIndex]];
  return translatedWord;
};
*/

import { IWordList, wordList } from "./data/word-list";
import { compareObjectValue } from "./utils/object";

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

const checkTranslation = (originalWord: string, translatedWord: string) =>
  compareObjectValue(wordList, originalWord, translatedWord);

export { getRandomOriginalWord, getGuess, checkTranslation };
