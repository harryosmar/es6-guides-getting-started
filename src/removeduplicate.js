const removeDuplicate = (parameter, treshold) => {
    if (parameter === '') {
        return '';
    }

    const parameterArr = parameter.match(/./g);

    let duplicateObject = {
        stringValue: parameterArr[0],
        charValue: parameterArr[0],
        count: 1
    };

    let result = '';

    for(let i = 1; i < parameterArr.length; i++) {
        if (duplicateObject.charValue === parameterArr[i]) {
            duplicateObject.count = duplicateObject.count + 1;
            duplicateObject.stringValue = `${duplicateObject.stringValue}${duplicateObject.charValue}`;
        } else {
            if (duplicateObject.count < treshold) {
                result  = `${result}${duplicateObject.stringValue}`;
            }
            duplicateObject = {
                stringValue: parameterArr[i],
                charValue: parameterArr[i],
                count: 1
            };
        }

        if (i === parameterArr.length - 1 && duplicateObject.count < treshold) {
            result  = `${result}${duplicateObject.stringValue}`;
        }
    }

    return result;
};

export default removeDuplicate;