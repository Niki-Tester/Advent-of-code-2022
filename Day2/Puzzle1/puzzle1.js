const fs = require('fs');
const readline = require('readline');

async function readPuzzleInputByLine() {
  const fileStream = fs.createReadStream('../puzzle-input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let score = 0;
  for await (const line of rl) {
    const round = line.split(' ');

    // Calc score for shape selected
    switch (round[1]) {
      case 'X':
        score += 1;
        break;
      case 'Y':
        score += 2;
        break;
      case 'Z':
        score += 3;
        break;
    }

    // Calc score for win/draw/loss
    if (
      (round[0] === 'A' && round[1] === 'X') ||
      (round[0] === 'B' && round[1] === 'Y') ||
      (round[0] === 'C' && round[1] === 'Z')
    ) {
      score += 3;
    } else if (
      (round[0] === 'A' && round[1] === 'Y') ||
      (round[0] === 'B' && round[1] === 'Z') ||
      (round[0] === 'C' && round[1] === 'X')
    ) {
      score += 6;
    } else {
      score += 0;
    }
  }
  console.log(score);
}

readPuzzleInputByLine();

// Rock     - A / X 1 Point
// Paper    - B / Y 2 Points
// Scissors - C / Z 3 Points

// Win - 6 Points
// Draw - 3 Points
// Loss - 0 Points
