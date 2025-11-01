// --- REGISTRO DE USUARIOS ---
const form = document.getElementById("formPart");
const listaUsuarios = document.getElementById("listaUsuarios");
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function mostrarUsuarios() {
    listaUsuarios.innerHTML = "";
    usuarios.forEach(u => {
        const div = document.createElement("div");
        div.className = "usuario-card";
        div.textContent = u;
        listaUsuarios.appendChild(div);
    });
}

mostrarUsuarios();

form.addEventListener("submit", e => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    if (nombre !== "") {
        usuarios.push(nombre);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        mostrarUsuarios();
        form.reset();
    }
});

// --- FORMULARIO CONTACTO ---
const formCont = document.getElementById("formCont");
const msgCont = document.getElementById("msgCont");

formCont.addEventListener("submit", e => {
    e.preventDefault();
    msgCont.textContent = "Mensaje enviado ✅";
    formCont.reset();
});

// --- MAPA ---
const map = L.map('map').setView([-34.6037, -58.3816], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

const puntos = [
    { nombre: "Punto Verde Obelisco", lat: -34.6037, lon: -58.3816 },
    { nombre: "Eco Centro Palermo", lat: -34.5711, lon: -58.4233 },
    { nombre: "Plaza Flores Recicla", lat: -34.6333, lon: -58.4622 }
];

const listaPuntos = document.getElementById("listaPuntos");
puntos.forEach(p => {
    L.marker([p.lat, p.lon]).addTo(map).bindPopup(p.nombre);

    const li = document.createElement("li");
    li.textContent = p.nombre;
    listaPuntos.appendChild(li);
});