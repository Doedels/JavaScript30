const sec = document.querySelector(".sec-hand");
const min = document.querySelector(".min-hand");
const hour = document.querySelector(".hour-hand");

setInterval(() => {
    const date = new Date();
    sec.style.transform = `rotate(${90 + date.getSeconds() * 6}deg)`;
    min.style.transform = `rotate(${90 + date.getMinutes() * 6}deg)`;
    hour.style.transform = `rotate(${90 + date.getHours() * 30}deg)`;
}, 1000);