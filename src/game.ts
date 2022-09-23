import { wordList } from "./data/word-list";
import {
  getRandomOriginalWord,
  getGuess,
  checkTranslation,
} from "./translation";

const play = () => {
  while (wordList) {
    const originalWord = getRandomOriginalWord(wordList);
    let translatedWord = getGuess(originalWord);
    let isCorrect = checkTranslation(originalWord, translatedWord);

    while (!isCorrect) {
      alert("Incorrect!");
      translatedWord = getGuess(originalWord);
      isCorrect = checkTranslation(originalWord, translatedWord);
    }

    alert("Correct!");
    delete wordList[originalWord];
  }
};

export { play };
