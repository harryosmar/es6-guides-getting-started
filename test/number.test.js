import { numberToOrdinal } from '../src/number.js';

test('it should work', () => {
    expect(numberToOrdinal(1)).toBe('1st');
    expect(numberToOrdinal(2)).toBe('2nd');
    expect(numberToOrdinal(3)).toBe('3rd');
    expect(numberToOrdinal(4)).toBe('4th');
    expect(numberToOrdinal(5)).toBe('5th');
    expect(numberToOrdinal(11)).toBe('11th');
});
