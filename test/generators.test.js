import numbers from '../src/numbers.js';
import shopping from '../src/shopping.js';
import shoppingThenLaundry from '../src/shoppingThenLaundry.js';
import myColors from '../src/colors.js';
import teamNames from '../src/engineeringTeam.js';
import teamNamesIncludeTestingTeam from '../src/engineeringteamincludetestingteam.js';
import teamNamesUsingSymbolIterator from '../src/symboliterator.js';
import commentValues from '../src/recursive.js';


test('numbers generators', () => {
    const generator = numbers();
    expect(generator.next()).toEqual({ value: undefined, done: false });
    expect(generator.next()).toEqual({ value: undefined, done: true });
});


test('shopping generators', () => {
    const generator = shopping();
    expect(generator.next()).toEqual({ value: 'cash', done: false });

    // leaving the store, bring back groceries, headed back home
    expect(generator.next('groceries')).toEqual({ value: 'groceries', done: true });
});

test('shopping the laundry generators', () => {
    const generator = shoppingThenLaundry();
    expect(generator.next()).toEqual({ value: 'cash', done: false });

    // leaving the store, bring back groceries
    expect(generator.next('groceries')).toEqual({ value: 'laundry', done: false });

    // leaving the laundry, bring back "groceries" and "clean clothes"
    expect(generator.next('clean clothes')).toEqual({ value: ['groceries', 'clean clothes'], done: true });
});

test('mycolor', () => {
    expect(myColors).toEqual(['red', 'blue', 'green']);
});

test('teamNames', () => {
    expect(teamNames).toEqual(['Jill', 'Alex', 'Dave']);
});

test('teamNamesIncludeTestingTeam', () => {
    expect(teamNamesIncludeTestingTeam).toEqual(['Jill', 'Alex', 'Dave', 'Amanda', 'Bill']);
});

test('teamNamesUsingSymbolIterator', () => {
    expect(teamNamesUsingSymbolIterator).toEqual(['Jill', 'Alex', 'Dave', 'Amanda', 'Bill']);
});

test('commentValues', () => {
    expect(commentValues).toEqual(['Great post!', 'good comment', 'bad comment', 'meh']);
});