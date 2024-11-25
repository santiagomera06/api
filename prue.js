const apibtn = document.getElementById("apibtn");
const apidata = document.getElementById("apidata");
const base_experience = document.getElementById("base_experience");
const imagen = document.getElementById("imagen");
const stats = document.getElementById("stats");
const id = document.getElementById("id");
const abilities = document.getElementById("abilities");
const back_default = document.getElementById("back_default");

const API = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(data => {
        base_experience.innerHTML = `Base experience: ${data.base_experience}`;
        
        
        imagen.innerHTML = '';
        const img = document.createElement('img');
        img.src = data.sprites.front_default;
        imagen.appendChild(img);
        
        stats.innerHTML = `Stats: ${data.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(', ')}`;
        id.innerHTML = `ID: ${data.id}`;
        abilities.innerHTML = `Abilities: ${data.abilities.map(ability => ability.ability.name).join(', ')}`;
        back_default.innerHTML = `Back Default: ${data.sprites.back_default}`;
    })
    
}

apibtn.addEventListener("click", API);
