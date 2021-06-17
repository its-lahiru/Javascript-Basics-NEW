// old
// console.log("start");

// function getData(data, callback) {
//     setTimeout(() => {
        // console.log("reading the database");
//         callback({ data: data });
//     }, 2000);
// }

// getData(5, function(data) {
    // console.log(data);
// });

// console.log("finish");









// es6
// const prom = new Promise((resolve, reject) => {
    // Here is async
    // setTimeout(() => {
    //     resolve(200);
    // }, 1000);

//     setTimeout(() => {
//         reject(new Error('something went wrong'));
//     }, 3000);
// });

// prom.then(data => {
//     console.log(data);
// })
// .catch(error => {
//     console.log(error);
// })

// const prom2 = new Promise((resolve, rejecet) => {
//     // Here is async
    
// });

// prom2.then(data => {
//     console.log(data);
// })


const myPromise = new Promise((myResolve, myReject) => {
    let x = 10;
    if (x > 5) {
        myResolve();
    } else {
        myReject();
    }    
});

myPromise.then(
    function(value) {console.log('It is successful!!')},
    function(error) {console.log('Mission failed...')}
)