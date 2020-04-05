import pandas as pd
import numpy as np
import json
import requests


gbfs_resp = requests.get('https://gbfs.divvybikes.com/gbfs/fr/station_status.json')
gbfs_text = gbfs_resp.text

gbfs_json = json.loads(gbfs_text)

gbfs_json
