
function axiosCall(callback, n){
    const staticUrl = "https://pokeapi.co/api/v2/pokemon/";
    const limit = "?limit="+n;
    axios
    .get(staticUrl + limit)
    .then((res) => {
        pkmn = res.data
        console.log(pkmn.results)//per prendere un array di oggetti contenenti i pokemon
        callback(pkmn)
    })
    .catch((err) => console.log(err));
}

function createCards(array){
    array.forEach(el => {
        console.log(el)
        cards.innerHTML +=
        `<div class="card">
            <img src="" class="card-img-top aspect-ratio-1 p-15px" alt="...">                    
            <p class="pl-10px fw-bolder"></p>
        </div>`
    });
}

//chiamo una funzione passandogli una callaback per creare le cards con la risposta della chiamata axios 
let cardNum = 3;
let pkmn;
axiosCall(createCards, cardNum);