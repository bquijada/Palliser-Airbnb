from flask import Flask, jsonify
import activity
from google.cloud import datastore
from dotenv import load_dotenv
import os
app = Flask(__name__)

secret_key = os.getenv("SECRET_KEY")
if secret_key is None:
    raise ValueError("No SECRET_KEY set for Flask application")
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