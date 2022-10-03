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
  let originalWord = "";

  if (choice === 0) {
    originalWord = getRandomFirstWord(wordList);
  } else {
    originalWord = getRandomSecondWord(wordList);
  }

  return originalWord;
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
    delete wordList[translatedWord];
    size = Object.keys(wordList).length;
  }
};

export { play };
