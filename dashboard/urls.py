from django.urls import path
from . import views

urlpatterns = [
    path('', views.pivot_data, name='pivot_data'),
]
