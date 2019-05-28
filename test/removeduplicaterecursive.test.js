import removeDuplicateRecursive from '../src/removeduplicaterecursive';

test('abbbaac - 3', () => {
    expect(removeDuplicateRecursive('abbbaac', 3)).toBe('c');
});

test('caaabbbbaccc - 4', () => {
    expect(removeDuplicateRecursive('caaabbbbaccc', 4)).toBe('');
});

test('ccccaaabbbbaccc - 4', () => {
    expect(removeDuplicateRecursive('ccccaaabbbbaccc', 4)).toBe('ccc');
});