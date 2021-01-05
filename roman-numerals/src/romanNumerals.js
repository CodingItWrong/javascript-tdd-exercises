const NUMERAL_ONE = 'I';

// TODO: need a better name for "configs"
const NUMERAL_CONFIGS = [
  {
    threshold: 10,
    character: 'X',
  },
  {
    threshold: 5,
    character: 'V',
  },
];

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
  if (number >= 40) {
    let numeral = 'XL';
    numeral += numberToRomanNumeral(number - 40);
    return numeral;
  }

  for (let i = 0; i < NUMERAL_CONFIGS.length; i += 1) {
    const config = NUMERAL_CONFIGS[i];
    if (number >= config.threshold - 1) {
      return handleThresholdCase({
        number,
        config,
      });
    }
  }

  // one case
  let numeral = '';
  for (let i = 0; i < number; i += 1) {
    numeral += NUMERAL_ONE;
  }
  return numeral;
}
