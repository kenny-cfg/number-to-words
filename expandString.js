const expandString = (source) => {
  const firstCharacter = source[0];
  const numberOfRepeats = Number.parseInt(source[1]);
  let repeatedString = '';
  for (let i = 0; i < numberOfRepeats; i++) {
    repeatedString += firstCharacter;
  }
  return repeatedString;
}

module.exports = expandString;