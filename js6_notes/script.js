let notes = [];
const button = document.querySelector("button");
const container = document.querySelector(".form__area");


button.addEventListener('click', function(e) {
    e.preventDefault()
    let input = document.querySelector(".form__textarea");
    let error = document.querySelector(".form__error");
    if (input.value === "") {
        error.textContent = "Пустая строка";
        return;
    }
    if (input.value.length < 4) {
        error.textContent = "Слишком короткая заметка";
        return;
    }
    
    let note = createNote(input.value);
    container.appendChild(note);
    addElementToLocalStorage(note.textContent);
    input.value = "";

});

const createNote = (text) => {
    let note = document.createElement("p");
    note.textContent = text;
    return note;
};

const getArrToLocalStorage = () => {
    let list = JSON.parse(localStorage.getItem('note'));
    if (list) {
        notes = list;
    }
};

const setArrToLocalStorage = () => {
    localStorage.setItem('note', JSON.stringify(notes));
};

const addElementToLocalStorage = (note) => {
    notes.push(note);
    setArrToLocalStorage();
};

const getNotes = () => {
    getArrToLocalStorage();
    for (let i = 0; i < notes.length; i++) {
        let note = createNote(notes[i]);
        container.appendChild(note);
        
    }
};

document.addEventListener('DOMContentLoaded', function() {
    getNotes();
});

