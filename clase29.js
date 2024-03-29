const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opst = { crossDomain: true }

const onPeopleResponse = function (persona) {
    console.log(`Hola, yo soy ${persona.name}`)
}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opst, onPeopleResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
obtenerPersonaje(6)