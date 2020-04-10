import json
import requests

gbfs_resp = requests.get('https://gbfs.divvybikes.com/gbfs/fr/station_status.json')
gbfs_json = json.loads(gbfs_resp.text)

divvy_stations = gbfs_json['data']['stations']

divvy_stations[0]