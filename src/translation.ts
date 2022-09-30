const getRandomSecondWord = (obj: IWordList) => {
  const keys = Object.keys(obj);
  const randomKeyIndex = (keys.length * Math.random()) << 0;
  const secondWord = obj[keys[randomKeyIndex]];
  return secondWord;
};

import { IWordList, wordList } from "./data/word-list";
import { compareObjectValue } from "./utils/object";

const getRandomFirstWord = (obj: IWordList) => {
  const keys = Object.keys(obj);
  const randomKeyIndex = (keys.length * Math.random()) << 0;
  const firstWord = keys[randomKeyIndex];

  return firstWord;
};

const getGuess = (originalWord: string) => {
  const guess = prompt(`What is the translation of ${originalWord}?`, "word");

  if (!guess) {
    alert("empty input");

    return "";
  }

  return guess;
};

const checkTranslation = (
  originalWord: string,
  translatedWord: string,
  choice: number
) => {
  if (choice === 0) {
    return compareObjectValue(wordList, originalWord, translatedWord);
  } else {
    return compareObjectValue(wordList, translatedWord, originalWord);
  }
};

export { getRandomFirstWord, getRandomSecondWord, getGuess, checkTranslation };
