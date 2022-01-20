// всплытие плейсхолдеров


// const formInput = document.getElementById('name');

// formInput.addEventListener ("blur", function(event) {
//     const inputVal = formInput.value;
    
//     if (inputVal) {
//         formInput.classList.add('value-exists');
//     } else {
//         formInput.classList.remove('value-exists');
//     }
// });


const button = document.querySelector('button');

button.addEventListener("click", function() {
    const form = button.closest("form");
    const inputs = form.querySelectorAll(".form__input");

    for (let i=0; i<inputs.length; i++) {
        const input = inputs[i];
        const label = input.closest("label");
        const error = label.querySelector(".form__error");
        if (error) {
            const isEmpty = input.value == "";
            input.classList.toggle('form__input_error', isEmpty);
            error.classList.toggle('form__error_active', isEmpty);
        }

        if (input.id=="password2" && input.value) {
            const pas1 = form.querySelector('#password1');
            if (pas1.value != input.value) {
                error.innerText = "Пароли не совпадают";
                input.classList.add('form__input_error');
            error.classList.add('form__error_active');
            } else {
                input.classList.remove('form__input_error');
            error.classList.remove('form__error_active');
            error.innetText = "Необходимо ввести пароль еще раз";
            }
        }
    }
});

const checkbox = document.getElementById('eula');

checkbox.addEventListener('change', function() {
    if (!checkbox.checked) {
        button.setAttribute('disabled', true);
        button.classList.add('button_disabled');
    } else {
        button.removeAttribute('disabled');
        button.classList.remove('button_disabled');
    }
});





// button.addEventListener("click", function() {
//     errorName.textContent = "";
//     errorSurname.textContent = "";

//     if(!document.forms["form"]["name"].value) {
//         document.forms["form"]["name"].classList.add('form__input-error');
//         errorName.textContent += "Пожалуйста, укажите имя";
//         return;
//     }

//     if(!document.forms["form"]["surname"].value) {
//         errorSurname.textContent += "Пожалуйста, укажите фамилию";
//         return;
//     }


// let name = document.getElementById('name').value;
//     console.log(`Добро пожаловать, $(name)!`);
// });

