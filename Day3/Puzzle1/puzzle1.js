const fs = require('fs');
const readline = require('readline');

const letters = (() => {
  const lower = [...Array(26)].map((val, i) => String.fromCharCode(i + 97));
  return lower.concat(lower.map((letter) => letter.toUpperCase()));
})();

const priorities = {};
letters.forEach((letter, index) => {
  priorities[letter] = index + 1;
});

async function readPuzzleInputByLine() {
  const fileStream = fs.createReadStream('../puzzle-input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const duplicateChars = [];
  for await (const line of rl) {
    const splitLine = splitStringInHalf(line);
    duplicateChars.push(checkForDuplicateChars(splitLine));
  }
  const sumOfPriorities = sumPriorities(duplicateChars, priorities);
  console.log(sumOfPriorities);
}

function splitStringInHalf(string) {
  const string1 = string.split('').splice(0, string.length / 2);

  const string2 = string.split('').splice(string.length / 2);
  return [string1, string2];
}

function checkForDuplicateChars(chars) {
  for (const char of chars[0]) {
    if (chars[1].includes(char)) {
      return char;
    }
  }
}

function sumPriorities(duplicateChars, priorities) {
  let total = 0;
  duplicateChars.forEach((char) => {
    total += priorities[char];
  });
  return total;
}

readPuzzleInputByLine();
