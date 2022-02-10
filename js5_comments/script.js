

document.addEventListener("DOMContentLoaded", function(event) {
    let username = localStorage.getItem('name');
    if (username != null) {
        document.querySelector("#name").value = username;
    }

    let comm = localStorage.getItem('comments');
    if (comm != null) {
        let items = comm.split(", ");

        for (let i = 0; i <= items.length; i++) {
            let comment = document.createElement("div");
            comment.classList.add('comment');
            comment.textContent = items[i];
            document.querySelector(".form__area").appendChild(comment);
        }
        // document.querySelector(".form__area").innerHTML += comm.split(", ")
        // console.log(comm.split(", "))
    }

});


const button = document.querySelector("button");
const comments = [];

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

    // let avatar = document.createElement("img");
    // let photo = document.querySelector("#photo").value;
    // avatar.classList.add("img");
    // avatar.src = "https://cdn-icons-png.flaticon.com/512/893/893815.png"; 

    // if(photo) {
    //     avatar.src = photo; 
    // };

    localStorage.setItem('name', name);

    if (textarea.value) {
        comment.classList.add('comment');
        comment.textContent = `${name}: ${checkSpam(textarea.value)}`;
        // comment.appendChild(avatar);
        container.appendChild(comment);
        comments.push(comment.textContent);
        textarea.value = '';
    } else return;

    localStorage.setItem('comments', (localStorage.getItem('comments') || '') + ", " + comments.join(", "));


});

// другой вариант



// button.onclick = function(user, text) {
//     let container = document.querySelector(".form__area");

//     if (text) {
//         comment.classList.add('comment');
//         comment.textContent = `${user}: ${checkSpam(text)}`;
//         container.appendChild(comment);
//         comments.push(comment.textContent);
//         textarea.value = '';
//     } else return;

// };




// const addComment = () => {
//     let textarea = document.querySelector("textarea");
//     user = document.querySelector("#name").value;
//     let container = document.querySelector(".form__area");
//     let comment = document.createElement("div");
//     text = textarea.value;
//     comment.classList.add('comment');
//     comment.textContent = `${user}: ${checkSpam(text)}`;
// };