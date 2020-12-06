// Global variables;
let searchBar = document.querySelector("input#searchBar");
let searchBtn = document.querySelector("button#searchBtn");
searchBtn.addEventListener("click", getData);


// Obtains user input and displays corresponding pokemon in body
function getData() {
    let pokeName = searchBar.value;
    let pokemonName = pokeName.toLowerCase();
    document.querySelector("div#pokemonType").innerText = '';
    getPokemonByName(pokemonName);
    document.getElementById("error").style.visibility = "hidden";
    document.querySelector("div#bodyContainer").style.visibility = "visible";

}


// Fetch data from PokeAPI and call displayData()
function getPokemonByName(name) {
    let pokemon = name;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    displayError(response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function (data) {
                    console.log(data);
                    displayData(data);
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}


// Creates DOM elements and populates it with data from API
function displayData(data) {

    // Storing DOM elements as variables
    let name = document.querySelector("h1#name");
    let height = document.querySelector("h6#height");
    let weight = document.querySelector("h6#weight")
    let moves = document.querySelector("div#moves");
    let noOfMoves = document.querySelector("h5#noOfMoves");
    let pokemonType = document.querySelector("div#pokemonType");

    // Pics
    let backPic = document.querySelector("img#backPic");
    let frontPic = document.querySelector("img#frontPic");
    let pic = document.querySelector("img#pic");
    let shinyPic = document.querySelector("img#shinyPic");

    // Setting the image element sources to display pics
    pic.src = data.sprites.other["official-artwork"].front_default;
    frontPic.src = data.sprites.front_default;
    backPic.src = data.sprites.back_default;
    shinyPic.src = data.sprites.front_shiny;

    // Displaying data as text
    name.innerText = data.name;
    let pokemonHeight = data.height / 10; // Displays height as metres;
    let pokemonWeight = data.weight / 10; // Displays weight as kg;
    height.innerText = "Average height: " + pokemonHeight + "m";
    weight.innerText = "Average weight: " + pokemonWeight + "kg";
    noOfMoves.innerText = `${data.name} can learn ` + data.moves.length + ` moves`;



    // Creating DOM element for each pokemon move and appending to div
    for (let i = 0; i < data.moves.length; i++) {
        let listItem = document.createElement("p");
        listItem.innerText = data.moves[i].move.name;
        moves.appendChild(listItem);
    }


    for (let i = 0; i < data.types.length; i++) {
        let pokeType = document.createElement("p")
        pokeType.innerText = data.types[i].type.name;
        switch (pokeType.innerText) {
            case "electric":
                pokeType.className = "btn btn-electric";
                break;
            case "fire":
                pokeType.className = "btn btn-fire";
                break;
            case "rock":
                pokeType.className = "btn btn-rock";
                break;
            case "water":
                pokeType.className = "btn btn-water";
                break;
            case "dragon":
                pokeType.className = "btn btn-dragon";
                break;
            case "poison":
                pokeType.className = "btn btn-poison";
                break;
            case "fairy":
                pokeType.className = "btn btn-fairy";
                break;
            case "grass":
                pokeType.className = "btn btn-grass";
                break;
            case "steel":
                pokeType.className = "btn btn-steel";
                break;
            case "dark":
                pokeType.className = "btn btn-dark";
                break;
            case "ghost":
                pokeType.className = "btn btn-ghost";
                break;
            case "ice":
                pokeType.className = "btn btn-ice";
                break;
            case "flying":
                pokeType.className = "btn btn-flying";
                break;
            case "fighting":
                pokeType.className = "btn btn-fighting";
                break;
            case "normal":
                pokeType.className = "btn btn-normal";
                break;
            case "ground":
                pokeType.className = "btn btn-groun";
                break;
            case "psychic":
                pokeType.className = "btn btn-psychic";
                break;
            case "bug":
                pokeType.className = "btn btn-bug";
                break;
            default:
                pokeType.className = "btn btn-primary";
        }
        pokemonType.appendChild(pokeType);
    }





}

function displayError(response) {
    let errorDiv = document.getElementById("error");
    errorDiv.innerText = "Try again! " + response + ":Pokemon not found!";
    document.querySelector("div#bodyContainer").style.visibility = "hidden";
    errorDiv.style.visibility = "visible";

}





