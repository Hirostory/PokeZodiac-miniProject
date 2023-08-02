
// -- my target zones from html ---
const pokedisplay = document.getElementById("displayPokemon")
const targetCapricorn = document.getElementById("target-capricorn")
const targetZodiac = document.getElementById("Zodiac")
const targetHoroscope = document.querySelector("#pokemonHoroscope")
const targetIdentity = document.querySelector("#pokemon-name")
const targetSign = document.querySelector("#Sign")
const targetPokeball = document.querySelector(".pokeball")
const targetLogo = document.querySelector(".Logo")
const targetStatement = document.querySelector(".statement")
const targetSelector = document.querySelector(".selZodiac")
const targetBlinking = document.querySelector(".circle")


console.log(targetHoroscope)
console.log(targetZodiac)
console.log(targetCapricorn)
console.log(pokedisplay)
console.log(targetIdentity)



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
            pokemonNameNum(pokemon)
        
        }),
        (error) => console.log(error)    
    }

// window.onload = () => {
// findPokemon(87)
// }

const pokemonChoosen = (pokemon) => {
    // console.log(pokemon)
    const pokemonInfo = 
        "<img src =" + pokemon.image + " />"
        pokedisplay.style.backgroundColor = "white"
        pokedisplay.style.height = "500px"
        pokedisplay.style.width = "500px"
        pokedisplay.style.border = "2px solid black"

    pokedisplay.innerHTML = pokemonInfo 
}

const pokemonDescrip = (horoscope) => {
    targetHoroscope.innerHTML = horoscope
    targetHoroscope.style.position = "relative"
    targetHoroscope.style.backgroundColor = "white"
    targetHoroscope.style.width = "300px"
    targetHoroscope.style.height = "300px"
    targetHoroscope.style.border = "2px solid black"
}

const pokemonNameNum = (nameNum) => {

    targetIdentity.innerHTML = nameNum.name + " #" + nameNum.id
    targetIdentity.style.backgroundColor = "white"
    targetIdentity.style.height = "40px"
    targetIdentity.style.width = "200px"
    targetIdentity.style.border = "2px solid black"
}

const pokemonSign = (sign) => {
    targetSign.innerHTML = sign
    targetSign.style.backgroundColor = "white"
    targetSign.style.width = "200px"
    targetSign.style.border = "2px solid black"
}

const pokeballMove = () => {
    targetPokeball.style.animationName = "pokeballback"
    targetPokeball.style.animationDuration = "1.5s"
    targetPokeball.style.animationTimingFunction = "ease"
    targetPokeball.style.animationFillMode = "forwards"
}

const moveLogo = () => {
    targetLogo.style.animationName = "logoMove"
    targetLogo.style.animationDuration = "1.5s"
    targetLogo.style.animationTimingFunction = "ease"
    targetLogo.style.animationFillMode = "forwards"
}

const moveSelector = () => {
    targetSelector.style.animationName = "selectSlide"
    targetSelector.style.animationDuration = "1.5s"
    targetSelector.style.animationTimingFunction = "ease"
    targetSelector.style.animationFillMode = "forwards"
}

