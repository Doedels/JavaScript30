const sec = document.querySelector(".sec-hand");
const min = document.querySelector(".min-hand");
const hour = document.querySelector(".hour-hand");

setInterval(() => {
    const date = new Date();
    sec.style.transform = `rotate(${90 + date.getSeconds() * 6}deg)`;
    min.style.transform = `rotate(${90 + date.getMinutes() * 6}deg)`;
    const twelveHours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    hour.style.transform = `rotate(${90 + twelveHours * 30}deg)`;
}, 1000);