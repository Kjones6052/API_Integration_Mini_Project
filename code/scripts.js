// JavaScript file for all JS code used for the project


// Fetch Data functions

// Fetch Pokemon by Name
async function fetchPokemonDataName(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemonData = await response.json();
    return pokemonData;
};

// Fetch Data by ID
async function fetchPokemonDataID(pokemonID) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
    const pokemonData = await response.json();
    return pokemonData;
};


// Search Page (image, name, base experience, stats)

// Handle onsubmit 'pokemonNameSearch'
async function pokemonNameSearch(event) {
    event.preventDefault();
    const pokemonName = event.target.elements.pokemonName.value;
    const pokemonData = await fetchPokemonDataName(pokemonName);
    const pokemonSearchDisplay = document.getElementById('pokemonSearchDisplay');
    
    pokemonSearchDisplay.innerHTML = `
        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
        <h3><strong>Pokemon Name:</strong> ${pokemonData.name}</h3>
        <p><strong>Base Experience:</strong> ${pokemonData.base_experience}</p>
        <h4>Stats:</h4>
        <p>${pokemonData.stats.map(stats => `<li><strong>${stats.stat.name}:</strong>${stats.base_stat}</li>`).join('')}</p>
        `;
};
// Handle onsubmit 'pokemonIDSearch'
async function pokemonIDSearch(event) {
    event.preventDefault();
    const pokemonID = event.target.elements.pokemonID.value;
    const pokemonData = await fetchPokemonDataID(pokemonID);
    const pokemonSearchDisplay = document.getElementById('pokemonSearchDisplay');
    
    pokemonSearchDisplay.innerHTML = `
        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
        <h3><strong>Pokemon Name:</strong> ${pokemonData.name}</h3>
        <p><strong>Base Experience:</strong> ${pokemonData.base_experience}</p>
        <h4>Stats:</h4>
        <p>${pokemonData.stats.map(stats => `<li><strong>${stats.stat.name}:</strong>${stats.base_stat}</li>`).join('')}</p>
        `;
    };


// Details Page (abilities, types, stats, and image)

// Handle onsubmit 'pokemonNameSearch'
async function pokemonNameDetails(event) {
    event.preventDefault();
    const pokemonName = event.target.elements.pokemonName.value;
    const pokemonData = await fetchPokemonDataName(pokemonName);
    const pokemonDetailsDisplay = document.getElementById('pokemonDetailsDisplay');
    
    pokemonDetailsDisplay.innerHTML = `
        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
        <h3><strong>Pokemon Name:</strong>${pokemonData.name}</h3>
        <h4>Stats:</h4>
        <p>${pokemonData.stats.map(stats => `<li><strong>${stats.stat.name}:</strong>${stats.base_stat}</li>`).join('')}</p>
        <h4>Types:</h4>
        <p>${pokemonData.types.map(type => `<li>${type.type.name}</li>`).join('')}</p>
        <h4>Abilities:</h4>
        <p>${pokemonData.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}</p>
        `;
};
// Handle onsubmit 'pokemonIDSearch'
async function pokemonIDDetails(event) {
    event.preventDefault();
    const pokemonID = event.target.elements.pokemonID.value;
    const pokemonData = await fetchPokemonDataID(pokemonID);
    const pokemonDetailsDisplay = document.getElementById('pokemonDetailsDisplay');

    pokemonDetailsDisplay.innerHTML = `
        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
        <h3><strong>Pokemon Name:</strong> ${pokemonData.name}</h3>
        <h4>Stats:</h4>
        <p>${pokemonData.stats.map(stats => `<li><strong>${stats.stat.name}:</strong>${stats.base_stat}</li>`).join('')}</p>
        <h4>Types:</h4>
        <p>${pokemonData.types.map(type => `<li>${type.type.name}</li>`).join('')}</p>
        <h4>Abilities:</h4>
        <p>${pokemonData.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}</p>
    `;
};
