// приветствие

const showMessage = () => {
    let input = document.getElementById('name');
    let nameResult = document.getElementById('nameResult');
    nameResult.textContent = "Привет, " + input.value + "!";
    input.value = "";
};

// калькулятор

const sum = (a, b) => {
    a = document.getElementById('sum1').value;
    b = document.getElementById('sum2').value;
    let result = Number(a) + Number(b);
    let sumResult = document.getElementById('sumResult');
    return sumResult.textContent = result;
};

const sub = (a, b) => {
    a = document.getElementById('sub1').value;
    b = document.getElementById('sub2').value;
    let result = Number(a) - Number(b);
    let subResult = document.getElementById('subResult');
    return subResult.textContent = result;
};

const div = (a, b) => {
    a = document.getElementById('div1').value;
    b = document.getElementById('div2').value;
    let result = Number(a) / Number(b);
    let divResult = document.getElementById('divResult');
    return divResult.textContent = result;
};

const mult = (a, b) => {
    a = document.getElementById('mult1').value;
    b = document.getElementById('mult2').value;
    let result = Number(a) * Number(b);
    let multResult = document.getElementById('multResult');
    return multResult.textContent = result;
};

// дивы

const divColor = sender => sender.classList.add('column_color');

// галерея

const frw = () => {
    let img = document.querySelector('.photo');
    img.src = "img/dog.jpeg";
};

const bck = () => {
    let img = document.querySelector('.photo');
    img.src = "img/cat.jpeg";
};