class Cat {
    constructor(name, breed, food, sex) {
        this.name = name;
        this.breed = breed;
        this.food = food;
        this.sex = sex;
    }
}

let petForm = document.querySelector(".petForm");

petForm.addEventListener("submit", function(e) {
    e.preventDefault()
    let petName = document.querySelector(".petName").value;
    let petBreed = document.querySelector(".petBreed").value;
    let food = document.getElementsByName("petFood");
    let sex = document.getElementsByName("sex");
    let petFood = [];
    let petSex;

    for (let i = 0; i < food.length; i++) {
        if (food[i].checked) {
            petFood.push(food[i].value);
        }
    }

    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            petSex = sex[i].value
        }
    }

    let cat = new Cat(petName, petBreed, petFood, petSex);

    const image = document.querySelector('input[type=file]')['files'][0];

    const formData = new FormData(document.getElementById('formHolder'));
    // formData.append("photo", `data:image/jpg;base64,${base64String}`);

    fetch("https://httpbin.org/post", {
        method: 'POST',
        mode: 'cors',
        body: formData
    })
    .then(response => response.json())
    .then(user => console.log(user))
    .catch(error => console.log(error))
});

// let base64String = "";

// document.getElementById("file").addEventListener("change", function() {
//     const file = document.querySelector(
//         'input[type=file]')['files'][0];
//     const reader = new FileReader();
//     console.log("next");

//     reader.onload = function () {
//         base64String = reader.result.replace("data:", "")
//             .replace(/^.+,/, "");
//         const imageBase64Stringsep = base64String;

//         console.log(base64String);
//     }
//     reader.readAsDataURL(file);
// });