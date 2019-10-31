
/**
 * Gives the player instructions on how to play game
 */
function instructions() {
    let instructionButton = document.querySelector("h4")
    instructionButton.innerHTML = "You need to get out of this house. You can write instructions: norht, east, south and west."
}

let room = [];

room[0] = "Game over!!";
room[1] = "You're in an <em>office</em>. Wait, what was that sound?";
room[2] = "Looks like a <em>library</em>";
room[3] = "You're in a <em>kitchen</em>. The footsteps are closer now.";
room[4] = "Looks like a <em>livingroom</em>";
room[5] = "This must be the <em>master bedroom</em>";
room[6] = "You're in a <em>music room</em>. You can feel a cold breeze.";
room[7] = "The lobby";
room[8] = "Creepy <em>child room</em>";

let currentRoom = 4;

let blockedPath = "<strong>The windows have bars, you can't go that way!</strong>"

//array of commandos that tha game understands
const commandosToMake = ["north", "east", "south", "west"];

//input and output
let output = document.getElementById("output");
let input = document.getElementById("userAnswer");

render();

/**
 * enterbutton
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
        output.innerHTML += "<br><strong>" + gameMessage
            + "</strong>";
    } else {
        output.innerHTML += "<br>" + room[currentRoom];
    }

}
