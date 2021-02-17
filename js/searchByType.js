let transferPokemon = "";


// Populate Option Forms With Pokemon Types
let formOptions = document.querySelector("select#formOptions")
formOptions.onchange = getPokemonByType;
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

// Get Pokemon By Type
function getPokemonByType() {
    let div = document.querySelector("div#bodyContainer");
    div.innerText = '';
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
                    let div = document.querySelector("div#test");
                    let ul = document.createElement("ul");



                    for (let i = 0; i < data.pokemon.length; i++) {

                        let li = document.createElement("li");
                        let a = document.createElement("a");

                        a.innerText = data.pokemon[i].pokemon.name;

                        a.onclick = () => {
                            div.innerText = '';
                            pName = data.pokemon[i].pokemon.name;
                            getPokemonByName(pName);
                        }


                        li.appendChild(a);
                        ul.appendChild(li);
                    }

                    div.style.visibility = "visible";
                    div.appendChild(ul)

                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

