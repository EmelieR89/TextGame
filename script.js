let room = [];

room[0] = "Game over!!";
room[1] = "office";
room[2] = "library";
room[3] = "kitchen";
room[4] = "livingroom";
room[5] = "master bedroom";
room[6] = "lobby";
room[7] = "music room";
room[8] = "child room";
console.log("kör")
//Start location
let currentRoom = 4;

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
            currentRoom -= 3;
            break;

        case "east":
            currentRoom += 1;
            break;

        case "south":
            currentRoom += 3;
            break;

        case "west":
            currentRoom -= 1;
            break;

        default: gameMessage = "You can't make that choice"


    }

    render(gameMessage);


}

function render(gameMessage = "") {
    output.innerHTML = room[currentRoom];

    output.innerHTML += "<br><em>" + gameMessage
        + "</em>";

}
