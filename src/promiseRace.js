const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'resolved after 5 second');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'resolved after 1 second');
});

export default Promise.race([promise1, promise2]);