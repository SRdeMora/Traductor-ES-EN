import os
from flask import Flask, request, jsonify
from googletrans import Translator
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
translator = Translator()

@app.route("/", methods=["GET"])
def verificar():
    return jsonify({"mensaje": "¡El traductor está funcionando!"})

@app.route("/traducir", methods=["POST"])
def traducir_texto():
    data = request.get_json()
    if not data or "texto" not in data:
        return jsonify({"error": "Falta el texto a traducir"}), 400

    texto_espanol = data["texto"]
    texto_ingles = translator.translate(texto_espanol, src="es", dest="en").text
    return jsonify({"traduccion": texto_ingles})

# Usar el puerto asignado por Render
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
