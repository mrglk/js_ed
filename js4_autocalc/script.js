const form = document.querySelector('.form');
const model = document.getElementById('model');
const modif = document.getElementById('modif');
const colors1 = document.querySelectorAll('input[name=color_salon]');
const colors2 = document.querySelectorAll('input[name=color_ex]');
const equipments = document.querySelectorAll('.equipment__input')

model.addEventListener("change", function() {
    if (model.value != "0") {
        for (i = 0; i < colors1.length; i++) {
            colors1[i].removeAttribute('disabled');
        }
        for (i = 0; i < colors2.length; i++) {
            colors2[i].removeAttribute('disabled');
        }
        for (i = 0; i < equipments.length; i++) {
            equipments[i].removeAttribute('disabled');
        }
    }

    const sonataMod = [[1924000, '2.0 MPI - 6AT – 2 л, 150 л.c.'], [2174000, '2.5 MPI - 6AT – 2.5 л, 180 л.c.']];
    const solarisMod = [[970000, '1.4 - 6MT – 1.4 л, 100 л.c.'], [1076000, '1.6 - 6MT – 1.6 л, 123 л.c.'], [1091000, '1.4 - 6AT – 1.4 л, 100 л.c.'], [1116000, '1.6 - 6AT – 1.6 л, 123 л.c.']];

    let values = [];
    modif.innerHTML = '';

    if (model.value == "sonata") {
        values = [...sonataMod];
    } else if (model.value == "solaris") {
        values = [...solarisMod];
    }

    modif.disabled = false;

    for (let val of values) {
        let option = document.createElement('option');
        option.value = val[0];
        option.text = val[1];
        modif.appendChild(option);
    }

})

form.addEventListener("change", function() {
    const price = document.querySelector('.price');

    if (model.value == 0) {
        price.innerHTML = '';
        return;
    }

    const modifValue = modif.options[modif.selectedIndex].value;

    let colorsValue;
    for (let i = 0; i < colors2.length; i++) {
        if (colors2[i].checked) {
            colorsValue = colors2[i].value;
        }
    }
    
    let equipmentsValue = 0;
    for (i = 0; i < equipments.length; i++) {
        if (equipments[i].checked) {
            equipmentsValue += Number(equipments[i].value);
        }
    }

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    
    price.innerHTML = `Цена: ${numberWithSpaces(Number(modifValue) + Number(colorsValue) + equipmentsValue)} ₽`;
})
