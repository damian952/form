let divSize = 10;
const phonePattern = '[0-9]{6,}';

const button = document.querySelector("button")
const test = document.querySelector(".test")

const clearValidationErrors = () => {
    let errorMessages = document.getElementsByClassName("errorMessage");

    for (let i = 0; i < errorMessages.length; i++) {
        errorMessages[i].innerText = "";
    }
}
const checkTheBox = (evt) => {
    evt.preventDefault();
    clearValidationErrors();

    const divOne = document.querySelector(".messageOne");
    const email = document.getElementById("email")
    const phone = document.getElementById("phone");
    const divTwo = document.querySelector(".messageTwo")
    const name = document.getElementById("name")
    const divThree = document.querySelector(".messageThree")
    const agrement = document.getElementById("agrement");
    const agrementError = document.getElementById("agrementError");


    if (!name.checkValidity()) {
        divOne.innerText = "Proszę wypełnić pole";
        divOne.style.fontSize = `${divSize}px`
        divOne.style.color = "#c90027";
    }
    if (!email.checkValidity()) {
        divTwo.innerText = "Proszę wypełnić pole";
        divTwo.style.fontSize = `${divSize}px`
        divTwo.style.color = "#c90027";
    }

    let regExp = new RegExp(phonePattern);
    if (!regExp.test(phone.value)) {
        divThree.innerText = "Prosze wypełnic pole";
        divThree.style.fontSize = `${divSize}px`
        divThree.style.color = "#c90027"
    }

    if (!agrement.checkValidity()) {
        agrementError.innerText = "Prosze wyrazić zgodę";
        agrementError.style.fontSize = `${divSize}px`
        agrementError.style.color = "#c90027"
    }
}


button.addEventListener("click", checkTheBox);