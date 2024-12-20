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
    const prev = id -1;
    const succ = parseInt(id) +1;
    previous.href = "pokemon.html?id="+ prev;
    next.href = "pokemon.html?id="+ succ;
    let pkmnImgFront;
    let pkmnImgBack;
    axiosPokeCall('https://pokeapi.co/api/v2/pokemon/' + id, (pokemon) => {
        pkmnName.innerText += pokemon.name;
        pokeId.innerText += " "+pokemon.id;
        height.innerText += " "+pokemon.height;
        weigth.innerText += " "+pokemon.weight;
        pkmnImg.src = pokemon.sprites.front_default;
        pkmnImgFront = pokemon.sprites.front_default;
        pkmnImgBack = pokemon.sprites.back_default;
        let arr = pokemon.types
        arr.forEach(el => {
            type.innerText += " " + el.type.name
        });
        cry.src = pokemon.cries.latest;
    })
    
    front.addEventListener("click", ()=>{
        pkmnImg.src = pkmnImgFront;
    })
    back.addEventListener("click", ()=>{
        pkmnImg.src = pkmnImgBack;
    })
})
