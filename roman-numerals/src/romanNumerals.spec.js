function numberToRomanNumeral(number) {
  let numeral = '';
  for (let i = 0; i < number; i += 1) {
    numeral += 'I';
  }
  return numeral;
}

describe('romanNumerals', () => {
  describe('numberToRomanNumeral', () => {
    it('converts 1 to I', () => {
      expect(numberToRomanNumeral(1)).toEqual('I');
    });

    it('converts 2 to II', () => {
      expect(numberToRomanNumeral(2)).toEqual('II');
    });

    it('converts 3 to III', () => {
      expect(numberToRomanNumeral(3)).toEqual('III');
    });
  });
});
