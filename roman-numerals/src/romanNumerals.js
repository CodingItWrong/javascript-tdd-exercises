const NUMERAL_ONE = 'I';

// TODO: need a better name for "configs"
const FIFTY_CONFIG = {
  threshold: 50,
  character: 'L',
  stepDownAmount: 10,
  stepDownCharacter: 'X',
};
const NUMERAL_CONFIGS = [
  FIFTY_CONFIG,
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
  if (number === threshold - stepDownAmount) {
    numeral += stepDownCharacter;
  }
  numeral += character;
  if (number > threshold) {
    numeral += numberToRomanNumeral(number - threshold);
  }
  return numeral;
}

export function numberToRomanNumeral(number) {
  const {
    threshold,
    character,
    stepDownAmount,
    stepDownCharacter,
  } = FIFTY_CONFIG;

  if (number >= threshold - stepDownAmount) {
    let numeral = '';
    if (number !== threshold) {
      numeral += stepDownCharacter;
    }
    numeral += character;
    if (number !== threshold) {
      numeral += numberToRomanNumeral(number - (threshold - stepDownAmount));
    }
    return numeral;
  }

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
