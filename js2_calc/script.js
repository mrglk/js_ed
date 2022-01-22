// цвет фона

const color = document.getElementById('color');
const body = document.querySelector('body');

color.addEventListener("change", function() {

    switch(color.value) {
        case "pink": body.style.backgroundColor = "rgb(209, 158, 186)";
        console.log("розовый")
        break;
        case "blue": body.style.backgroundColor = "rgb(134, 188, 219)";
        console.log("голубой")
        break;
        case "green": body.style.backgroundColor = "rgb(158, 209, 181)";
        console.log("белый")
        break;
        case "white": body.style.backgroundColor = "white";
        console.log("белый")
        break;
        
    }

})

// приветствие

const showMessage = () => {
    let input = document.getElementById('name');
    let nameResult = document.getElementById('nameResult');
    nameResult.textContent = "Привет, " + input.value + "!";
    input.value = "";
};

// калькулятор

const getValues = (x) => {
    const a = document.getElementById(x + "1").value;
    const b = document.getElementById(x + "2").value;
    return [a, b];
};

const sum = () => {
    const [a, b] = getValues('sum');
    let result = Number(a) + Number(b);
    let sumResult = document.getElementById('sumResult');
    return sumResult.textContent = result;
};

const sub = () => {
    const [a, b] = getValues('sub');
    let result = Number(a) - Number(b);
    let subResult = document.getElementById('subResult');
    return subResult.textContent = result;
};

const div = () => {
    const [a, b] = getValues('div');
    if (b == 0) {
        return divResult.textContent = "На ноль делить нельзя!";
    } else {
        let result = Number(a) / Number(b);
        let divResult = document.getElementById('divResult');
        return divResult.textContent = result;
    }
};

const mult = () => {
    const [a, b] = getValues('mult');
    let result = Number(a) * Number(b);
    let multResult = document.getElementById('multResult');
    return multResult.textContent = result;
};

// дивы

const divColor = sender => sender.classList.toggle('column_color');

// галерея старое решение

// const frw = () => {
//     let img = document.querySelector('.photo');
//     img.src = "img/dog.jpeg";
// };

// const bck = () => {
//     let img = document.querySelector('.photo');
//     img.src = "img/cat.jpeg";
// };


const img = document.querySelector('.photo');
const photos = [
    "img/cat.jpeg",
    "img/dog.jpeg",
    "img/duck.jpeg",
];
let currentIndex = 0;

const slide = (step) => {
    if (currentIndex + step < 0 || currentIndex + step >= photos.length) {
        return
    }
    currentIndex = currentIndex + step;
    const newSlide = photos[currentIndex];
    img.setAttribute("src", newSlide);
} 