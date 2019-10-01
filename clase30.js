const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opst = { crossDomain: true }

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    
    $.get(url, opst, function (persona) {
        console.log(`Hola, yo soy ${persona.name}`)

        if (callback) {
            callback()
        }
    })
}

obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function() {
            obtenerPersonaje(4)
        })
    })
})