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

// error handling is done by try catch instead of catch in promises
async function displayUser() {
    try {
        const user = await loginUser('lahirus250', 1234);
        console.log(user);
        const videos = await getUserVideos(user.username);
        console.log(videos);
        const videoDetails = await getVideoDetails(videos[0]);
        console.log(videoDetails);
    } catch (error) {
        console.log('Videos detail retrieval is failed:', error);
    }
}
displayUser();

console.log('end');