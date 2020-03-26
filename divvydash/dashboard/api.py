from dashboard.models import Station
from rest_framework import viewsets, permissions
from .serializers import StationSerializer

# station viewset
class StationViewSet(viewsets.ModelViewSet):
    queryset = Station.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = StationSerializer
