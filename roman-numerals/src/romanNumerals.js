const ONE_CHARACTER = 'I';

const SYMBOL_CONFIGS = [
  {
    character: 'M',
    value: 1000,
    stepDownAmount: 100,
    stepDownCharacter: 'C',
  },
  {
    character: 'D',
    value: 500,
    stepDownAmount: 100,
    stepDownCharacter: 'C',
  },
  {
    character: 'C',
    value: 100,
    stepDownAmount: 10,
    stepDownCharacter: 'X',
  },
  {
    character: 'L',
    value: 50,
    stepDownAmount: 10,
    stepDownCharacter: 'X',
  },
  {
    character: 'X',
    value: 10,
    stepDownAmount: 1,
    stepDownCharacter: 'I',
  },
  {
    character: 'V',
    value: 5,
    stepDownAmount: 1,
    stepDownCharacter: 'I',
  },
];

function handleThresholdCase({number, config}) {
  const {value, character, stepDownAmount, stepDownCharacter} = config;

  let numeral = '';
  let remainder = number - value;
  if (number < value) {
    numeral += stepDownCharacter;
    remainder += stepDownAmount;
  }
  numeral += character;
  numeral += numberToRomanNumeral(remainder);
  return numeral;
}

export function numberToRomanNumeral(number) {
  for (let i = 0; i < SYMBOL_CONFIGS.length; i += 1) {
    const config = SYMBOL_CONFIGS[i];
    const {value, stepDownAmount} = config;
    if (number >= value - stepDownAmount) {
      return handleThresholdCase({
        number,
        config,
      });
    }
  }

  // one case
  let numeral = '';
  for (let i = 0; i < number; i += 1) {
    numeral += ONE_CHARACTER;
  }
  return numeral;
}
