from django.db import models

import json
import requests

class Station(models.Model):
    num_bikes_disabled = models.IntegerField()
    station_id = models.CharField(max_length=50)
    num_bikes_available = models.IntegerField()
    num_docks_available = models.IntegerField()
    last_reported = models.DateTimeField(auto_now_add=False)

    def __str__(self):
        return self.station_id