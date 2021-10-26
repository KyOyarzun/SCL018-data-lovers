import data from './data/rickandmorty/rickandmorty.js';
import {sortData, filterDataSpecies, filterDataStatus} from './data.js';

// Averiguar porqué no es una función pura
const sortBy = "name";

// Función para aparecer y desaparecer páginas
const firstPage = document.getElementById("firstPage");
const secondPage = document.getElementById("secondPage");

// Botón INGRESAR
document.getElementById("buttonEnter").addEventListener("click", () => {
    firstPage.style.display = "none";
    secondPage.style.display = "block";
});

// Botón VOLVER
document.getElementById("buttonBack").addEventListener("click", () => {
    secondPage.style.display = "none";
    firstPage.style.display = "block";
});

// Llamar personajes
// <li>Episodio: ${rickandmorty.episode}</li>

const rickandmorty = data.results;
const printCharacters = document.getElementById("root");

const drawCard = (rickandmorty) => {
return `
<section class="tarjeta-wrap">
<section class="card tarjeta">
<section class="frontCard">
<img src="${rickandmorty.image}" alt="imagen del personaje" class="cardImage">
<p class="cardTextName">${rickandmorty.name}</p>
</section>
<section class="backCard">
<ul>
<p class="cardText">Estatus: ${rickandmorty.status}</p>
<p class="cardText">Especie: ${rickandmorty.species}</p>
<p class="cardText">Tipo: ${rickandmorty.type}</p>
<p class="cardText">Genero: ${rickandmorty.gender}</p>
<p class="cardText">Origen: ${rickandmorty.origin.name}
<p class="cardText">Ubicación: ${rickandmorty.location.name}
</ul>
</section>
</section>
</section>`;
};

/* for (let i=0; i < rickandmorty.length; i++) { */
    for (let i=0; i < 20; i++) {
printCharacters.innerHTML += drawCard(rickandmorty[i]);
}


// SortBy

const orderOption = document.querySelector(".orderedBox");

orderOption.addEventListener("change", (event) => {
    const chosenOrder = sortData(data, sortBy, event.target.value); // selecciona dónde va a ser el evento. Y el evento es en el value
    const print = () => {
        printCharacters.innerHTML = "";
        for (let i=0; i < rickandmorty.length; i++) {
            printCharacters.innerHTML += drawCard(rickandmorty[i]);
            }
    }
    print(chosenOrder);
});


//Filtro ESPECIES
//accseso a la clase
const filterSpecie = document.querySelector(".filterBoxSpecies");
//registramos el evento change
filterSpecie.addEventListener("change", (event) => {
    //event.target optiene el elemento donde ocurrio el evento
   const species = filterDataSpecies(data.results, event.target.value);
   printCharacters.innerHTML = "";  
    const filter = () => {
        for (let i=0; i < species.length; i++) {
            printCharacters.innerHTML += drawCard(species[i]);
            }
    }
    filter(species);
});


//Filtro ESTADOS
const filterStatus = document.querySelector(".filterBoxStatus");
filterStatus.addEventListener("change", (event) => {
    const status = filterDataStatus(data.results, event.target.value);
    printCharacters.innerHTML = "";
    const filter = () => {
        for (let i=0; i < status.length; i++) {
            printCharacters.innerHTML += drawCard(status[i]);
        }
    }
    filter(status);
});



/* PROBANDO */

//Botón LIMPIAR ESPECIES
document.getElementById("bottonClean").addEventListener("click", () => {
document.getElementById("filterSpecies").value = "Filter-Sp";
});

//Botón LIMPIAR ESTATUS
document.getElementById("bottonClean").addEventListener("click", () => {
document.getElementById("filterStatus").value = "Filter-St";
});



/* bottonCleanReset.addEventListener("click", () => {
        printCharacters.innerHTML = "";
        const bottonToClean = () => {
            for (let i=0; i < data.results.length; i++) {
                printCharacters.innerHTML += drawCard(data.results[i]);
            }
        }
        bottonToClean(data.results);
    });  */


//boton limpiar funcional(no limpia los selct)
/* const buttonCleanReset = document.getElementById("buttonClean");
buttonCleanReset.addEventListener("click", () => {
    printCharacters.innerHTML = "";
    function clean() {
        for (let i = 0; i < data.results.length; i++) {
            printCharacters.innerHTML += drawCard(data.results[i]);
        }
    }
    clean(data.results);
});
buttonCleanReset.addEventListener("click", () =>{
    
}) */