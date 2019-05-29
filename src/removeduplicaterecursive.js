import removeDuplicate from './removeduplicate.js';

const removeDuplicateRecursive = (parameter, treshold) => {
    let value = removeDuplicate(parameter, treshold);
    let nextValue;

    while (
            (nextValue = removeDuplicate(value, treshold))
            && nextValue !== value
    ) {
        value = nextValue;
    }

    return nextValue;
};

export default removeDuplicateRecursive;