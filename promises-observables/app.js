const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello world!');
    }, 1500);
});

promise.then(result => console.log(result));