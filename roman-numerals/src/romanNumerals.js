const NUMERAL_ONE = 'I';
const FIVE_THRESHOLD = 5; // TODO: need a name that doesn't mention the value

export function numberToRomanNumeral(number) {
  let numeral = '';

  if (number >= 9) {
    if (number === 9) {
      numeral += NUMERAL_ONE;
    }
    numeral += 'X';
  } else if (number >= FIVE_THRESHOLD - 1) {
    if (number === FIVE_THRESHOLD - 1) {
      numeral += NUMERAL_ONE;
    }
    numeral += 'V';
    if (number > FIVE_THRESHOLD) {
      numeral += numberToRomanNumeral(number - FIVE_THRESHOLD);
    }
  } else {
    for (let i = 0; i < number; i += 1) {
      numeral += NUMERAL_ONE;
    }
  }

  return numeral;
}
