const http = require('http');

function fetchWebPage(url) {
    return new Promise((resolve, reject) => {
        http.get(url, response => {
            let responseData;
            response.on('data', data => responseData = responseData + data);
            response.on('end', () => resolve(responseData));
            response.on('error', reject);
        });
    });
}


// fetchWebPage('http://www.krishantha.com/')
//     .then(data => console.log(data.length))
//     .catch(error => console.log(error))
//     .finally(() => console.log('finished'));







// =============== 2nd way
// this does not wait for response
function readWebPage2() {
    let resp = '';
    resp = fetchWebPage('http://www.krishantha.com');
    console.log('2', resp.length);
}
readWebPage2();






//================= async await
// await only valid inside async function
// without await keyword this works same as readWebPage2() function.
async function readWebPage3() {
    let resp = '';
    resp = await fetchWebPage('http://www.krishantha.com');
    console.log('3', resp.length);
}
readWebPage3();