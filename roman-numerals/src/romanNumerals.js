const NUMERAL_ONE = 'I';

// TODO: need names that don't mention the values
const FIVE_THRESHOLD = 5;
const TEN_THRESHOLD = 10;

export function numberToRomanNumeral(number) {
  let numeral = '';

  if (number >= TEN_THRESHOLD - 1) {
    if (number === TEN_THRESHOLD - 1) {
      numeral += NUMERAL_ONE;
    }
    numeral += 'X';
    if (number > TEN_THRESHOLD) {
      numeral += numberToRomanNumeral(number - TEN_THRESHOLD);
    }
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
