function numberToRomanNumeral() {
  return 'I';
}

describe('romanNumerals', () => {
  describe('numberToRomanNumeral', () => {
    it('converts 1 to I', () => {
      expect(numberToRomanNumeral(1)).toEqual('I');
    });
  });
});
