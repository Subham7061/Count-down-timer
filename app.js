
let secondHeading = document.getElementById("secondHeading");
let day = document.getElementById("days");
let hours = document.getElementById("hour");
let minutes = document.getElementById("minute");
let seconds = document.getElementById("second");

const endDate = "5 October 2023  03:00 PM";
secondHeading.innerText = endDate;

setInterval(() => {

    let end = new Date(endDate);
    const todayDate = new Date();
    let difference = end - todayDate;
    if(difference<0){return}
    else{
    let days = Math.floor((difference / (1000 * 3600 * 24)));
    day.value = days;

    let hour = Math.floor((difference / (1000 * 3600)) % 24);
    hours.value = hour;

    let minute = Math.floor(difference / (1000 * 60)) % 60;
    minutes.value = minute;

    let second = Math.floor(difference / 1000) % 60;
    seconds.value = second;
    }
}, 1000);











