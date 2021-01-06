const SYMBOL_CONFIGS = [
  {
    character: 'M',
    value: 1000,
    stepDownAmount: 100,
  },
  {
    character: 'D',
    value: 500,
    stepDownAmount: 100,
  },
  {
    character: 'C',
    value: 100,
    stepDownAmount: 10,
  },
  {
    character: 'L',
    value: 50,
    stepDownAmount: 10,
  },
  {
    character: 'X',
    value: 10,
    stepDownAmount: 1,
  },
  {
    character: 'V',
    value: 5,
    stepDownAmount: 1,
  },
  {
    character: 'I',
    value: 1,
    stepDownAmount: 0,
  },
];

function handleThresholdCase({number, config}) {
  const {value, character, stepDownAmount} = config;

  let numeral = '';
  let remainder = number - value;
  if (number < value) {
    const stepDownCharacter = SYMBOL_CONFIGS.find(
      c => c.value === stepDownAmount,
    ).character;
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

  return '';
}
