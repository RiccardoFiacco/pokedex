function axiosPokeCall(api, callback){
    axios
    .get(api)
    .then((res) => {
        let pkmn = res.data
        callback(pkmn)
    })
    .catch((err) => console.log(err));
}

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

window.addEventListener("load", (event) => {
    event.preventDefault()

    axiosPokeCall('https://pokeapi.co/api/v2/pokemon/' + id, (pokemon) => {
        pkmnName.innerText += pokemon.name;
        pokeId.innerText += " "+pokemon.id;
        height.innerText += " "+pokemon.height;
        weigth.innerText += " "+pokemon.weight;
        pkmnImg.src = pokemon.sprites.front_default;

        let arr = pokemon.types
        arr.forEach(el => {
            type.innerText += " " + el.type.name
        });

        cry.src = pokemon.cries.latest;
    })
    
})