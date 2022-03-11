const button = document.querySelector('button');

button.addEventListener("click", function() {
    
    const form = button.closest("form");
    const inputs = form.querySelectorAll(".form__input");
    let isValid = true;

    for (let i=0; i<inputs.length; i++) {
        const input = inputs[i];
        const label = input.closest("label");
        const error = label.querySelector(".form__error");

         // выдача ошибок
        const isEmpty = input.value == "";
        input.classList.toggle('form__input_error', isEmpty);
        error.classList.toggle('form__error_active', isEmpty);

         // проверка на пустоту полей
        if(isEmpty) {
            isValid = false;
        }
        // проверка логина (только латинские буквы от 2 до 20 символов)

        if(input.id=="login" && input.value) {
            const regexLogin = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;
            if (!regexLogin.test(input.value)) {
                error.innerText = "Недопустимый формат логина";
                input.classList.add('form__input_error');
                error.classList.add('form__error_active');
                isValid = false;
            } else {
                console.log("логин соответствует");
                input.classList.remove('form__input_error');
                error.classList.remove('form__error_active');
                error.innetText = "Необходимо выбрать логин";
            }
        }

        // проверка пароля (символы латинского алфавита, цифры, заглавные и строчные буквы)

        if(input.id=="password1" && input.value) {
            const regexPas = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
            if (!regexPas.test(input.value)) {
                error.innerText = "Пароль должен состоять из символов латинского алфавита, содержать цифры, заглавные и строчные буквы";
                input.classList.add('form__input_error');
                error.classList.add('form__error_active');
                isValid = false;
            } else {
                console.log("пароль соответствует");
                input.classList.remove('form__input_error');
                error.classList.remove('form__error_active');
                error.innetText = "Необходимо выбрать пароль";
            }
        }

         // проверка повторного ввода пароля

        if (input.id=="password2" && input.value) {
            const pas1 = form.querySelector('#password1');
            if (pas1.value != input.value) {
                error.innerText = "Пароли не совпадают";
                input.classList.add('form__input_error');
                error.classList.add('form__error_active');
                isValid = false;
            } else {
                console.log("пароли совпадают");
                input.classList.remove('form__input_error');
                error.classList.remove('form__error_active');
                error.innetText = "Необходимо ввести пароль еще раз";
            }
        }

        // проверка телефона

        if(input.id=="tel" && input.value) {
            const regexTel = /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/;
            if (!regexTel.test(input.value)) {
                error.innerText = "Недопустимый формат номера";
                input.classList.add('form__input_error');
                error.classList.add('form__error_active');
                isValid = false;
            } else {
                console.log("телефон соответствует");
                input.classList.remove('form__input_error');
                error.classList.remove('form__error_active');
                error.innetText = "Пожалуйста, укажите номер телефона";
            }
        }
    }

    let name = document.getElementById('name').value;

    if(isValid) {
        submitForm();
        alert(`Добро пожаловать, ${name}!`);
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

submitForm = () => {

    const user = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        login: document.getElementById("login").value,
        password1: document.getElementById("password1").value,
        password2: document.getElementById("password2").value,
        tel: document.getElementById("tel").value,
        eula: document.getElementById("eula").checked,
        promo: document.getElementById("promo").checked
    };

    fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": 'application/json;charset=utf-8'
        },
        mode: "cors"
    })
    .then(response => response.json())
    .then(message => console.log(message))
    .catch(error => console.log(error))
}