from flask import Flask, request, jsonify
from googletrans import Translator
from flask_cors import CORS  # Para permitir conexiones desde el frontend

app = Flask(__name__)
CORS(app)  # Habilita CORS para evitar bloqueos del navegador
translator = Translator()

# Ruta GET para verificar que el servicio está activo
@app.route("/", methods=["GET"])
def verificar():
    return jsonify({"mensaje": "¡El traductor está funcionando!"})

# Ruta POST para traducir texto
@app.route("/traducir", methods=["POST"])
def traducir_texto():
    data = request.get_json()
    if not data or "texto" not in data:
        return jsonify({"error": "Falta el texto a traducir"}), 400

    texto_espanol = data["texto"]
    texto_ingles = translator.translate(texto_espanol, src="es", dest="en").text
    return jsonify({"traduccion": texto_ingles})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
