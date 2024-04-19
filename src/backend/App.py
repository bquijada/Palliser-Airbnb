from flask import Flask, jsonify
import secrets
import activity
from google.cloud import datastore

app = Flask(__name__)

app.secret_key = secrets.token_hex(16)
client = datastore.client 

app.register_blueprint(activity.bp)

@app.route('/api/hello')
def hello():
    return jsonify({"message": "Hello, API!"})

@app.route('/api/data')
def get_data():
    # Logic to fetch data from database or other source
    data = {"example": "data"}
    return jsonify(data)

# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)