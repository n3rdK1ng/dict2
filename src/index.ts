import wordList from './words.json';

interface wordList {
    [key: string]: string;
}

/*
let getRandomTranslatedWord = function (obj: any) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};
*/

function getRandomOriginalWord(obj: Object): string {
    var keys = Object.keys(obj);
    return keys[keys.length * Math.random() << 0];
}

function getGuess(originalWord: string): string | undefined {
    let guess = prompt(`What is the translation of ${originalWord}?`, 'word');
    if (guess === null) {
        return;
    }
    return guess;
}

function checkTranslation(originalWord: string | undefined, translatedWord: string | undefined): boolean | undefined {
    if (originalWord === null) {
        return;
    }
    return wordList[originalWord] === translatedWord;
}

function play(): void {
    let originalWord = getRandomOriginalWord(wordList);
    let translatedWord = getGuess(originalWord);
    if (translatedWord === undefined) {
        return;
    }
    if (checkTranslation(originalWord, translatedWord)) {
        alert('Correct!');
    } else {
        alert('Incorrect!');
    }
}

play();