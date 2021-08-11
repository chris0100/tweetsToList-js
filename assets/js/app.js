//CARGA DE ELEMENTO SOBRE EL CUAL SE VA A OPERAR, GUARDAR,ELIMINAR
const listaTweets = document.getElementById('lista-tweets');


//EVENT LISTENERS
eventListeners();

function eventListeners() {
    ///////////////////////////////////////////////////////
    //envio de datos ingresados
    document.querySelector('#formulario').addEventListener('submit',e => {
        e.preventDefault();

        //tomar datos ingresador y agregarlos a un li, inmerso en un div.
        const tweet = document.getElementById('tweet').value;

        agregarTweetEnLista(tweet);

        //guarda en local storage
        agregarTweetLocalStorage(tweet);
    });



    //////////////////////////////////////////////
    //borrar tweet
    listaTweets.addEventListener('click', e =>{
       e.preventDefault();
       if (e.target.className === 'borrar-tweet'){
           let tweet = e.target.parentElement.firstChild.textContent;
           e.target.parentElement.remove();
           borrarTweetsLocalStorage(tweet);
       }
    });



    /////////////////////////////////////////////
    //cargar tweets de inicio
    document.addEventListener('DOMContentLoaded', e =>{
        let listaTweets = obtenerTweetsLocalStorage();
        listaTweets.forEach(obj =>{
            agregarTweetEnLista(obj);
        });
    });
}




//////////////////////////////////////////////
//////////INTERFAZ GRAFICA///////////////////
////////////////////////////////////////////
/////////////////////////////////////
//agregar libro a lista
function agregarTweetEnLista(tweet) {
    const li = document.createElement('li');
    li.innerText = tweet;
    listaTweets.appendChild(li);

    //crear boton para borrar y agregarlo al li
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';
    li.appendChild(botonBorrar);
}









////////////////////////////////////////
////////////OPERACIONES LOCAL STORAGE////
////////////////////////////////////////

/////////////////////////////////////
//guardar Tweet en localstorage
function agregarTweetLocalStorage(tweet) {
    let listaTweets = obtenerTweetsLocalStorage();
    listaTweets.push(tweet);
    localStorage.setItem('tweets',JSON.stringify(listaTweets));
}




///////////////////////////////////////////////////
//leer listado de tweets de localstorage
function obtenerTweetsLocalStorage() {
    if (localStorage.getItem('tweets') === null){
        return [];
    }
    return JSON.parse(localStorage.getItem('tweets'));
}



/////////////////////////////////////////////////////
//Borrar de local storage
function borrarTweetsLocalStorage(tweet) {
    let listaTweets = obtenerTweetsLocalStorage();
    listaTweets.forEach((obj,index) => {
       if (obj === tweet){
           listaTweets.splice(index,1);
       }
    });
    localStorage.setItem('tweets',JSON.stringify(listaTweets));
}

















