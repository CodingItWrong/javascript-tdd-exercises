import {numberToRomanNumeral} from './romanNumerals';

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

    it('converts 4 to IV', () => {
      expect(numberToRomanNumeral(4)).toEqual('IV');
    });

    it('converts 5 to V', () => {
      expect(numberToRomanNumeral(5)).toEqual('V');
    });

    it('converts 6 to VI', () => {
      expect(numberToRomanNumeral(6)).toEqual('VI');
    });

    it('converts 7 to VII', () => {
      expect(numberToRomanNumeral(7)).toEqual('VII');
    });

    it('converts 8 to VIII', () => {
      expect(numberToRomanNumeral(8)).toEqual('VIII');
    });

    it('converts 9 to IX', () => {
      expect(numberToRomanNumeral(9)).toEqual('IX');
    });

    it('converts 10 to X', () => {
      expect(numberToRomanNumeral(10)).toEqual('X');
    });

    it('converts 11 to XI', () => {
      expect(numberToRomanNumeral(11)).toEqual('XI');
    });

    it('converts 12 to XII', () => {
      expect(numberToRomanNumeral(12)).toEqual('XII');
    });
  });
});
