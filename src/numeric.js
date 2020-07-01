const numberToReadableFormat = (number) => {
    const parts = number.toString().match(/^(\d*)\.?(\d*)$/);
    if (parts.length !== 3) {
        return number;
    }

    const naturalNumberPart = parts[1].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1.`);
    let decimalNumberPart = parts[2].toString();
    if (decimalNumberPart === "") {
        decimalNumberPart = "00";
    } else if (decimalNumberPart.length === 1) {
        decimalNumberPart = `${decimalNumberPart}0`;
    }

    return `${naturalNumberPart},${decimalNumberPart}`;
};

export {numberToReadableFormat};