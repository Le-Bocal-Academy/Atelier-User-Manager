const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

async function asyncReadLine(question) {
  return new Promise((resolve) => {
    rl.question(question, (value) => {
      resolve(value);
    });
  });
}

module.exports = asyncReadLine;
