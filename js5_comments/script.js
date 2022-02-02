const button = document.querySelector("button");

const checkSpam = (str) => {
return str.replace(/viagra/i,"***" )
.replace(/xxx/i,"***" );
};

button.addEventListener("click", function(event) {
    event.preventDefault()
    let value = document.querySelector("textarea").value;
    let container = document.querySelector(".form__area");
    let comment = document.createElement("div");
    comment.value = value;
    comment.textContent = checkSpam(value);
    container.appendChild(comment);
});
