const numberToWordsWithTens = (source, startingPoint, tensWord) => {
  if (source >= startingPoint) {
    const remainder = source - startingPoint;
    const remainderText = remainder === 0 ? '' : ' ' + numberToWords(source - startingPoint);
    return tensWord + remainderText;
  }
}

const numberToWords = (source) => {
  const tensWords = {
    50: 'fifty',
    40: 'forty',
    30: 'thirty',
    20: 'twenty'
  };
  const tens = [50, 40, 30, 20];
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