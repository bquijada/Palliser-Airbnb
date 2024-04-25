import config
from flask import Flask, jsonify
import activity
from google.cloud import datastore
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = "123456789"
client = datastore.Client(project="palliserbnb")
cors = CORS(app, resources={r"/activity/winter": {"origins": "http://127.0.0.1:5173"},
                            r"/activity/summer": {"origins": "http://127.0.0.1:5173"},})

app.register_blueprint(activity.bp)


@app.route('/api/hello')
def hello():
    return jsonify({"message": "Hello, API!"})


# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)
