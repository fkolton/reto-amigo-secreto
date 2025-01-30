let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    amigos.push(nombre);
    eliminarDuplicados();
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.justifyContent = "space-between";

        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.style.fontSize = "12px";
        btnEliminar.style.padding = "3px 6px";
        btnEliminar.style.marginLeft = "10px";
        btnEliminar.onclick = () => eliminarAmigo(index);
        
        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

function eliminarDuplicados() {
    amigos = [...new Set(amigos)];
    actualizarLista();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos amigos para realizar el sorteo.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById("resultado");
    
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigos[indiceAleatorio]}</strong></li>`;
}















































































































