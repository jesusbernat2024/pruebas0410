/*
document.getElementById('ordenesEjecucion').onsubmit = async function (e) {

document.getElementById('bodyPrincipal').onload = async function (e) {
*/

document.getElementById('botonEjecutar').onclick = async function (e) {
    //e.preventDefault();
    //nombre = document.getElementById('nombre').value;
    nombre = "Isabel";

    response = await fetch(`/cgi-bin/funciones.cgi?n=${nombre}`);
    data = await response.text();
    document.getElementById('mensaje').innerHTML = `Bienvenido, ${data}`;
    
};
