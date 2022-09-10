export const wordList = {
    dog: "pes",
    house: "dum",
    cat: "kocka",
};
function getRandomOriginalWord(obj) {
    const keys = Object.keys(obj);
    const randomKeyIndex = (keys.length * Math.random()) << 0;
    const originalWord = keys[randomKeyIndex];
    return originalWord;
}
function getGuess(originalWord) {
    const guess = prompt(`What is the translation of ${originalWord}?`, "word");
    if (!guess) {
        alert("empty input");
        return "";
    }
    return guess;
}
function checkTranslation(originalWord, translatedWord) {
    return wordList[originalWord] === translatedWord;
}
function play() {
    const originalWord = getRandomOriginalWord(wordList);
    const translatedWord = getGuess(originalWord);
    if (checkTranslation(originalWord, translatedWord)) {
        alert("Correct!");
    }
    else {
        alert("Incorrect!");
    }
}
play();
//# sourceMappingURL=index.js.map