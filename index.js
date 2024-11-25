const apibtn = document.getElementById("apibtn");
const base_experience = document.getElementById("base_experience");
const imagen = document.getElementById("imagen");
const stats = document.getElementById("stats");
const id = document.getElementById("id");
const abilities = document.getElementById("abilities");
const back_default = document.getElementById("back_default");

const callAPI = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(data => {
        base_experience.innerHTML = data.base_experience;
        
        
        imagen.innerHTML = '';
        const img = document.createElement('img');
        img.src = data.sprites.front_default;
        imagen.appendChild(img);
        
        stats.innerHTML = data.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(', ');

        id.innerHTML = data.id;

        abilities.innerHTML = data.abilities.map(ability => ability.ability.name).join(', ');

        
        back_default.innerHTML = data.sprites.back_default;
    })
    .catch(e => console.error(new Error(e)));
}

apibtn.addEventListener("click", callAPI);
