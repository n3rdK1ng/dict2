import { wordList } from "./data/word-list";
import {
  getRandomOriginalWord,
  getGuess,
  checkTranslation,
} from "./translation";

export const play = () => {
  while (true) {
    const originalWord = getRandomOriginalWord(wordList);
    const translatedWord = getGuess(originalWord);
    const isCorrect = checkTranslation(originalWord, translatedWord);

    if (isCorrect) {
      return "Correct!"
    } else {
      return "Incorrect!"
    }
  }
};
