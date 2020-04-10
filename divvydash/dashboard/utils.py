from dashboard.models import Station

import json
import requests
import datetime


gbfs_resp = requests.get('https://gbfs.divvybikes.com/gbfs/fr/station_status.json')
gbfs_json = json.loads(gbfs_resp.text)

for station in gbfs_json['data']['stations']:
    s = Station.objects.create(
                num_bikes_disabled = station['num_bikes_disabled'],
                num_docks_available = station['num_docks_available'],
                num_bikes_available = station['num_bikes_available'],
                station_id = station['station_id'],
                last_reported = timezone.now()
            )
    print('station added: ' + station['station_id'])
print('Divvy Station Update Complete')