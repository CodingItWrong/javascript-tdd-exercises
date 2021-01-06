import {numberToRomanNumeral} from './romanNumerals';

describe('romanNumerals', () => {
  describe('numberToRomanNumeral', () => {
    it.each([
      [1, 'I'],
      [2, 'II'],
      [3, 'III'],
      [4, 'IV'],
      [5, 'V'],
      [6, 'VI'],
      [7, 'VII'],
      [8, 'VIII'],
      [9, 'IX'],
      [10, 'X'],
      [11, 'XI'],
      [12, 'XII'],
      [19, 'XIX'],
      [20, 'XX'],
      [39, 'XXXIX'],
      [40, 'XL'],
      [41, 'XLI'],
      [42, 'XLII'],
      [49, 'XLIX'],
      [50, 'L'],
      [51, 'LI'],
      [59, 'LIX'],
      [90, 'XC'],
      [100, 'C'],
      [101, 'CI'],
      [199, 'CXCIX'],
      [400, 'CD'],
      [500, 'D'],
      [900, 'CM'],
    ])('converts %i to %s', (decimalNumber, romanNumeral) => {
      expect(numberToRomanNumeral(decimalNumber)).toEqual(romanNumeral);
    });
  });
});
