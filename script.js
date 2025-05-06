const SERVER_URL = "https://traductor-es-en.onrender.com";  // Reemplaza con tu URL en Render

document.addEventListener("DOMContentLoaded", function () {
    verificarServicio();
});

function verificarServicio() {
    fetch(`${SERVER_URL}/`)
        .then(response => {
            if (!response.ok) throw new Error("Error de conexión con el servidor.");
            return response.json();
        })
        .then(data => console.log("Estado del servidor:", data.mensaje))
        .catch(error => console.error("Error al verificar el servicio:", error));
}

function traducir() {
    const texto = document.getElementById("texto").value;

    if (!texto.trim()) {
        alert("Por favor, ingresa un texto para traducir.");
        return;
    }

    fetch(`${SERVER_URL}/traducir`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texto })
    })
    .then(response => {
        if (!response.ok) throw new Error("Error en la solicitud de traducción.");
        return response.json();
    })
    .then(data => document.getElementById("resultado").textContent = data.traduccion)
    .catch(error => {
        console.error("Error en la traducción:", error);
        alert("Ocurrió un error al traducir. Intenta nuevamente.");
    });
}
