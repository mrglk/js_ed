const form = document.querySelector('.form');
const price = document.querySelector('.price');

form.addEventListener("change", function() {
    const modif = document.getElementById('modif');
    const modifValue = modif.options[modif.selectedIndex].value;
    
    const colors = document.querySelectorAll('input[name=color_ex]');
    let colorsValue;
    for (let i = 0; i < colors.length; i++) {
        if (colors[i].checked) {
            colorsValue = colors[i].value;
        }
    }
    
    const equipments = document.querySelectorAll('.equipment__input')
    let equipmentsValue = 0;
    for (i = 0; i < equipments.length; i++) {
        if (equipments[i].checked) {
            equipmentsValue += Number(equipments[i].value);
        }
    }

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    
    price.innerHTML = `Итого: ${numberWithSpaces(Number(modifValue) + Number(colorsValue) + equipmentsValue)} руб.`;
})