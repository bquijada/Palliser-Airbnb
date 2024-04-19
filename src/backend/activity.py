from flask import Blueprint, request, url_for
from google.cloud import datastore
import json

client = datastore.Client()

bp = Blueprint('activity', __name__, url_prefix='/activities')