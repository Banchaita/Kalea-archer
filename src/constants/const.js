const baseUrl = ' http://localhost:3002/api/v1/';
const fileUrl = '';


const getCurrentTimeStamp = () => {
    let currentTime = new Date().getTime();
    let tzOffset = new Date().getTimezoneOffset();
    return Math.round(new Date(currentTime + tzOffset).getTime() / 1000);
}

export { baseUrl,getCurrentTimeStamp,fileUrl}