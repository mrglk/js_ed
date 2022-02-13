const form = document.querySelector("form");
let textarea = document.querySelector("textarea");
let container = document.querySelector(".form__area");

let comm = localStorage.getItem('comments');
let comments = comm != null ? comm.split(", ") : [];

let ava = localStorage.getItem('ava');
let avatars = ava != null ? ava.split(", ") : [];

form.addEventListener("submit", function(event) {
    event.preventDefault()
    let name = document.querySelector("#name").value;
    let avatar = getAvatar();
    localStorage.setItem('name', name);

    if (!textarea.value) {
        return;
    }
    
    createComment(name, avatar, textarea.value);
    textarea.value = '';
    localStorage.setItem('comments', comments.join(", "));

});

const createComment = (username, image, text) => {
    let comment = document.createElement("div");
    let p = document.createElement("p");
    comment.classList.add('comment');
    p.classList.add("comment__inner");
    p.textContent = `${username}: ${checkSpam(text)}`;
    comment.appendChild(p);
    comment.appendChild(image);
    container.appendChild(comment);
    comments.push(p.textContent);
};

const getAvatar = () => {
    let avatar = document.createElement("img");
    let file = document.querySelector("#file");
    
    avatar.classList.add("img");

    if (file.value) {
            const reader = new FileReader();
            reader.onload = function(e) {
                addAvatar(avatar, e.target.result);
            };
            reader.readAsDataURL(file.files[0]);
    } else {
        addAvatar(avatar, "https://cdn0.iconfinder.com/data/icons/clearicons/789/anonim-512.png");
    }

    return avatar;
};

const addAvatar = (avatar, src) => {
    avatar.src = src;
    avatars.push(avatar.src);
    localStorage.setItem('ava', avatars.join(", "));
};

const checkSpam = (str) => {
    return str.replace(/viagra|xxx/ig, "***");
    };

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
            let p = document.createElement("p");
            comment.classList.add('comment');
            p.classList.add("comment__inner");
            p.textContent = items[i];
            comment.appendChild(p);

            let avatar = document.createElement("img");
            avatar.classList.add("img");
            avatar.src = photos[i];

            comment.appendChild(avatar);
            container.appendChild(comment);
        };
    }

});