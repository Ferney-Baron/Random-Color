
const colors = ["Blue", "Green", "Yellow", "Orange", "Red", "Pink", "black"];

const colorChange = document.getElementById('colorChange');
const bgColor = document.getElementById('bgColor');
const button = document.getElementById('button');
const nav = document.getElementById('nav');

button.addEventListener('click', () => {
    let color = colors[randomNumber()];
    document.body.style.backgroundColor = color;
    colorChange.textContent = color;
    if (colors[6] == color) {
        bgColor.style.backgroundColor = "white";
        bgColor.style.color = "Black";
        button.style.backgroundColor = "white";
        button.style.color = "black";
        nav.style.boxShadow = "0px 0px 15px white";
    } else {
        bgColor.style.backgroundColor = "black";
        bgColor.style.color = "white";
        button.style.backgroundColor = "black";
        button.style.color = "white";
        nav.style.boxShadow = "0px 0px 15px black";
    }
})

const randomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}






