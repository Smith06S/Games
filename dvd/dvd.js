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

// function that gives the movement to the dvd
function animation() {
    // update the position of the dvd by incrementing its values
    x += speedX;
    y += speedY;

    // if the dvd reaches the width of the window, the the dvd goes the opposite direction
    if (x + 300 >= window.innerWidth || x <= 0) {
        speedX *= -1;
        randomColor()
    }

    // if the dvd reaches the height of the window, the the dvd goes the opposite direction
    if (y + 300 >= window.innerHeight || y <= 0) {
        speedY *= -1;
        randomColor()
    }

    // changes the left and top element of the css to see the dvd move on the window
    dvd.style.left = x + "px";
    dvd.style.top = y + "px";

    // calls the animation function to make a continuous movement
    requestAnimationFrame(animation);
}

// function to randomly change the color of the dvd
function randomColor() {
    // takes the element that needs the new color and its current color
    const element = document.querySelector("#dvd");
    var currentColor = element.style.fill;

    // choose a randome color in the colors array
    const newColor = colors[Math.floor(Math.random() * colors.length)];

    // gives a color making sure it is not the same as the previous one
    while (newColor === currentColor);
    paths.style.fill = newColor;
}

// start the animation loop
requestAnimationFrame(animation);
