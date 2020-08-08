import requests

from flask import Flask, Response, request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)


@app.route('/proxy/')
def proxy():
    target_url = request.args.get('to')
    response = requests.get(target_url)

    return Response(
        response.text,
        status=response.status_code,
        mimetype='application/json'
    )


if __name__ == "__main__":
    app.run(host='0.0.0.0')