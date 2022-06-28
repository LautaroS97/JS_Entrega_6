class Personaje {
    constructor(id, nombre, nacion, poderes, arma) {
        this.id = id;
        this.nombre = nombre;
        this.nacion = nacion;
        this.poderes = poderes;
        this.arma = arma;
    }
}
const personajes = [];
personajes.push(new Personaje(1, "NARCISO", "Imperio de las Estrellas.", "Atributos de fénix.", "Guadaña de doble filo."));
personajes.push(new Personaje(2, "LAUTARO", "Unión de las Cometas.", "Atributos de puma.", "Boleadoras."));
personajes.push(new Personaje(3, "ALEK", "República de la Luna.", "Visión de hielo.", "Tridente y brazo-arpón."));
personajes.push(new Personaje(4, "CIRO", "Protectorado de los Meteoritos.", "Control de la arena.", "Espada curva."));

function buscarPersonaje (opciones, seleccionado) {
    return opciones.find(objeto => objeto.nombre == seleccionado);
}

function seleccionarNarciso() {
    var x = document.getElementById("narciso").style;  
    x.opacity="100%";
    x.border="4px solid #f59f15";
    x.borderRadius="75px";
    alert("Seleccionaste a Narciso");
    let seleccionado = buscarPersonaje(personajes, "NARCISO")
    alert(`INFORMACIÓN \n NACIÓN: ${seleccionado.nacion}\n PODERES: ${seleccionado.poderes}\n ARMA: ${seleccionado.arma}`);
}

function seleccionarLautaro() {
    var x = document.getElementById("lautaro").style;  
    x.opacity="100%";
    x.border="4px solid #f59f15";
    x.borderRadius="75px";
    alert("Seleccionaste a Lautaro");
    let seleccionado = buscarPersonaje(personajes, "LAUTARO")
    alert(`INFORMACIÓN \n NACIÓN: ${seleccionado.nacion}\n PODERES: ${seleccionado.poderes}\n ARMA: ${seleccionado.arma}`);
}

function seleccionarAlek() {
    var x = document.getElementById("alek").style;  
    x.opacity="100%";
    x.border="4px solid #f59f15";
    x.borderRadius="75px";
    alert("Seleccionaste a Alek");
    let seleccionado = buscarPersonaje(personajes, "ALEK")
    alert(`INFORMACIÓN \n NACIÓN: ${seleccionado.nacion}\n PODERES: ${seleccionado.poderes}\n ARMA: ${seleccionado.arma}`);
}

function seleccionarCiro() {
    var x = document.getElementById("ciro").style;  
    x.opacity="100%";
    x.border="4px solid #f59f15";
    x.borderRadius="75px";
    alert("Seleccionaste a Ciro");
    let seleccionado = buscarPersonaje(personajes, "CIRO")
    alert(`INFORMACIÓN \n NACIÓN: ${seleccionado.nacion}\n PODERES: ${seleccionado.poderes}\n ARMA: ${seleccionado.arma}`);
}