const SERVER_URL = "https://traductor-es-en.onrender.com";  // Reemplaza con tu URL real

function traducir() {
    const texto = document.getElementById("texto").value;

    fetch(`${SERVER_URL}/traducir`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texto })
    })
    .then(response => response.json())
    .then(data => document.getElementById("resultado").textContent = data.traduccion)
    .catch(error => console.error("Error en la traducción:", error));
}
