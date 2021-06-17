/*Important: Always return results, otherwise callbacks won't catch the result of a
previous promise (with arrow functions () => x is short for () => { return x; }).*/

//Unlike old-fashioned passed-in callbacks, a promise comes with some guarantees:
// (1)Callbacks added with then() will never be invoked before the completion of the 
// current run of the JavaScript event loop.
// (2)These callbacks will be invoked even if they were added after the success or failure 
// of the asynchronous operation that the promise represents.
// (3) Multiple callbacks may be added by calling then() several times. They will be 
// invoked one after another, in the order in which they were inserted.

//Promises solve a fundamental flaw with the callback pyramid of doom, 
// by catching all errors, 
// even thrown exceptions 
// and programming errors. 
// This is essential for functional composition of asynchronous operations.

// In the old days, doing several asynchronous operations in a row would lead to the 
//classic callback pyramid of doom:
doSomething(function (result) {
    doSomethingElse(result, function (newResult) {
        doThirdThing(newResult, function (finalResult) {
            console.log('Got the final result: ' + finalResult);
        }, failureCallback);
    }, failureCallback);
}, failureCallback);

//With modern functions, we attach our callbacks to the returned promises instead, 
//forming a promise chain:
//The arguments to then are optional, and catch(failureCallback) is short for 
//then(null, failureCallback).
doSomething()
    .then(function (result) {
        return doSomethingElse(result);
    })
    .then(function (newResult) {
        return doThirdThing(newResult);
    })
    .then(function (finalResult) {
        console.log('Got the final result: ' + finalResult);
    })
    .catch(failureCallback);

///////////////with arrow functions
doSomething()
    .then(result => doSomethingElse(result))
    .then(newResult => doThirdThing(newResult))
    .then(finalResult => {
        console.log(`Got the final result: ${finalResult}`);
    })
    .catch(failureCallback);


///////////// Chaining after a catch
// It's possible to chain after a failure, i.e. a catch, which is useful to accomplish 
// new actions even after an action failed in the chain.
new Promise((resolve, reject) => {
    console.log('Initial');
    resolve();
})
    .then(() => { //throw error
        throw new Error('Something failed');

        console.log('Do this');
    })
    .then(() => { // does not execute
        throw new Error('Something failed');

        console.log('Do this');
    })
    .catch(() => { // handle error
        console.error('Do that');
    })
    .then(() => { // excute anyway
        console.log('Do this, no matter what happened before');
    });
// This will output the following text:
// Initial
// Do that
// Do this, no matter what happened before


///////////////// Error propagation
// You might recall seeing failureCallback three times in the pyramid of doom 
// earlier, compared to only once at the end of the promise chain:
doSomething()
    .then(result => doSomethingElse(result))
    .then(newResult => doThirdThing(newResult))
    .then(finalResult => console.log(`Got the final result: ${finalResult}`))
    .catch(failureCallback);


////////////////// Promise rejection events
// Whenever a promise is rejected, one of two events is sent to the global scope
// (1)rejectionhandled - Sent when a promise is rejected, after that rejection has been 
//                        handled by the executor's reject function.
// (2)unhandledrejection - Sent when a promise is rejected but there is no rejection 
//                         handler available.
// In both cases, the event (PromiseRejectionEvent) has as members
// a promise property indicating the promise that was rejected, 
// and a reason property that provides the reason given for the promise to be rejected.


//////////////// For Node.js, to prevent the error from being logged to the console 
// (the default action that would otherwise occur), adding that process.on() 
// listener is all that’s necessary
process.on("unhandledRejection", (reason, promise) => {
    /* You might start here by adding code to examine the
     * "promise" and "reason" values. */
});


////////////////// Creating a Promise around an old callback API
// A Promise can be created from scratch using its constructor. This should be needed only to 
// wrap old APIs.
setTimeout(() => saySomething("10 seconds passed"), 10 * 1000);
// Best practice is to wrap problematic functions at the lowest possible level, and then never call 
// them directly again:
const wait = ms => new Promise(resolve => setTimeout(
    () => {
        resolve;
    }, ms));
// usage
wait(10 * 1000).then(() => saySomething('10 seconds passed')).catch(failureCallback);
// Basically, the promise constructor takes an executor function that lets us resolve or reject a
// promise manually. Since setTimeout() doesn't really fail, we left out reject in this case.



