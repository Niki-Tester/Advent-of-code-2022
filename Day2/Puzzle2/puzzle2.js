const fs = require('fs');
const readline = require('readline');

async function readFileByLine() {
  const fileStream = fs.createReadStream('../puzzle-input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let score = 0;
  const choices = {
    A: { X: 3, Y: 4, Z: 8 },

    B: { X: 1, Y: 5, Z: 9 },

    C: { X: 2, Y: 6, Z: 7 },
  };

  for await (const line of rl) {
    const round = line.split(' ');
    score += choices[round[0]][round[1]];
  }
  console.log(score);
}

readFileByLine();
