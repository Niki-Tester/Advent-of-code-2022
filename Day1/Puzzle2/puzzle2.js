const fs = require('fs');
const readline = require('readline');

async function readFileByLine() {
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

async function getTopThreeElvesCalories() {
  const elves = await readFileByLine();
  totalCaloriesPerElf = [];
  elves.forEach((elf) => {
    totalCaloriesPerElf.push(elf.reduce((a, b) => a + b, 0));
  });
  const topThreeElves = totalCaloriesPerElf.sort().slice('-3');
  console.log(
    `The top three elf with the most calories are carrying ${topThreeElves} calories`
  );
  const topThreeTotal = topThreeElves.reduce((a, b) => a + b, 0);
  console.log(`And they are carrying ${topThreeTotal} between them`);
  return topThreeElves;
}

getTopThreeElvesCalories();
