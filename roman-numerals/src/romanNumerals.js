const NUMERAL_ONE = 'I';

// TODO: need a better name for "configs"
const NUMERAL_CONFIGS = [
  {
    threshold: 100,
    character: 'C',
    stepDownAmount: 10,
    stepDownCharacter: 'X',
  },
  {
    threshold: 50,
    character: 'L',
    stepDownAmount: 10,
    stepDownCharacter: 'X',
  },
  {
    threshold: 10,
    character: 'X',
    stepDownAmount: 1,
    stepDownCharacter: 'I',
  },
  {
    threshold: 5,
    character: 'V',
    stepDownAmount: 1,
    stepDownCharacter: 'I',
  },
];

function handleThresholdCase({number, config}) {
  const {threshold, character, stepDownAmount, stepDownCharacter} = config;

  let numeral = '';
  let remainder = number - threshold;
  if (number < threshold) {
    numeral += stepDownCharacter;
    remainder += stepDownAmount;
  }
  numeral += character;
  numeral += numberToRomanNumeral(remainder);
  return numeral;
}

export function numberToRomanNumeral(number) {
  for (let i = 0; i < NUMERAL_CONFIGS.length; i += 1) {
    const config = NUMERAL_CONFIGS[i];
    const {threshold, stepDownAmount} = config;
    if (number >= threshold - stepDownAmount) {
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
