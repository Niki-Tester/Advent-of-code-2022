const fs = require('fs');
const readline = require('readline');

async function readPuzzleInputByLine() {
  const fileStream = fs.createReadStream('../puzzle-input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const elves = [];
  let calories = [];
  for await (const line of rl) {
    if (line.length != 0) {
      calories.push(parseInt(line));
    } else {
      elves.push(calories);
      calories = [];
    }
  }
  return elves;
}

async function getElfWithHighestCalories() {
  const elves = await readPuzzleInputByLine();
  totalCaloriesPerElf = [];
  elves.forEach((elf) => {
    totalCaloriesPerElf.push(elf.reduce((a, b) => a + b, 0));
  });
  const highestCalorieCount = Math.max(...totalCaloriesPerElf);
  console.log(
    `The elf with the most calories is carrying ${highestCalorieCount} calories`
  );
  return highestCalorieCount;
}

getElfWithHighestCalories();
