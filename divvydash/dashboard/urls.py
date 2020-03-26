from rest_framework import routers
from .api import StationViewSet

router = routers.DefaultRouter()
router.register('api/dashboard', StationViewSet, 'stations')

urlpatterns = router.urls
