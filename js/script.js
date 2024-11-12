
function axiosCall(n){
    const limit = "?limit="+n;
    axios
    .get(staticUrl+ limit)
    .then((res) => {
        let pkmn = res.data.results //per prendere un array di oggetti contenenti nome del pokemon e url della sua API
        pkmn.forEach(el => { //per ogni pokemon 
            axiosPokeCall(el.url, createCard) //fai una chiamata all'api contenuta dentro l'obj pokemon e gli passi una callback per creare una card
        });
    })
    .catch((err) => console.log(err));
}


function axiosPokeCall(api, callback){ //funzione per chiamare le singole api dei pokemon
    axios
    .get(api)
    .then((res) => { 
        let pkmn = res.data //prendi i dati del pokemon e li passi alla variabile pkmn
        callback(pkmn) //mandi alla callback createCard
    })
    .catch((err) => console.log(err));
}

function createCard(obj){ //crea la card e la mette nel html
    cards.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-xl-2">
            <a href="pokemon.html?id=${obj.id}">   
                <div class="card hvr-grow" id="${obj.id}">
                    <img src="${obj.sprites.front_default}" class="card-img-top aspect-ratio-1 p-15px" alt="...">                    
                    <p class="pl-10px fw-bolder">${obj.name}</p>
                </div>
            </a>
        </div>`
} 

//chiamo una funzione passandogli una callaback per creare le cards con la risposta della chiamata axios 
let cardNum = 151;
const staticUrl = "https://pokeapi.co/api/v2/pokemon/";
axiosCall(cardNum);