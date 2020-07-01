export const calculate = (expression) => {
    if (expression === "") {
        return 0;
    }

    const matchesWithoutOperator = expression.match(/^[\d\s\.]*\s(\d\.?\d?)$/);
    if (matchesWithoutOperator !== null) {
        return parseFloat(matchesWithoutOperator[1]);
    }

    let matchesWithOperator = null;
    let value = 0;

    while (matchesWithOperator = expression.match(/\s?((\d+\.?\d*)\s(\d+\.?\d*)\s([\*\/\+\-]))\s?/)) {
        const currentOperation = matchesWithOperator[1];
        const leftOperand = parseFloat(matchesWithOperator[2]);
        const rightOperand = parseFloat(matchesWithOperator[3]);
        const operatorExpression = matchesWithOperator[4];

        if (operatorExpression === "*") {
            value = leftOperand * rightOperand;
        } else if (operatorExpression === "/") {
            value = leftOperand / rightOperand;
        } else if (operatorExpression === "+") {
            value = leftOperand + rightOperand;
        } else {
            value = leftOperand - rightOperand
        }

        expression = expression.replace(currentOperation, value);
    }

    return value;
};