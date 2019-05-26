const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'resolved after 1 second');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'resolved after 3 second');
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'resolved after 4 second');
});

export default Promise.all([promise1, promise2, promise3]);