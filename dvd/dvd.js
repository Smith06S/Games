// gets the element that need to move on the window
const dvd = document.getElementById("Objdvd");

// initialise the location of the element in the middle of the window
var x = 50;
var y = 50;
// initialise the speed of the element
var speedX = 1;
var speedY = 1;

// initialise the array with all the colors that will be chosen randomly
const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

// 
function animate() {
    x += speedX;
    y += speedY;

    if (x + 300 >= window.innerWidth || x <= 0) {
        speedX *= -1;
        randomColor()
    }

    if (y + 300 >= window.innerHeight || y <= 0) {
        speedY *= -1;
        randomColor()
    }

    dvd.style.left = x + "px";
    dvd.style.top = y + "px";

    requestAnimationFrame(animate);
}


function randomColor() {
    const paths = document.querySelector("#dvd"); 
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    paths.style.fill = newColor;

    
}

requestAnimationFrame(animate);
