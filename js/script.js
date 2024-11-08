
function axiosCall(api, callback, n){
    const limit = "?limit="+n;
    axios
    .get(api + limit)
    .then((res) => {
        pkmn = res.data.results //per prendere un array di oggetti contenenti nome del pokemon e url della sua API
        // callback(pkmn)
        pkmn.forEach(el => {
            console.log(el.name)
            console.log(el.url)
            axiosPokeCall(el.url, createCard)         
        });
        
    })
    .catch((err) => console.log(err));
}


function axiosPokeCall(api, callback){
    axios
    .get(api)
    .then((res) => {
        pkmn = res.data
        console.log(pkmn)
        console.log(pkmn.id)
        console.log(pkmn.height, pkmn.weight) 
        console.log(pkmn.sprites.front_default)//img
        console.log(pkmn.types.forEach((el)=> {console.log(el.type.name)}))
        callback(pkmn)
    })
    .catch((err) => console.log(err));
}

function putCards(app){
    console.log(app)
    cards.innerHTML += app;
}


function createCard(obj){
        cards.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-xl-2">
            <div class="card" id= ${obj.id}>
                <img src="${obj.sprites.front_default}" class="card-img-top aspect-ratio-1 p-15px" alt="...">                    
                <p class="pl-10px fw-bolder">${obj.name}</p>
            </div>
        </div>`
        console.log(string)
} 




//chiamo una funzione passandogli una callaback per creare le cards con la risposta della chiamata axios 
let cardNum = 151;
let pkmn;
let string ="";
const staticUrl = "https://pokeapi.co/api/v2/pokemon/";
axiosCall(staticUrl, putCards, cardNum);