const allZodiac = {
    capricorn: {
        pokemon: [{pokemo: 3, reason: "<p>Capricorns are known for their grounded and practical nature. Venusaur is a Grass/Poison-type Pokémon, representing the Earth element and a connection to the natural world. Its strong connection to plants and the environment aligns with Capricorn's appreciation for stability and being in touch with the physical world.</p>" + "<p> Both Capricorn and Venusaur can be strong and enduring. Venusaur's sturdy and powerful appearance reflects Capricorn's determination and ability to handle challenges with resilience.</p>" + "<p> Capricorns are often associated with the winter season, and Venusaur's final evolutionary stage can be seen as a symbol of maturity and growth, aligning with the Capricorn's theme of progress and development.</p>" + "<p> Venusaur's ability to use plants and flowers for various attacks represents its nurturing and protective qualities, much like how Capricorns are known for being caring and protective of their loved ones.</p>" + "<p> Capricorns are ruled by Saturn, which is associated with responsibility and hard work. Venusaur's status as a fully evolved Pokémon reflects its growth and evolution, paralleling Capricorn's goal-oriented and ambitious nature.</p>",}],
        sign: "Capricon",
    },
    aries: {
        pokemon: [{pokemo: 6, reason: "<p>Aries is a Fire sign, and Charizard being a Fire-type     Pokémon aligns with the element of Fire.</p>" + "<p> Both Aries and Charizard are known for their bold and courageous nature. Arians are often described as adventurous and fearless leaders, and Charizard's powerful appearance and fierce demeanor reflect these qualities.</P>" +"<p> Charizard's moves like Flamethrower and Dragon Claw demonstrate its fiery and determined energy, symbolizing the passionate and driven nature of Aries.</p>" + "<p> Both Aries and Charizard have a strong sense of independence and are known to take the lead in challenging situations.</p>" + "<p>Charizard's ability to fly and its association with dragons resonates with Aries' desire for freedom and their connection to mythical creatures.</p>"+ "<p>Aries is ruled by Mars, the planet of action and energy, while Charizard's name hints at its connection to \"char\" (fire) and \"lizard,\" further linking it to the Fire element associated with Aries.</p>" +"<p>Charizard's status as the final form of Charmander's evolution reflects Aries' desire for growth and progression.</p>",}],
        sign: "Aries",
    },
    aquarius: {
        pokemon: [{pokemo: 87, reason: "<p>Aquarius is an Air sign, and while Dewgong is not directly related to air, its Water and Ice-type nature align with the element of Water.</p>" + "<p> Both Aquarius and Dewgong have a mysterious and elusive nature. Aquarians are often described as unique and unconventional, and Dewgong's graceful appearance and gentle demeanor reflect these qualities.</p>" + " <p> Dewgong's icy abilities and its association with cold, wintry climates resonate with Aquarius' symbol, the Water Bearer, as both involve the manipulation and control of water and ice.</p>" + "<p> Both Aquarius and Dewgong are associated with the winter season. Dewgong's appearance and icy abilities complement Aquarius' connection to the mystical and ethereal aspects of winter.</p>" +
        "<p> Dewgong's ability to swim gracefully and its association with the sea align with Aquarius' desire for exploration and freedom.</p>" + "<p> Dewgong's name may be associated with \"dew,\" which symbolizes the water element, further linking it to Aquarius' connection to water and its ruling planet, Uranus, associated with the sky and rain.</P>",}],
        sign: "Aquarius"
        
    },
    pisces: {
        pokemon: [{pokemo: 131, reason: "<p> Pisces is a Water sign, and Lapras being a Water/Ice-type Pokémon aligns with the element of Water.</p>" + "<p> Both Pisces and Lapras are known for their gentle and compassionate nature. Pisceans are often described as empathetic and caring, and Lapras' reputation as a helpful and nurturing Pokémon reflects these qualities.</P>" + "<p> Lapras is often associated with the sea, which resonates with Pisces' symbol, the Fish. The idea of Lapras being a guardian of the oceans aligns with Pisces' deep connection to the mystical and emotional aspects of water.</p>" + "<p> Lapras' ability to sing and calm rough seas reflects Pisces' ability to soothe and bring peace to chaotic situations.</p>" + "<p> Both Pisces and Lapras have a dreamy and mystical side, with Lapras often being depicted in legends as a mythical and elusive creature.</p>" +
        "<p> Lapras' name may be associated with \"lapis lazuli,\" a gemstone known for its deep blue color, connecting it to Pisces' ruling planet Neptune, often associated with the ocean and blue hues.</p>" ,}],
        sign: "Pisces"
    },
    taurus: {
        pokemon: [{pokemo: 31, reason: "<p> Taurus is an Earth sign, and Nidoqueen's Ground/Poison typing aligns with the element of Earth. </p>" + "<p> Both Taurus and Nidoqueen are known for their strength and resilience. Taureans are often described as reliable and determined, and Nidoqueen's powerful and robust appearance reflects these qualities.</p>" +
        "<p> Nidoqueen's moves like Earthquake and Poison Jab demonstrate its grounded and fierce nature, symbolizing the strength and power associated with Taurus.</p>" + "<p> Taurus is ruled by Venus, the planet of beauty and love, and Nidoqueen's name may be associated with \"queen,\" which reflects its regal and protective nature.</p>" + "<p> Nidoqueen's protective instincts are akin to Taurus' desire to care for and protect their loved ones.</p>" + "<p> Both Taurus and Nidoqueen have a stable and dependable presence, with Nidoqueen often being depicted as a caring and nurturing figure.</p>" + "<p> Nidoqueen's final evolutionary stage represents growth and development, paralleling Taurus' theme of progress and evolution.</P>" ,}],
        sign: "Taurus"
    },
    gemini: {
        pokemon: [{pokemo: 94, reason: "<p> Gemini is an Air sign, and while Gengar is not directly related to air, its Ghost-type nature aligns with the ethereal and intangible aspects often associated with Air signs.</p>" + "<p> Both Gemini and Gengar are known for their mischievous and playful nature. Geminis are often described as curious and witty, and Gengar's playful behavior, as well as its penchant for playing pranks, reflects these qualities.</p>" + "<p> Gengar's moves like Shadow Ball and Dark Pulse demonstrate its ghostly and mysterious energy, symbolizing the enigmatic and elusive nature of Gemini.</p>" + "<p> Gengar's ability to hide in shadows and blend into the darkness aligns with Gemini's adaptive and versatile characteristics.</p>" + "<p> Both Gemini and Gengar have a dual nature. Gengar is known to mimic the shadows of people and Pokémon, and Geminis are often described as having two distinct sides to their personality.</p>" + "<p> Gengar's mischievous grin and eerie appearance resonate with Gemini's symbol, the Twins.</p>" ,}],
        sign: "Gemini" 
    },
    cancer: {
        pokemon: [{pokemo: 91, reason: "<p> Cancer is a Water sign, and Cloyster being a Water/Ice-type Pokémon aligns with the element of Water.</p>" + "<p> Both Cancer and Cloyster are known for their protective nature. Cancers are often described as caring and nurturing, and Cloyster's tough and sturdy shell reflects these qualities.</p>" + "<p> Cloyster's moves like Clamp and Ice Beam demonstrate its ability to grip onto opponents and freeze them, symbolizing the tenacity and defensive nature associated with Cancer.</p>" +"<p> Both Cancer and Cloyster have a tough outer shell that provides them with excellent protection. Cancers are known to put up emotional walls, while Cloyster's hard shell serves as a means of defense.</p>" + "<p> Cloyster's name may be associated with \"oyster,\" a shellfish often associated with the sea, further linking it to Cancer's connection to water.</p>" + "<p> Cloyster's evasiveness and ability to withdraw into its shell are reminiscent of Cancer's cautious and introverted tendencies.</p>" ,}],
        sign: "Cancer" 
    },
    leo: {
        pokemon: [{pokemo: 25, reason: "<p> Leo is a Fire sign, and while Pikachu is not a Fire-type Pokémon, its Electric typing represents energy and vitality, which align with Leo's lively and energetic nature.</p>" + 
        "<p> Both Leo and Pikachu are known for their playful and fun-loving personalities. Leos    are often described as enthusiastic and sociable, and Pikachu's cheerful and adorable appearance reflects these qualities.</p>" +
         "<p> Pikachu's moves like Thunderbolt and Volt Tackle demonstrate its electric energy and powerful strikes, symbolizing the dynamic and lively nature associated with Leo. </p>" +
         "<p> Pikachu's iconic status and ability to capture the hearts of people worldwide resonate with Leo's desire for recognition and appreciation.</p>" +
         "<p> Pikachu's role as Ash Ketchum's loyal companion in the Pokémon anime showcases its loyalty and protective nature, qualities often associated with Leos and their sense of loyalty to their friends and loved ones.</p>" + 
         "<p> Both Leo and Pikachu have a charming and charismatic presence, with Pikachu often being portrayed as the center of attention.</p>"  ,}],
         sign: "Leo" 
    },
    virgo: {
        pokemon: [{pokemo: 34, reason: "<p>Virgo is an Earth sign, and Nidoking being a Poison/Ground-type Pokémon aligns with the element of Earth.</p>" + "<p> Both Virgo and Nidoking are known for their practicality and reliability. Virgos are often described as hardworking and analytical, and Nidoking's powerful and sturdy appearance reflects these qualities.</p>" + "<p> Nidoking's moves like Earthquake and Poison Jab demonstrate its strong and formidable nature, symbolizing the grounded and capable aspects associated with Virgo.</p>" + "<p> Nidoking's name and design draw inspiration from medieval knights and warriors, linking it to Virgo's theme of service and dedication.</p>" + "<p> Both Virgo and Nidoking are known for their methodical and detail-oriented approach to tasks.</p>" + "<p> Nidoking's final evolutionary stage represents growth and development, paralleling Virgo's theme of progress and self-improvement.</p>" ,}],
        sign: "Virgo"
    },
    libra: {
        pokemon: [{pokemo: 36, reason: "<p> Libra is an Air sign, and while Clefable is not directly related to air, its Fairy typing represents a sense of enchantment and magic often associated with Air signs.</p>" + "<p> Both Libra and Clefable are known for their peaceful and harmonious nature. Libras are often described as diplomatic and balanced, and Clefable's serene appearance and gentle demeanor reflect these qualities.</p>" +
         "<p> Clefable's moves like Moonblast and Sing demonstrate its mystical and magical energy, symbolizing the ethereal and enchanting aspects associated with Libra. </p>" +
         "<p> Clefable's name and design draw inspiration from fairy tales and mythical creatures, linking it to Libra's theme of beauty and fantasy.</p>" +
         "<p> Both Libra and Clefable are known for their ability to bring people together and create a sense of harmony.</p>" +
         "<p> Clefable's evolution from Clefairy represents growth and transformation, paralleling Libra's theme of development and growth.</p>" ,}],
         sign: "Libra" 
    },
    scorpio: {
        pokemon: [{pokemo: 9, reason: "<p> Scorpio is a Water sign, and Blastoise being a Water-type Pokémon aligns with the element of Water.</p>" +  "<p> Both Scorpio and Blastoise are known for their resourcefulness and adaptability. Scorpios are often described as determined and resilient, and Blastoise's ability to use its powerful water cannons to adapt to various situations reflects these qualities.</p>" +  "<p> Blastoise's moves like Hydro Pump and Skull Bash demonstrate its commanding and forceful energy, symbolizing the intense and focused nature of Scorpio.</p>" + "<p> Both Scorpio and Blastoise can be protective of their territory and those they care about. Blastoise's sturdy shell provides it with excellent defense, much like Scorpios' desire to protect their emotions and loved ones.</p>" + "<p> Scorpio is associated with transformation and regeneration, and Blastoise's evolution from Squirtle showcases this transformative aspect, going from a small and adorable Pokémon to a formidable and mighty one.</p>" + "<p> Blastoise's water cannons and the ability to create powerful water jets are reminiscent of Scorpio's symbol, the Scorpion, which has a stinging attack.</p>" + "<p> Blastoise's status as the final form of Squirtle's evolution reflects Scorpio's theme of growth and evolution.</p>" ,}],
        sign: "Scorpio" 
    },
    sagittarius: {
        pokemon: [{pokemo: 78, reason: "<p> Sagittarius is a Fire sign, and Rapidash being a Fire-type Pokémon aligns with the element of Fire.</p>" + "<p> Both Sagittarius and Rapidash are known for their energetic and adventurous nature. Sagittarians are often described as optimistic and adventurous, and Rapidash's speed and graceful movements reflect these qualities.</p>" + "<p> Rapidash's moves like Flamethrower and Fire Blast demonstrate its fiery energy and powerful flames, symbolizing the dynamic and passionate aspects associated with Sagittarius.</p>" + "<p> Rapidash's elegant and majestic appearance resonates with Sagittarius' symbol, the Archer, often depicted as a centaur with a bow.</p>" + "<p> Both Sagittarius and Rapidash have a desire for freedom and a love for exploration and travel.</p>" + "<p> Rapidash's name and design draw inspiration from mythical horses and unicorns, linking it to Sagittarius' theme of adventure and mythology.</p>" ,}],
        sign: "Sagittarius" 
    }

    
} 
// console.log(allZodiac.capricorn.pokemon[0].pokemo)
// console.log(findPokemon(allZodiac.capricorn.pokemon[0].pokemo))


targetZodiac.addEventListener("change", () => {
    const chosenZodiac = targetZodiac.value
    const signZ = allZodiac[chosenZodiac]
    findPokemon(signZ.pokemon[0].pokemo)
    pokemonDescrip(signZ.pokemon[0].reason)
    pokemonNameNum(signZ.pokemon[0].pokemo)
    pokemonSign(signZ.sign)

    pokeballMove()
    moveLogo()
    moveSelector()

    //manually have to keep removing and nulling the animation classlist to let me repeat teh animation.
    targetStatement.style.visibility = "hidden"
    pokedisplay.style.animation = "none"
    pokedisplay.offsetHeight
    targetHoroscope.style.animation = "none"
    targetHoroscope.offsetHeight
    targetIdentity.style.animation = "none"
    targetIdentity.offsetHeight
    targetSign.style.animation = "none"
    targetSign.offsetHeight
    targetBlinking.style.animation = "none"
    targetBlinking.style.backgroundColor = "white"



    pokedisplay.style.animation = null
    targetHoroscope.style.animation = null
    targetIdentity.style.animation = null
    targetSign.style.animation = null
})
