const poke_container= document.getElementById('poke_container');
const pokemon_number = 151;
const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};
const main_types = Object.keys(colors);


const getPokemon = async id =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
}
const fetchPokemons = async()=>{
    for(let i=1; i<=pokemon_number; i++){
        await getPokemon(i);
    }
}
function createPokemonCard(pokemon){
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    
    
    const poke_types =  pokemon.types.map(el => el.type.name);
    const type = main_types.find(type => poke_types.indexOf(type)>-1);
    const color = colors[type];
    pokemonEl.style.backgroundColor = color;

    const pokeInnerHTML = `
        <div class='img-container'>
            <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" />
        </div>
        <div class='info'>
            <span class='number'>#${pokemon.id.toString().padStart(3,'0')}</span>
            <h3 class='name'>${name}</h3>
            <small class='type'>Type: <span>${type}</span></small>
        </div>
    `;
    pokemonEl.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonEl);
}

fetchPokemons();


