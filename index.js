const numberToWords = require("./numberToWords");

for (let i = 0; i < 199; i++) {
  const words = numberToWords(i);
  console.log(words);
}