from django.conf import settings
from django.db import models
from django.utils import timezone


class Station(models.Model):
    station_id = models.CharField(max_length=20)
    num_bikes_available = models.IntegerField()
    last_updated = models.DateTimeField(auto_now=False)

    def update(self):
        self.last_updated = timezone.now()
        self.save()

    def __str__(self):
        return self.station_id
