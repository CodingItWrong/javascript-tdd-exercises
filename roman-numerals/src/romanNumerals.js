const NUMERAL_ONE = 'I';

// TODO: need names that don't mention the values
const FIVE_CONFIG = {
  threshold: 5,
  character: 'V',
};
const TEN_CONFIG = {
  threshold: 10,
  character: 'X',
};

function handleThresholdCase({number, config}) {
  const {threshold, character} = config;

  let numeral = '';
  if (number === threshold - 1) {
    numeral += NUMERAL_ONE;
  }
  numeral += character;
  if (number > threshold) {
    numeral += numberToRomanNumeral(number - threshold);
  }
  return numeral;
}

export function numberToRomanNumeral(number) {
  let numeral = '';

  if (number >= TEN_CONFIG.threshold - 1) {
    numeral += handleThresholdCase({
      number,
      config: TEN_CONFIG,
    });
  } else if (number >= FIVE_CONFIG.threshold - 1) {
    numeral += handleThresholdCase({
      number,
      config: FIVE_CONFIG,
    });
  } else {
    for (let i = 0; i < number; i += 1) {
      numeral += NUMERAL_ONE;
    }
  }

  return numeral;
}
