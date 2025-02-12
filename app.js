// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema

let listaAmigos = []; // Array para almacenar los nombres
let ulListaAmigos = document.getElementById("listaAmigos");
let inputAmigo = document.getElementById("amigo");
let ulResultado = document.getElementById("resultado")

function agregarAmigo() {
    if (inputAmigo.value == "" || !/^[a-zA-Z\s]+$/.test(inputAmigo.value)) {
        alert("Ingresa un nombre valido.");
    } else {
        listaAmigos.push(inputAmigo.value);
        ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
        inputAmigo.value = "";
    }
}

function sortearAmigo (){
    let randoms = Math.floor(Math.random() * (listaAmigos.length) )
    let amigoSecreto = listaAmigos[randoms];
    ulResultado.textContent = `El amigo secreto es: ${amigoSecreto}`
    ulListaAmigos.textContent = "";
    actualizarlista();
}


 