// всплытие плейсхолдеров

const formInput = document.getElementById('name');

formInput.addEventListener ("blur", function(event) {
    const inputVal = formInput.value;
    
    if (inputVal) {
        formInput.classList.add('value-exists');
    } else {
        formInput.classList.remove('value-exists');
    }
});