console.log('start');
function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ username: username });
        }, 2000);
    });
};
function getUserVideos(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['video1', 'video2', 'video3']);
        }, 1000);
    });
};
function getVideoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Video details is here');
        }, 1000);
    });
}

loginUser('lahirus250', 1234)
    .then(user => getUserVideos(user.username))
    .then(videos => getVideoDetails(videos[0]))
    .then(details => console.log(details));

// console.log('end');



/////////////// wait until 2 or more promises resolve and do operations
// Creates a Promise that is resolved with an array of results when all 
// of the provided Promises resolve, or rejected when any Promise is rejected.
const ytVideos = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('getting videos from youtube');
        resolve({ videos: [1, 2, 3, 4] });
    }, 2000);
});

const fbVideos = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('getting videos from fb');
        resolve({ videos: 'vid1' });
    }, 5000);
});

Promise.all([ytVideos, fbVideos]).then(videos => console.log(videos));
