const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('resolved');
        reject(new Error('User is not logged in..'))
    }, 1500);
});

promise
    .then(result => {
        console.log(result);
    })
    .catch(error => console.log(error.message));