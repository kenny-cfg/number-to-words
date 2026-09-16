const numberToWords = require("./numberToWords");

for (let i = 0; i < 100; i++) {
  const words = numberToWords(i);
  console.log(words);
}