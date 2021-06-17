const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('Colombo');
        resolve('Galle');
        resolve('Jaffna');
        resolve('Ampara');
    }, 500);
});
promise.then(result => {
    console.log('promise: ' + result)
    console.log('==========================================')
});








const observable = new Rx.Observable(observer => {
    setTimeout(() => {
        observer.next('A Colombo');
        observer.next('A Galle');
        observer.next('Jaffna');
        observer.next('Ampara');
    }, 500);
});
observable
.filter(result => result.substring(0,1) === 'A')
.map(result => 'The ' + result)
.subscribe(result => console.log('observable: ' + result));