const button = document.querySelector("button");

let comm = localStorage.getItem('comments');
let comments = comm != null ? comm.split(", ") : [];

let ava = localStorage.getItem('ava');
let avatars = ava != null ? ava.split(", ") : [];

const checkSpam = (str) => {
    return str.replace(/viagra/gi,"***" )
    .replace(/xxx/gi,"***" );
    };


button.addEventListener("click", function(event) {
    event.preventDefault()
    let textarea = document.querySelector("textarea");
    let name = document.querySelector("#name").value;
    let container = document.querySelector(".form__area");
    let comment = document.createElement("div");


    // загрузка аватарки

    let avatar = document.createElement("img");
    avatar.classList.add("img");

    let file = document.querySelector("#file");
    if (file.value) {
            const reader = new FileReader();
            reader.onload = function(e) {
                avatar.src = e.target.result;

                avatars.push(avatar.src);
                localStorage.setItem('ava', avatars.join(", "));
            };
            reader.readAsDataURL(file.files[0]);

    } else {
        avatar.src = "https://cdn0.iconfinder.com/data/icons/clearicons/789/anonim-512.png";
        avatars.push(avatar.src);
        localStorage.setItem('ava', avatars.join(", "));
    };

// сохранение имени

    localStorage.setItem('name', name);

// вывод комментария

    if (textarea.value) {
        comment.classList.add('comment');
        comment.textContent = `${name}: ${checkSpam(textarea.value)}`;
        comment.appendChild(avatar);
        container.appendChild(comment);
        comments.push(comment.textContent);
        textarea.value = '';
    } else return;


// сохранение коммента

    localStorage.setItem('comments', comments.join(", "));

});

// 

document.addEventListener("DOMContentLoaded", function(event) {
    let username = localStorage.getItem('name');
    if (username != null) {
        document.querySelector("#name").value = username;
    }

    let comm = localStorage.getItem('comments');
    let ava = localStorage.getItem('ava');

    if (comm != null) {
        let items = comm.split(", ");
        let photos = ava.split(", ");

        for (let i = 0; i <= items.length - 1; i++) {
            let comment = document.createElement("div");
            comment.classList.add('comment');
            comment.textContent = items[i];

            let avatar = document.createElement("img");
            avatar.classList.add("img");
            avatar.src = photos[i];

            comment.appendChild(avatar);
            

            document.querySelector(".form__area").appendChild(comment);
        };
    };

});