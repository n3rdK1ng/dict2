"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const words_json_1 = __importDefault(require("./words.json"));
function getRandomOriginalWord(obj) {
    var keys = Object.keys(obj);
    return keys[keys.length * Math.random() << 0];
}
function getGuess(originalWord) {
    let guess = prompt(`What is the translation of ${originalWord}?`, 'word');
    if (guess === null || guess === undefined) {
        return;
    }
    return guess;
}
function checkTranslation(originalWord, translatedWord) {
    if (originalWord === undefined) {
        return;
    }
    return words_json_1.default[originalWord] === translatedWord;
}
function play() {
    let originalWord = getRandomOriginalWord(words_json_1.default);
    let translatedWord = getGuess(originalWord);
    if (translatedWord === undefined) {
        return;
    }
    if (checkTranslation(originalWord, translatedWord)) {
        alert('Correct!');
    }
    else {
        alert('Incorrect!');
    }
}
play();
//# sourceMappingURL=index.js.map