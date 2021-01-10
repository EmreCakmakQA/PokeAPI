// Global Variables;
let searchBar = document.querySelector("input#searchBar");
let searchBtn = document.querySelector("button#searchBtn");
searchBtn.addEventListener("click", getData);
let formOptions = document.querySelector("select#formOptions")
formOptions.onchange = getPokemonByType;

// Populate Option Forms With Pokemon Types
selectFormOptions();








// Populates Input Options With Pokemon Types Dynamically From API
function selectFormOptions() {
    let typeURLs = [{ "name": "normal", "url": "https://pokeapi.co/api/v2/type/1/" }, { "name": "fighting", "url": "https://pokeapi.co/api/v2/type/2/" }, { "name": "flying", "url": "https://pokeapi.co/api/v2/type/3/" }, { "name": "poison", "url": "https://pokeapi.co/api/v2/type/4/" }, { "name": "ground", "url": "https://pokeapi.co/api/v2/type/5/" }, { "name": "rock", "url": "https://pokeapi.co/api/v2/type/6/" }, { "name": "bug", "url": "https://pokeapi.co/api/v2/type/7/" }, { "name": "ghost", "url": "https://pokeapi.co/api/v2/type/8/" }, { "name": "steel", "url": "https://pokeapi.co/api/v2/type/9/" }, { "name": "fire", "url": "https://pokeapi.co/api/v2/type/10/" }, { "name": "water", "url": "https://pokeapi.co/api/v2/type/11/" }, { "name": "grass", "url": "https://pokeapi.co/api/v2/type/12/" }, { "name": "electric", "url": "https://pokeapi.co/api/v2/type/13/" }, { "name": "psychic", "url": "https://pokeapi.co/api/v2/type/14/" }, { "name": "ice", "url": "https://pokeapi.co/api/v2/type/15/" }, { "name": "dragon", "url": "https://pokeapi.co/api/v2/type/16/" }, { "name": "dark", "url": "https://pokeapi.co/api/v2/type/17/" }, { "name": "fairy", "url": "https://pokeapi.co/api/v2/type/18/" }]
    for (let i = 0; i < typeURLs.length; i++) {
        let option = document.createElement("option");
        option.innerText = typeURLs[i].name;
        formOptions.appendChild(option);
    }
}


// Obtains User Input And Displays Corresponding Pokemon In Body
function getData() {
    let pokeName = searchBar.value;
    let pokemonName = pokeName.toLowerCase();
    document.querySelector("div#pokemonType").innerText = '';
    document.querySelector("div#statsDiv").innerText = '';
    getPokemonByName(pokemonName);
    document.getElementById("error").style.visibility = "hidden";
    document.querySelector("div#bodyContainer").style.visibility = "visible";

}


// Fetch Data From PokeAPI And Call displayData()
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

                // Examine The Text In The Response
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


// Get Pokemon By Type
function getPokemonByType() {
    let value = this.value;
    let url = "";
    switch (value) {
        case "normal":
            url = "https://pokeapi.co/api/v2/type/1/"
            break;
        case "fighting":
            url = "https://pokeapi.co/api/v2/type/2/"
            break;
        case "flying":
            url = "https://pokeapi.co/api/v2/type/3/"
            break;
        case "poison":
            url = "https://pokeapi.co/api/v2/type/4/"
            break;
        case "ground":
            url = "https://pokeapi.co/api/v2/type/5/"
            break;
        case "rock":
            url = "https://pokeapi.co/api/v2/type/6/"
            break;
        case "bug":
            url = "https://pokeapi.co/api/v2/type/7/"
            break;
        case "ghost":
            url = "https://pokeapi.co/api/v2/type/8/"
            break;
        case "steel":
            url = "https://pokeapi.co/api/v2/type/9/"
            break;
        case "fire":
            url = "https://pokeapi.co/api/v2/type/10/"
            break;
        case "water":
            url = "https://pokeapi.co/api/v2/type/11/"
            break;
        case "grass":
            url = "https://pokeapi.co/api/v2/type/12/"
            break;
        case "electric":
            url = "https://pokeapi.co/api/v2/type/13/"
            break;
        case "psychic":
            url = "https://pokeapi.co/api/v2/type/14/"
            break;
        case "ice":
            url = "https://pokeapi.co/api/v2/type/15/"
            break;
        case "dragon":
            url = "https://pokeapi.co/api/v2/type/16/"
            break;
        case "dark":
            url = "https://pokeapi.co/api/v2/type/17/"
            break;
        case "fairy":
            url = "https://pokeapi.co/api/v2/type/18/"
            break;
        default:
            break;
    }

    fetch(url)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    displayError(response.status);
                    return;
                }

                // Examine The Text In The Response
                response.json().then(function (data) {

                    console.log(data.pokemon[0].pokemon.name)

                    for (let i = 0; i < data.pokemon.length; i++) {
                        console.log(data.pokemon[i].pokemon.name)
                    }

                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}



// Creates DOM Elements And Populates It With Data From API
function displayData(data) {

    // Storing DOM Elements As Variables
    let name = document.querySelector("h1#name");
    let height = document.querySelector("p#height");
    let weight = document.querySelector("p#weight")
    let pokemonType = document.querySelector("div#pokemonType");
    let statsDiv = document.querySelector("div#statsDiv");

    // Pics
    let backPic = document.querySelector("img#backPic");
    let frontPic = document.querySelector("img#frontPic");
    let pic = document.querySelector("img#pic");
    let shinyPic = document.querySelector("img#shinyPic");

    // Setting The Image Element Sources To Display Pics
    pic.src = data.sprites.other["official-artwork"].front_default;
    frontPic.src = data.sprites.front_default;
    backPic.src = data.sprites.back_default;
    shinyPic.src = data.sprites.front_shiny;

    // Displaying Height And Weight
    name.innerText = data.name;
    let pokemonHeight = data.height / 10; // Converts To Metres;
    let pokemonWeight = data.weight / 10; // Converts To KG;
    height.innerText = "Average height: " + pokemonHeight + "m";
    weight.innerText = "Average weight: " + pokemonWeight + "kg";


    // Displaying Stats
    for (let i = 0; i < data.stats.length; i++) {
        let stat = document.createElement("p")
        stat.innerText = data.stats[i].stat.name + " : " + data.stats[i].base_stat;
        statsDiv.appendChild(stat);
    }


    // Displaying Pokemon Type
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



// Pokemon Not Found Error Handling
function displayError(response) {
    let errorDiv = document.getElementById("error");
    errorDiv.innerText = "Try again! " + response + ":Pokemon not found!";
    document.querySelector("div#bodyContainer").style.visibility = "hidden";
    errorDiv.style.visibility = "visible";

}





