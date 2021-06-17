import { Observable } from "rxjs";

// create a promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello world!');
    }, 1500);
});
// use promise
promise.then(result => console.log(result));


// create observable
// const observable = new Observable()