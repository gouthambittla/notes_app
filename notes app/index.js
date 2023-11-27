const notescontainer = document.querySelector('.notes');
const button = document.querySelector('.container button')


button.addEventListener('click', () => {
    let inputbox = document.createElement("p");
    let del = document.createElement("img");
    inputbox.className = "inputbox";
    inputbox.setAttribute("contenteditable", "true");
    del.src = "images/delete.png";
    notescontainer.appendChild(inputbox).appendChild(del);
})

notescontainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove()
    }
})