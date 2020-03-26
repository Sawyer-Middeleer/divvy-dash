from rest_framework import serializers
from dashboard.models import Station

# station serializer

class StationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Station
        fields = '__all__'
