from django.db import models

# Create your models here.
class Station(models.Model):
    station_id = models.CharField(max_length=50)
    num_bikes_available = models.IntegerField()
    num_docks_available = models.IntegerField()
    last_updated = models.DateTimeField(auto_now_add=True)
