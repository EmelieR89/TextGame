
const storyBoard = document.querySelector("p")
const inputAnswer = document.querySelector('input[name="Answer"]')

function toContinue() {
    let userChoice = inputAnswer.value

    color(userChoice)
}

function color(colorChoice) {
    let resultFromColorChoice = storyBoard.innerHTML

    if (colorChoice === "blue") {
        resultFromColorChoice = "Du går in genom den blåa dörren. "
            + "Du möter en gammal man."

    } else if (colorChoice === "red") {
        resultFromColorChoice += "<br/>" + "<br/>" + "Du går in genom den röda dörren. " +
            "Där ser du en låda."

    } else if (colorChoice === "green") {
        resultFromColorChoice = "Du dör."
    }
    else {
        resultFromColorChoice += "<br/>" + "<br/>" + "The choice you made is invalid!"
    }


    printQuestion(resultFromColorChoice)
}

function printQuestion(newQuestion) {
    storyBoard.innerHTML = newQuestion
}
