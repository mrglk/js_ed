let showMessage = () => {
    let name = document.getElementById('name').value;
    let nameResult = document.getElementById('nameResult');
    return nameResult.textContent = "Привет, " + name + "!";
}

let sum = (a, b) => {
    a = document.getElementById('sum1').value;
    b = document.getElementById('sum2').value;
    let result = Number(a) + Number(b);
    let sumResult = document.getElementById('sumResult');
    return sumResult.textContent = result;
}

let sub = (a, b) => {
    a = document.getElementById('sub1').value;
    b = document.getElementById('sub2').value;
    let result = Number(a) - Number(b);
    let subResult = document.getElementById('subResult');
    return subResult.textContent = result;
}

let div = (a, b) => {
    a = document.getElementById('div1').value;
    b = document.getElementById('div2').value;
    let result = Number(a) / Number(b);
    let divResult = document.getElementById('divResult');
    return divResult.textContent = result;
}

let mult = (a, b) => {
    a = document.getElementById('mult1').value;
    b = document.getElementById('mult2').value;
    let result = Number(a) * Number(b);
    let multResult = document.getElementById('multResult');
    return multResult.textContent = result;
}

let divColor = () => {
    let div = document.getElementsByTagName('div');
    console.log(div);
    
}