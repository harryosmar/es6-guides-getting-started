import { calculate } from '../src/arithmetic_formula_interpreter.js';

test('it should works', () => {
    expect(calculate('1 2 +')).toBe(3);
    expect(calculate('3 2 *')).toBe(6);
    expect(calculate('1 3 2 * -')).toBe(-5);
    expect(calculate('3 2 * 9 +')).toBe(15);
});
