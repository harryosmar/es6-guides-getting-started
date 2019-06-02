function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

const myColors = [];
for (let color of colors()) {
    myColors.push(color);
}

export default myColors;