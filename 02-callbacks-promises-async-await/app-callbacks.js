// Async Javascript
// console.log('start');
// setTimeout(() => {
//     console.log('Inside timeout');
// }, 3000);
// console.log('end');




// callbacks 'way to callback HELL'
console.log('start');
function loginUser(username, password, callback) {
    setTimeout(() => {
        console.log('Now data is available..');
        callback({ username: username });
    }, 2000);
};
function getUserVideos(username, callback) {
    setTimeout(() => {
        callback(['video1', 'video2', 'video3']);
    }, 1000);
};
function getVideoDetails(video, callback) {
    setTimeout(() => {
        callback('Video details is here');
    }, 2000);
}
const user = loginUser('lahirus250', 1234, (user) => {
    console.log(user);
    getUserVideos(user.username, (videos) => {
        console.log(videos);
        getVideoDetails(videos[0], (details) => {
            console.log(details);
        });
    });
});
console.log('end');
