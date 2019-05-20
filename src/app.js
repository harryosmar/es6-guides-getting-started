import _ from 'lodash';

const component = () => {
    const element = document.createElement('div');
    console.log({ a:1, ...{b:2}});
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    console.log(...[1, 2, 3].map((n) => n + 1));
    return element;
};
array.forEach(element => {
    
});



document.body.appendChild(component());