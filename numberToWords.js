const numberToWordsWithTens = (source, startingPoint, tensWord) => {
  if (source >= startingPoint) {
    const remainder = source - startingPoint;
    const remainderText = remainder === 0 ? '' : ' ' + numberToWords(source - startingPoint);
    return tensWord + remainderText;
  }
}

const numberToWords = (source) => {
  if (source >= 100) {
    const remainder = source - 100;
    // This is a ternary https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
    const remainderWords = remainder === 0 ? ''
    : " and " + numberToWords(remainder);
    return "one hundred" + remainderWords;
  }
  const tensWords = {
    90: 'ninety',
    80: 'eighty',
    70: 'seventy',
    60: 'sixty',
    50: 'fifty',
    40: 'forty',
    30: 'thirty',
    20: 'twenty'
  };
  const tens = [90, 80, 70, 60, 50, 40, 30, 20];
  for (const startingPoint of tens) {
    const result = numberToWordsWithTens(
      source,
      startingPoint,
      tensWords[startingPoint]
    );
    if (result !== undefined) {
      return result;
    }
  }
  // Switch statement is shorthand for this:
  /*
  if (source === 0) {
    return 'zero';
  } else if (source === 1) {
    return 'one';
  }
  */
  switch (source) {
    case 0:
      return 'zero';
    case 1:
      return 'one';
    case 2:
      return 'two';
    case 3:
      return 'three';
    case 4:
      return 'four';
    case 5:
      return 'five';
    case 6:
      return 'six';
    case 7:
      return 'seven';
    case 8:
      return 'eight';
    case 9:
      return 'nine';
    case 10:
      return 'ten';
    case 11:
      return 'eleven';
    case 12:
      return 'twelve';
    case 13:
      return 'thirteen';
    case 14:
      return 'fourteen';
    case 15:
      return 'fifteen';
    case 16:
      return 'sixteen';
    case 17:
      return 'seventeen';
    case 18:
      return 'eighteen';
    case 19:
      return 'nineteen';
  }
  return 'TODO';
}


module.exports = numberToWords;