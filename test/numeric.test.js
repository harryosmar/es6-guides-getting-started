import { numberToReadableFormat } from '../src/numeric.js';

test('it should work', () => {
    expect(numberToReadableFormat(1.5)).toBe('1,50');
    expect(numberToReadableFormat(1)).toBe('1,00');
    expect(numberToReadableFormat(100)).toBe('100,00');
    expect(numberToReadableFormat(1000)).toBe('1.000,00');
    expect(numberToReadableFormat(10000)).toBe('10.000,00');
    expect(numberToReadableFormat(1000000)).toBe('1.000.000,00');
    expect(numberToReadableFormat(123456.50)).toBe('123.456,50');
});
