var assert = require('assert');

const secondMaxValue = (parameters = []) => {
    // case : case : elements it's empty or only has 1 index
    if (parameters.length <= 1) {
        return -1;
    }

    const max = {
        value: parameters[0],
        diffToSecondMax: 0
    };

    // loop from 2nd element
    for (let i = 1; i < parameters.length; i++) {
        const elementValue = parseInt(parameters[i]);

        if (max.value < elementValue) {  // case : new element value > max.value
            max.diffToSecondMax = elementValue - max.value;
            max.value = elementValue;
        } else if (
            max.value !== elementValue // skip, don't do anything when element value = max.value
            && ( // case : element value which is < max.value
                max.diffToSecondMax === 0 // case : first assigment 2ndMax using element value
                || max.value - max.diffToSecondMax < elementValue // case : new element value > 2ndMax and < max.value
            )) {
            max.diffToSecondMax = max.value - elementValue;
        }
    }

    return max.diffToSecondMax === 0 ? -1 : max.value - max.diffToSecondMax;
};

describe('#SecondMaxValue()', function() {
    it('should return second max value', function() {
        assert.equal(secondMaxValue(["3", "-2", "-1"]), -1);
    });

    it('duplicate is not considered as the second max value : from large to small', function() {
        assert.equal(secondMaxValue(["5", "5", "4", "2"]), 4);
    });

    it('duplicate is not considered as the second max value : from small to large', function() {
        assert.equal(secondMaxValue(["2", "4", "5", "5"]), 4);
    });

    it('only 1 unique elements value', function() {
        assert.equal(secondMaxValue(["4", "4", "4"]), -1);
    });

    it('only 1 element', function() {
        assert.equal(secondMaxValue(["4"]), -1);
    });

    it('empty array should return -1', function() {
        assert.equal(secondMaxValue([]), -1);
    });
});