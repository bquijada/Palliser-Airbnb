from flask import Blueprint, jsonify, request, url_for
from google.cloud import datastore
import json
from flask_cors import CORS
client = datastore.Client()

bp = Blueprint('tag', __name__, url_prefix='/tag')

@bp.route('', methods=['GET', 'POST'])
def get_tags():
    if request.method == 'GET':
        results = {}
        query = client.query(kind='tag')
        results['tags'] = list(query.fetch())
        if results:
            for result in results['tags']:
                result["id"] = result.key.id
            return json.dumps(results)
        else:
            return json.dumps({"Error": "No results found"}), 404
    elif request.method == 'POST':
        if request.headers['Content-Type'] != 'application/json':
            return json.dumps({"Error": "Content-Type must be application/json"}), 415, {
                'Content-Type': 'application/json'}

        # creates a new tag
        content = request.get_json()
        new_tag = datastore.entity.Entity(key=client.key('tag'))
        # verify body includes required attributes
        required_attributes = ['name']
        for attr in required_attributes:
            if attr not in content:
                return json.dumps(
                    {"Error": "The request object is missing the name attribute"}), 400

        new_tag.update({"name": content["name"], "activities": content["activities"]})
        client.put(new_tag)
        # get new id for resource URL and add that to entity
        self_url = request.url + "/" + str(new_tag.key.id)
        new_tag.update(
            {"name": content["name"], "activities": content["activities"], "self": self_url})
        client.put(new_tag)
        tag_id = new_tag.key.id

        response_data = {
            "id": tag_id,
            "name": content["name"],
            "activities": content["activities"],
            "self": self_url
        }
        return json.dumps(response_data), 201
    else:
        return json.dumps(
            {"Error": "Method not allowed. Only POST and GET avaiable at this URL"}), 405
