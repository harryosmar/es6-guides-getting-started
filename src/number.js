const numberToOrdinal = (n) => {
    if (n === 0) {
        return '0';
    }

    const parts = n.toString().match(/(\d)?(\d)$/);

    const lastDigit = parseInt(parts[2]);
    const secondLastDigit = parseInt(parts[1]);

    let ordinalSufix = 'th';

    if (secondLastDigit !== 1) {
        if (lastDigit === 1) {
            ordinalSufix = 'st';
        } else if (lastDigit === 2) {
            ordinalSufix = 'nd';
        } else if (lastDigit === 3) {
            ordinalSufix = 'rd';
        }
    }

    return `${n}${ordinalSufix}`;
};

export {numberToOrdinal};