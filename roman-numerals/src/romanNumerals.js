export function numberToRomanNumeral(number) {
  if (number === 9) {
    return 'IX';
  }

  let numeral = '';

  if (number >= 4) {
    if (number === 4) {
      numeral += 'I';
    }
    numeral += 'V';
    if (number > 5) {
      numeral += numberToRomanNumeral(number - 5);
    }
  } else {
    for (let i = 0; i < number; i += 1) {
      numeral += 'I';
    }
  }

  return numeral;
}
