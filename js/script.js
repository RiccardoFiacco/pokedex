
function axiosCall(n){
    const limit = "?limit="+n;
    axios
    .get(staticUrl+ limit)
    .then((res) => {
        pkmn = res.data.results //per prendere un array di oggetti contenenti nome del pokemon e url della sua API
        pkmn.forEach(el => { //per ogni pokemon effet
            axiosPokeCall(el.url, createCard)         
        });
        
    })
    .catch((err) => console.log(err));
}


function axiosPokeCall(api, callback){
    axios
    .get(api)
    .then((res) => {
        let pkmn = res.data
        // console.log(pkmn)
        // console.log(pkmn.id)
        // console.log(pkmn.height, pkmn.weight) 
        // console.log(pkmn.sprites.front_default)//img
        // console.log(pkmn.types.forEach((el)=> {console.log(el.type.name)}))
        callback(pkmn)
    })
    .catch((err) => console.log(err));
}

// function putCards(app){
//     console.log(app)
//     cards.innerHTML += app;
// }#

function createCard(obj){
        cards.innerHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-xl-2">
            <a href="pokemon.html">   
                <div class="card hvr-grow" id= ${obj.id}>
                    <img src="${obj.sprites.front_default}" class="card-img-top aspect-ratio-1 p-15px" alt="...">                    
                    <p class="pl-10px fw-bolder">${obj.name}</p>
                </div>
            </a>
        </div>`
        addListener()
} 

function addListener(){
    let els = document.querySelectorAll(".card"); //seleziono tutte le card con la la casse card
    els.forEach((el)=>{ //per ogni card
        el.addEventListener("click", function(){ //aggiungo una funzione che al click
            sendId = el.getAttribute("id") //mi prende il valore di id
            console.log(sendId)
        })
    })
}

//chiamo una funzione passandogli una callaback per creare le cards con la risposta della chiamata axios 
let cardNum = 151;
let pkmn;
let sendId;
const staticUrl = "https://pokeapi.co/api/v2/pokemon/";
axiosCall(cardNum);

export { sendId }