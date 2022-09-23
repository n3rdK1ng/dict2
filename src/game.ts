import { wordList } from "./data/word-list";
import {
  getRandomOriginalWord,
  getGuess,
  checkTranslation,
} from "./translation";

const play = () => {
  let size = Object.keys(wordList).length;

  while (size > 0) {
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
    size = Object.keys(wordList).length;
  }
};

export { play };
