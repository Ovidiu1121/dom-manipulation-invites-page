let inputText = document.querySelector(".textbox");
let btnSubmit = document.querySelector(".submit");
let lista = document.querySelector("ul");
let checkboxHide = document.querySelector(".hideCards");

btnSubmit.addEventListener("click", () => {

    if (inputText.textContent !== " ") {
        let card = createCard(inputText.value);
        lista.appendChild(card);
    }

})

function createCard(text) {

    let inviteName = document.createElement("span");
    inviteName.textContent = text;

    let label = document.createElement("label");
    label.textContent = "Confirmed";

    let chechbox = document.createElement("input");
    chechbox.type = "checkbox";
    chechbox.classList = "checkbox";

    let btnEdit = document.createElement("button");
    btnEdit.textContent = "edit";
    btnEdit.classList = "edit";

    let btnremove = document.createElement("button");
    btnremove.textContent = "remove";
    btnremove.classList = "remove";

    label.appendChild(chechbox);

    let item = document.createElement("li");
    item.appendChild(inviteName);
    item.appendChild(label);
    item.appendChild(btnEdit);
    item.appendChild(btnremove);

    return item;

}

lista.addEventListener("click", (eve) => {
    let pressed = eve.target;
    let card = pressed.parentNode;
    let parent = card.parentNode;

    if (pressed.classList.contains("edit")) {

        let cardInviteName = card.firstChild;

        let newTextBox = document.createElement("input");
        newTextBox.type = "textbox";
        newTextBox.textContent = cardInviteName.textContent;

        cardInviteName.contentEditable = true;
        cardInviteName.focus();
    } else if (pressed.classList.contains("remove")) {

        parent.removeChild(card);

    }

})

checkboxHide.addEventListener("change", function () {
    var cards = [].slice.call(lista.children);

    if (checkboxHide.checked) {
        console.log("da");
        for (let i = 0; i < cards.length; i++) {
            let checkboxConfirmed = cards[i].querySelector(".checkbox");

            if (!checkboxConfirmed.checked) {
                cards[i].style.display = 'none';
            }
        }
    } else {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = 'list-item';
        }
    }
});