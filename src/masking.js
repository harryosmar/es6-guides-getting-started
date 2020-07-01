const maskCreditCard = (creditCardNumber) => {
    if (creditCardNumber.length < 6) {
        return creditCardNumber;
    }

    const parts = creditCardNumber.match(/^(.)(.+)(.{4})$/);

    return `${parts[1]}${parts[2].replace(/[\d]/g, '#')}${parts[3]}`;
};

export {maskCreditCard};