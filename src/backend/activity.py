from flask import Blueprint, jsonify, request, url_for
from google.cloud import datastore
import json
from flask_cors import CORS
client = datastore.Client()

bp = Blueprint('activity', __name__, url_prefix='/activity')


def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = 'http://127.0.0.1:5173'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
    return response


@bp.route('/summer', methods=['GET'])
def get_summer():
    if request.method == 'GET':
        results = {}
        query = client.query(kind='activity')
        query.add_filter(query.add_filter('season', 'IN', ['summer', 'all']))
        results['activities'] = list(query.fetch())
        if results:
            for result in results['activities']:
                result["id"] = result.key.id
            return json.dumps(results)
        else:
            return json.dumps({"Error": "No results found"}), 404
    else:
        return json.dumps(
            {"Error": "Method not allowed. Only POST and GET avaiable at this URL"}), 405


@bp.route('/winter', methods=['GET'])
def get_winter():
    if request.method == 'GET':
        results = {}
        query = client.query(kind='activity')
        query.add_filter(query.add_filter('season', 'IN', ['winter', 'all']))
        results['activities'] = list(query.fetch())
        if results:
            for result in results['activities']:
                result["id"] = result.key.id
            return json.dumps(results)
        else:
            return json.dumps({"Error": "No results found"}), 404
    else:
        return json.dumps(
            {"Error": "Method not allowed. Only POST and GET avaiable at this URL"}), 405


@bp.route('/<activity_id>', methods=['GET', 'PUT'])
def activity_get(activity_id):
    if request.method == 'GET':
        query = client.query(kind='activity')
        query.add_filter('__key__', '=', client.key(
            'activity', int(activity_id)))
        result = list(query.fetch())
        if result:
            result[0]["id"] = result[0].key.id
            selected_activity = result[0]
            return json.dumps(selected_activity)
        else:
            return json.dumps({"Error": "No activity with this id exists"}), 404
    if request.method == 'PUT':
        return edit_activity(activity_id)
    else:
        return json.dumps({"Error": "Method not allowed. Only PUT/GET avaiable at this URL"}), 405


@bp.route('', methods=['POST', 'GET'])
def activity_get_post():
    if request.method == 'POST':
        # check if the request has a Content-Type header and if it is JSON
        if request.headers['Content-Type'] != 'application/json':
            return json.dumps({"Error": "Content-Type must be application/json"}), 415, {
                'Content-Type': 'application/json'}

        # creates a new activity
        content = request.get_json()
        new_activity = datastore.entity.Entity(key=client.key('activity'))

        # verify body includes required attributes
        required_attributes = ['name', 'image',
                               'description', 'link', 'season']
        for attr in required_attributes:
            if attr not in content:
                return json.dumps(
                    {"Error": "The request object is missing at least one of the required attributes"}), 400

        new_activity.update({"name": content["name"], "image": content["image"],
                             "description": content["description"], "season": content["season"], "link": content["link"], "self": ''})
        client.put(new_activity)
        # get new id for resource URL and add that to entity
        self_url = request.url + "/" + str(new_activity.key.id)
        new_activity.update({"name": content["name"], "image": content["image"],
                             "description": content["description"], "season": content["season"], "link": content["link"], "self": self_url})
        client.put(new_activity)
        activity_id = new_activity.key.id

        response_data = {
            "id": activity_id,
            "name": content["name"],
            "image": content["image"],
            "description": content["description"],
            "season": content["season"],
            "link": content["link"],
            "self": self_url
        }
        return json.dumps(response_data), 201
    elif request.method == 'GET':
        results = {}
        query = client.query(kind='activity')
        results['activities'] = list(query.fetch())
        if results:
            for result in results['activities']:
                result["id"] = result.key.id
            return json.dumps(results)
        else:
            return json.dumps({"Error": "No results found"}), 404
    else:
        return json.dumps(
            {"Error": "Method not allowed. Only POST and GET avaiable at this URL"}), 405


def edit_activity(activity_id):
    content = request.json
    activity_key = client.key('activity', int(activity_id))
    activity_to_update = client.get(activity_key)
    if not activity_to_update:
        return json.dumps({"Error": "No activity with this id exists"}), 404
    for property in content:
        activity_to_update[property] = content[property]
    client.put(activity_to_update)
    return jsonify(activity_to_update)
