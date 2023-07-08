const canvas = document.getElementById('canvas');
const colorEl = document.getElementById('color');
const clearBtn = document.getElementById('clear');
const incrementBtn = document.getElementById('increase')
const decrementBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size')

const ctx = canvas.getContext('2d');

let size = Number(sizeEl.innerText);
let color = "black";
let isPressed = false;
let x;
let y;

sizeEl.innerText = String(size);
const incrementSize = () => {
    size++;
sizeEl.innerText = String(size);

}

const decrementSize = () => {
    size--;
sizeEl.innerText = String(size);

}

incrementBtn.addEventListener('click', incrementSize)
decrementBtn.addEventListener('click', decrementSize)


clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

colorEl.addEventListener('input', (e) => {
    color = colorEl.value;
})
canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;

    console.log(isPressed, x, y);
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        
        x = x2;
        y = y2;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
    }

})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = null;
    y = null;

})


function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}
