import { countries } from "./countries.js"

const makeCountry = (country) => { //Función de flecha 
    const container = document.createElement('div') 
    container.classList.add('card-country')

    container.addEventListener('mouseenter', showInfo) //Al pasar por la tarjeta mostrar info

    const imgContainer = document.createElement('img')
    imgContainer.src = country.flag
    imgContainer.alt = country.name

    const nameContainer = document.createElement('h2')
    nameContainer.textContent = country.name

    container.appendChild(imgContainer) //Creación de un hijo .appendChild
    container.appendChild(nameContainer) 

    document.getElementById('section-countries').appendChild(container)
}

const renderCountries = () => {
    countries.forEach(country => makeCountry(country))  //Recorrido de arreglos 
}

const showInfo = (event) => {
   const currentCountry = event.target.children[1].textContent
   const infoCountry = countries.find(country => country.name === currentCountry)
   console.log(infoCountry)

   const demographics = document.getElementById('demographics')
   demographics.children[0].textContent = infoCountry.name
   demographics.children[1].textContent = infoCountry.capital
   demographics.children[2].textContent = infoCountry.population


}

//Agregar un elemento (EVENTO)
window.addEventListener('DOMContentLoaded', renderCountries)   //El render es una referencia para ejecutar por ende no tiene comillas ni parametros 