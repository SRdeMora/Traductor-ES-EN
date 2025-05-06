document.addEventListener("DOMContentLoaded", function () {
    verificarServicio();
});

function verificarServicio() {
    fetch("https://traductor-es-en.onrender.com/")
        .then(response => response.json())
        .then(data => console.log("Estado del servidor:", data.mensaje))
        .catch(error => console.error("Error al verificar el servicio:", error));
}

function traducir() {
    const texto = document.getElementById("texto").value;

    fetch("https://traductor-es-en.onrender.com/traducir", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texto })
    })
    .then(response => response.json())
    .then(data => document.getElementById("resultado").textContent = data.traduccion)
    .catch(error => console.error("Error en la tradu
