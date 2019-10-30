let room = [];

room[0] = "Game over!!";
room[1] = "You're in an office";
room[2] = "Looks like a library";
room[3] = "You're in a kitchen";
room[4] = "livingroom";
room[5] = "This must be the master bedroom";
room[6] = "The lobby";
room[7] = "You're in a music room";
room[8] = "Creepy child room";
console.log("kör")
//Start location
let currentRoom = 4;

let blockedPath = "Blocked path! You can't go that way!"

//array of commandos that tha game understands
const commandosToMake = ["north", "east", "south", "west"];

//input and output
let output = document.getElementById("output");
let input = document.getElementById("userAnswer");

render();

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

function render(gameMessage = "") {

    output.innerHTML += room[currentRoom];

    output.innerHTML += "<br><em>" + gameMessage
        + "</em>";

}
