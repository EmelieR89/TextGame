function instructions() {
    let instructionButton = document.querySelector("h4")
    instructionButton.innerHTML = "You need to get out of this house. You can write instructions: norht, east, south and west."
}

let room = [];

room[0] = "Game over!!";
room[1] = "You're in an office. Wait, what was that sound?";
room[2] = "Looks like a library";
room[3] = "You're in a kitchen. The footsteps are closer now.";
room[4] = "Livingroom";
room[5] = "This must be the master bedroom";
room[6] = "The lobby. You can feel a cold breeze.";
room[7] = "You're in a music room";
room[8] = "Creepy child room";

let currentRoom = 4;

let blockedPath = "Blocked path! You can't go that way!"

//array of commandos that tha game understands
const commandosToMake = ["north", "east", "south", "west"];

//input and output
let output = document.getElementById("output");
let input = document.getElementById("userAnswer");

render();

/**
 * 
 */
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        playGame()
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
                gameMessage = "You made it out! Now, run..."

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

    render(gameMessage);


}

/**
 * Displays information to the player. 
 * @param {string} gameMessage Choices the player can't perform.
 */
function render(gameMessage = "") {
    input.value = "";
    if (gameMessage.length > 1) {
        output.innerHTML += "<br><em>" + gameMessage
            + "</em>";
    } else {
        output.innerHTML += "<br>" + room[currentRoom];
    }

}
