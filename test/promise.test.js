import promiseAlwaysResolved from '../src/promiseAlwaysResolved.js';
import promiseAlwaysRejected from '../src/promiseAlwaysRejected.js';
import promiseAll from '../src/promiseAll.js';
import promiseRace from '../src/promiseRace.js';
import asyncCall from '../src/asyncAwait.js';

test('always resolved promise', () => {
    expect(promiseAlwaysResolved)
        .resolves
        .toBe('this should be always resolved');
});


test('always rejected promise', () => {
    expect(promiseAlwaysRejected)
        .rejects
        .toBe('this promise should be always rejected');
});

test('promise all should contained all values', () => {
    expect(promiseAll)
        .resolves
        .toEqual([
            'resolved after 1 second',
            'resolved after 3 second',
            'resolved after 4 second',
    ]);
});

test('promise race should return the promise with shortest time', () => {
    expect(promiseRace)
        .resolves
        .toBe('resolved after 1 second');
});


test('Async await', () => {
    expect(asyncCall())
        .resolves
        .toBe('Resolved after 2 seconds. This string appended after 2 seconds.');
});