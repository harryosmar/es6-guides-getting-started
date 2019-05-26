const promise = new Promise(resolve => {
    setTimeout(resolve, 2000, 'Resolved after 2 seconds');
});

export default async function asyncCall() {
    var result = await promise;
    return `${result}. This string appended after 2 seconds.`;
}