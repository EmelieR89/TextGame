
let isStartPage = true;

/**
 * Makes the div-overlay disappear and starts the music. 
 */
function startTheGame() {
    let startPage = document.querySelector(".firstSite")
    startPage.style.display = "none"

    isStartPage = false;

    const musicBackground = new Audio("./MovieFreaky.mp3.mp3");
    musicBackground.loop = true;
    musicBackground.play();

}


/**
 * Gives the player instructions on how to play game
 */
function instructions() {
    let instructionButton = document.querySelector("h4")
    instructionButton.innerHTML = "You need to get out of this house. You can write the instructions: north, east, south and west."
}

let room = [
    "Game over!!",
    "You're in an <em>office</em>. Wait, what was that sound?",
    "Looks like a <em>library</em>",
    "You're in a <em>kitchen</em>. The footsteps are closer now.",
    "Looks like a <em>livingroom</em>",
    "This must be the <em>master bedroom</em>",
    "You're in a <em>music room</em>. You can feel a cold breeze.",
    "The <em>lobby</em>",
    "Creepy <em>child room</em>",
];

let currentRoom = 4;

let blockedPath = "<strong>The windows have bars, you can't go that way!</strong>"

const commandosToMake = ["north", "east", "south", "west"];

let output = document.getElementById("output");
let input = document.getElementById("userAnswer");


render();


input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        if (!isStartPage)
            playGame()
        else if (isStartPage)
            startTheGame()
    }
});


/**
 * This function calculates player position and movement.
 */
function playGame() {
    let playersChoice = "";
    let gameMessage = "";

    playersChoice = input.value;
    playersChoice = playersChoice.toLowerCase();

    switch (playersChoice) {

        case "north":
            if (currentRoom > 2) {
                currentRoom -= 3;
            } else {
                gameMessage = blockedPath
            }
            break;


        case "east":
            if (currentRoom === 2 || currentRoom === 5 || currentRoom === 8) {
                gameMessage = blockedPath
            } else {
                currentRoom += 1;
            }
            break;

        case "south":
            if (currentRoom < 6) {
                currentRoom += 3;
            } else if (currentRoom === 6) {
                const img2 = document.querySelector(".hiddenUntilWin")
                img2.style.display = "unset"

            } else {
                gameMessage = blockedPath
            }
            break;


        case "west":
            if (currentRoom === 0 || currentRoom === 3 || currentRoom === 6) {
                gameMessage = blockedPath
            } else {
                currentRoom -= 1;

            }
            break;

        default: gameMessage = "You can't make that choice"


    }
    checkDeathCondition();

    render(gameMessage);

}

/**
 * Displays "You're dead"-image if player enters room 0
 */
function checkDeathCondition() {
    if (currentRoom === 0) {
        const img1 = document.querySelector(".hiddenUntilDead")
        img1.style.display = "unset"
    }
}

/**
 * Displays information to the player. 
 * @param {string} gameMessage Choices the player can't perform.
 */
function render(gameMessage = "") {
    input.value = "";
    if (gameMessage.length > 1) {
        output.innerHTML += "<br><strong>" + gameMessage
            + "</strong>";
    } else {
        output.innerHTML += "<br>" + room[currentRoom];
    }
    output.scrollTop = output.scrollHeight;

}

