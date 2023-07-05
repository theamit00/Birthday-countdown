const endDate = document.querySelector('#endDate');
const days = document.querySelector('#days');
const hour = document.querySelector('#hr');
const minute = document.querySelector('#mins');
const second = document.querySelector('#sec');
const monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july'];

const targetDate = new Date("july 06, 2023 00:00:00");
const targetMonth = monthNames[targetDate.getMonth()];
const name = document.querySelector('#name');


endDate.innerHTML = `0${targetDate.getDate()} ${targetMonth} ${targetDate.getFullYear()} 0${targetDate.getHours()} : 0${targetDate.getMinutes()} : 0${targetDate.getSeconds()}`

// code for countDown timer
let intervalId;
document.addEventListener('DOMContentLoaded',()=>{

    intervalId = setInterval(countDown,1000);

})


function countDown(){

    let currentDate = new Date();
    const timeLeft = document.querySelector('p');

    let distanceINnMilliSecond = Math.floor(targetDate.getTime()-currentDate.getTime());

    let daysLeft = Math.floor(distanceINnMilliSecond/(1000*60*60*24));  
    let hourLeft = Math.floor(distanceINnMilliSecond%(1000*60*60*24)/(1000*60*60));  // %(1000*60*60*24) will return how many milliseconds are left in an hour
    let minsLeft = Math.floor(distanceINnMilliSecond%(1000*60*60)/(1000*60));   // %(1000*60*60) will return how many milliseconds are left in a minute
    let secLeft = Math.floor(distanceINnMilliSecond%(1000*60)/1000);       // %(1000*60) will return how many milliseconds are left in a second


    days.innerHTML = daysLeft < 10 ? `0${daysLeft}` : daysLeft;
    hour.innerHTML = hourLeft < 12 ? `0${hourLeft}` : hourLeft;
    minute.innerHTML = minsLeft < 10 ? `0${minsLeft}` : minsLeft;
    second.innerHTML = secLeft < 10 ? `0${secLeft}` : secLeft;


    if(daysLeft>0){
        timeLeft.innerHTML = `${daysLeft} days to go`;
    }
    else if(hourLeft>0){
        timeLeft.innerHTML = `${hourLeft} hrs left`;
    }
    else if(minsLeft>0){
        timeLeft.innerHTML = `${minsLeft} min left` ;
    }

    else if(secLeft>0){
        timeLeft.innerHTML = `${secLeft} secs remaining `;
    }
    else{
        timeLeft.style.display = "none";
    }

    if(distanceINnMilliSecond<0){
        clearInterval(intervalId);

        days.innerHTML = '00';
        hour.innerHTML = '00';
        minute.innerHTML = '00';
        second.innerHTML = '00';

        timeLeft.style.display = "none";
        name.style.display = "block";

    }
}

    





// code for showing current time

// document.addEventListener('DOMContentLoaded',()=>{

//     setInterval(showTime,1000);

// })

// function showTime(){
//     const currentDate = new Date();
//     days.innerHTML = currentDate.getDay()<10? `0${currentDate.getDay()}` : currentDate.getDay();
//     hour.innerHTML = currentDate.getHours()<10? `0${currentDate.getHours()}` : currentDate.getHours();
//     minute.innerHTML = currentDate.getMinutes()<10? `0${currentDate.getMinutes()}` : currentDate.getMinutes();
//     second.innerHTML = currentDate.getSeconds()<10? `0${currentDate.getSeconds()}` : currentDate.getSeconds();
// }
