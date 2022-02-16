class Cat {
    constructor(name, breed, food, sex) {
        this.name = name;
        this.breed = breed;
        this.food = food;
        this.sex = sex;
    }
}

let petForm = document.querySelector(".petForm");

petForm.addEventListener("submit", function(e) { // почему не работает с submit
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
    console.log(cat);
});
