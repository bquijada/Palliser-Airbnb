from flask import Blueprint, request, url_for
from google.cloud import datastore
import json

client = datastore.Client()

bp = Blueprint('activity', __name__, url_prefix='/activity')


@bp.route('/<activity_id>', methods=['GET'])
def activity_get(activity_id):
    if request.method == 'GET':
        query = client.query(kind='activity')
        query.add_filter('__key__', '=', client.key(
            'activity', int(activity_id)))
        result = list(query.fetch())
        if result:
            # return all the loads on given boat
            result[0]["id"] = result[0].key.id
            selected_activity = result[0]
            # request all the load information for each load
            return json.dumps(selected_activity)
        else:
            return json.dumps({"Error": "No activity with this id exists"}), 404


@bp.route('', methods=['POST'])
def activity_get_post():
    if request.method == 'POST':
        # check if the request has a Content-Type header and if it is JSON
        if request.headers['Content-Type'] != 'application/json':
            return json.dumps({"Error": "Content-Type must be application/json"}), 415, {
                'Content-Type': 'application/json'}

        # creates a new boat
        content = request.get_json()
        new_activity = datastore.entity.Entity(key=client.key('activity'))

        # verify body includes required attributes
        required_attributes = ['name', 'photo',
                               'description', 'link', 'season']
        for attr in required_attributes:
            if attr not in content:
                return json.dumps(
                    {"Error": "The request object is missing at least one of the required attributes"}), 400

        new_activity.update({"name": content["name"], "photo": content["photo"],
                             "description": content["description"], "season": content["season"], "link": content["link"], "self": ''})
        client.put(new_activity)
        # get new id for resource URL and add that to entity
        self_url = request.url + "/" + str(new_activity.key.id)
        new_activity.update({"name": content["name"], "photo": content["photo"],
                             "description": content["description"], "season": content["season"], "link": content["link"], "self": self_url})
        client.put(new_activity)
        activity_id = new_activity.key.id

        response_data = {
            "id": activity_id,
            "name": content["name"],
            "photo": content["photo"],
            "description": content["description"],
            "season": content["season"],
            "link": content["link"],
            "self": self_url
        }
        return json.dumps(response_data), 201
    else:
        return json.dumps(
            {"Error": "Method not allowed. Only POST avaiable at this URL"}), 405
