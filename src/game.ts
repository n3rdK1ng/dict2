import { wordList } from "./data/word-list";
import {
  getRandomFirstWord,
  getRandomSecondWord,
  getGuess,
  checkTranslation,
} from "./translation";

const getRandomChoice = () => {
  const choice = Math.random() < 0.5 ? 0 : 1;

  return choice;
};

const getRandomWord = (choice: number) => {
  if (choice === 0) {
    return getRandomFirstWord(wordList);
  } else {
    return getRandomSecondWord(wordList);
  }
};

const play = () => {
  let size = Object.keys(wordList).length;

  while (size > 0) {
    const choice = getRandomChoice();
    const originalWord = getRandomWord(choice);
    let translatedWord = getGuess(originalWord);
    let isCorrect = checkTranslation(originalWord, translatedWord, choice);

    while (!isCorrect) {
      alert("Incorrect!");
      translatedWord = getGuess(originalWord);
      isCorrect = checkTranslation(originalWord, translatedWord, choice);
    }

    alert("Correct!");
    delete wordList[originalWord];
    size = Object.keys(wordList).length;
  }
};

export { play };
