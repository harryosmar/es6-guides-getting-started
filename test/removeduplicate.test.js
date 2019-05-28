import removeDuplicate from '../src/removeduplicate.js';

test('aabbcccdd - 3', () => {
    expect(removeDuplicate('aabbcccdd', 3)).toBe('aabbdd');
});

test('aaabbcc - 2', () => {
    expect(removeDuplicate('aaabbcc', 2)).toBe('');
});

test('aaabbaacccc - 3', () => {
    expect(removeDuplicate('aaabbaacccc', 3)).toBe('bbaa');
});

test('abbbaac - 3', () => {
    expect(removeDuplicate('abbbaac', 3)).toBe('aaac');
});

test('aabbbbc - 1', () => {
    expect(removeDuplicate('aabbbbc', 1)).toBe('');
});

test('aabbbbc - 0', () => {
    expect(removeDuplicate('aabbbbc', 0)).toBe('');
});

test(' - 1', () => {
    expect(removeDuplicate('', 1)).toBe('');
});

test('aaac - 3', () => {
    expect(removeDuplicate('aaac', 3)).toBe('c');
});