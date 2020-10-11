const canvas = document.querySelector("#draw");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";


let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true

const draw = (e) => {
    if (!isDrawing) return
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue > 360 ? hue = 0 : hue++;
    if (ctx.lineWidth > 100 || ctx.lineWidth < 1) direction = !direction;
    direction ? ctx.lineWidth += 0.5 : ctx.lineWidth -= 0.5;
};

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
    ctx.lineWidth = "1";
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);