/////////////////Composition
// (1) Promise.resolve() 
// (2) and Promise.reject() 
// are shortcuts to manually create an already resolved or rejected promise respectively.
// This can be useful at times.

// Promise.all()
// and Promise.race()
// are two composition tools for running asynchronous operations in parallel.
// We can start operations in parallel and wait for them all to finish like this:
Promise.all([func1(), func2(), func3()])
    .then(([result1, result2, result3]) => { /**use result1, result2 and result3 */ });
// Sequential composition is possible using some clever JavaScript:
// Basically, we reduce an array of asynchronous functions down to a promise chain equivalent to: 
// Promise.resolve().then(func1).then(func2).then(func3);
[func1(), func2(), func3()].reduce((promise, func) => promise.then(func), Promise.resolve())
    .then(result3 => {/**use result3 */ });




//////////////////// Timing
// To avoid surprises, functions passed to then() will never be called synchronously, 
// even with an already - resolved promise:
Promise.resolve().then(() => console.log(2));
console.log(1); // 1, 2
// Instead of running immediately, the passed-in function is put on a microtask queue,
// which means it runs later (only after the function which created it exits, and when the 
// JavaScript execution stack is empty), just before control is returned to the event loop
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
wait(0).then(() => console.log(4));
Promise.resolve().then(() => console.log(2)).then(() => console.log(3));
console.log(1); // 1, 2, 3, 4

///////////////////Task queues vs microtasks
// Promise callbacks are handled as a Microtask 
// whereas setTimeout() callbacks are handled as Task queues.
const promise = new Promise(function (resolve, reject) {
    console.log("Promise callback");
    resolve();
}).then(function (result) {
    console.log("Promise callback (.then)");
});
setTimeout(function () {
    console.log("event-loop cycle: Promise (fulfilled)", promise)
}, 0);
console.log("Promise (pending)", promise);
///////// output
// Promise callback
// Promise(pending) Promise {<pending>}
// Promise callback (.then)
// event-loop cycle: Promise (fulfilled) Promise {<fulfilled>}



///////////////////// Nesting
// Nesting is a control structure to limit the scope of catch statements.
// Specifically, a nested catch only catches failures in its scope and below, 
//         not errors higher up in the chain outside the nested scope
// When used correctly, this gives greater precision in error recovery:
doSmoethingCrtical()
    .then(result => doSomethingOptional(result)
        .then(optionalResult => doSomethingExtraNice(optionalResult))
        .catch(e => { })) // // Ignore if optional stuff fails; proceed.
    .then(() => moreCriticalStuff())
    .catch(e => console.log('Critical failure:', e.message));
// The inner neutralizing catch statement only catches failures from doSomethingOptional()
// and doSomethingExtraNice(), after which the code resumes with moreCriticalStuff().
// Importantly, if doSomethingCritical() fails, its error is caught by the final (outer) catch only.




//////////////////// Common mistakes
// Bad example! Spot 3 mistakes!
doSomething().then(function (result) {
    doSomethingElse(result) // Forgot to return promise from inner chain + unnecessary nesting
        .then(newResult => doThirdThing(newResult));
}).then(() => doFourthThing());
// Forgot to terminate chain with a catch!

// The first mistake is to not chain things together properly.
// This happens when we create a new promise but forget to return it.
// As a consequence, the chain is broken, or rather, we have two independent chains racing.
// This means doFourthThing() won't wait for doSomethingElse() or doThirdThing() to finish, 
// and will run in parallel with them, likely unintended. Separate chains also have separate 
// error handling, leading to uncaught errors.

// The second mistake is to nest unnecessarily, enabling the first mistake. 
// Nesting also limits the scope of inner error handlers, which—if unintended—can 
// lead to uncaught errors.

// The third mistake is forgetting to terminate chains with catch. Unterminated promise chains 
// lead to uncaught promise rejections in most browsers.




////////////////// Rule of thumb
// A good rule - of - thumb is to always either return or terminate promise chains, 
// and as soon as you get a new promise, return it immediately, to flatten things:
doSomething()
    .then(function (result) {
        return doSomethingElse(result);
    })
    .then(newResult => doThirdThing(newResult))
    .then(() => doFourthThing())
    .catch(error => console.error(error));
// Note that () => x is short for () => { return x; }.
// Now we have a single deterministic chain with proper error handling.
// Using async/await addresses most, if not all of these problems—the tradeoff being that 
// the most common mistake with that syntax is forgetting the await keyword.




























