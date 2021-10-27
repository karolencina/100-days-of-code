const colours = ["SandyBrown", "NavajoWhite", "IndianRed", "SlateGrey",
    "PaleVioletRed", "PeachPuff", "DarkSeaGreen", "RosyBrown", "MistyRose",
    "Pink", "LightSalmon", "Teal", "Maroon"];
const btn = document.getElementById("btn");
const colour = document.querySelector(".colour");

btn.addEventListener("click", function() {
    // get a random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colours[randomNumber];
    colour.textContent = colours[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colours.length);
}