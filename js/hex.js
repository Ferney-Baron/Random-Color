const colors = [1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"];

const colorChange = document.getElementById('colorChange');
const button = document.getElementById('button');

button.addEventListener('click', () => { 
    let hex = "#";
    for(let i = 0; i < 6; i++) {
        hex += colors[randomNumber()];
    }
    document.body.style.backgroundColor = hex;
    colorChange.textContent = hex;
    
});


const randomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}
