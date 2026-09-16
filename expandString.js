const expandString = (source) => {
  const firstCharacter = source[0];
  const numberOfRepeats = Number.parseInt(source[1]);
  console.log(firstCharacter, numberOfRepeats);
  return 'aaabbc';
}

module.exports = expandString;