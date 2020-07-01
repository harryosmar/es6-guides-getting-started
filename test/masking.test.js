import { maskCreditCard } from '../src/masking.js';

test('it should work', () => {
    expect(maskCreditCard("1234567890123456")).toBe('1###########3456');
});
