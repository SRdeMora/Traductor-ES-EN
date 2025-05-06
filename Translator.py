from flask import Flask, request, jsonify
from googletrans import Translator

app = Flask(__name__)
translator = Translator()

@app.route("/traducir", methods=["POST"])
def traducir_texto():
    data = request.get_json()
    texto_espanol = data.get("texto", "")
    texto_ingles = translator.translate(texto_espanol, src="es", dest="en").text
    return jsonify({"traduccion": texto_ingles})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
