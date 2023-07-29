const pokedisplay = document.getElementById("displayPokemon")
const targetCapricorn = document.getElementById("target-capricorn")
const targetZodiac = document.getElementById("Zodiac")

console.log(targetZodiac)
console.log(targetCapricorn)
console.log(pokedisplay)

const allPokemon = []

const findPokemon = (pokemonfind) => {
    fetch("https://pokeapi.co/api/v2/pokemon/"+ pokemonfind)
        .then((Response) => {
            return Response.json()
        })
        .then((json) => {
        // console.log(json)
        const pokemon = {
                name: json.name,
                id: json.id,
                image: json.sprites.other["official-artwork"]["front_default"]
            }
            allPokemon.push(pokemon)
            console.log(allPokemon)
            // console.log(pokemon)
            pokemonChoosen(pokemon)
        
        }),
        (error) => console.log(error)    
    }

// window.onload = () => {
findPokemon("pikachu") 
// }

const pokemonChoosen = (pokemon) => {
    // console.log(pokemon)
    const pokemonInfo = 
        "<img src =" + pokemon.image + " />" 

    pokedisplay.innerHTML = pokemonInfo
}

const allZodiac = {
    capricorn: {
        pokemon: [{pokemo: 3, description: "Capricorns are known for their grounded and practical nature. Venusaur is a Grass/Poison-type Pokémon, representing the Earth element and a connection to the natural world. Its strong connection to plants and the environment aligns with Capricorn's appreciation for stability and being in touch with the physical world." +

        "Both Capricorn and Venusaur can be strong and enduring. Venusaur's sturdy and powerful appearance reflects Capricorn's determination and ability to handle challenges with resilience." +
        
        "Capricorns are often associated with the winter season, and Venusaur's final evolutionary stage can be seen as a symbol of maturity and growth, aligning with the Capricorn's theme of progress and development." +
        
        "Venusaur's ability to use plants and flowers for various attacks represents its nurturing and protective qualities, much like how Capricorns are known for being caring and protective of their loved ones." +
        "Capricorns are ruled by Saturn, which is associated with responsibility and hard work. Venusaur's status as a fully evolved Pokémon reflects its growth and evolution, paralleling Capricorn's goal-oriented and ambitious nature.",}],
    },
    aries: {
        pokemon: [{pokemo: 6, description: "",}],
    }
} 

// const selectZodiac = () => alert("selevt")

targetZodiac.addEventListener("change", () => {
    const chosenZodiac = targetZodiac.value
    const signZ = allZodiac[chosenZodiac]
    findPokemon(signZ.pokemon[0].pokemo)
    findPokemon(signZ.pokemon[0].description)
})


console.log(love)












// function pickRandom() {
//     return Math.floor(Math.random() * 3) + 1;
//   }

//   function pickRandom() {
//     return Math.floor(Math.random() * 3) + 1;
//   }
//   signZ.pokemon[pickRandom].pokemo
//   Karl Rodulfo4:16 PM
//   signZ.pokemon[pickRandom()].pokemo


// const pokemonList = json.results 
// console.log(pokemonList)

// const pokemonImage = pokemonList.map((pokemon) =>{
//     fetch(pokemon.url).then((response) => {
//         response.json()
//     })
//     .then((pokemonInfo) => console.log(pokemonInfo.abilities))
// })