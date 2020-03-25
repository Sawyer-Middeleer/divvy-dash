from django.http import JsonResponse
from django.shortcuts import render
from dashboard.models import Station
from django.core import serializers

def pivot_data(request):
    dataset = Station.objects.all()
    return render(request, 'dashboard.html', {'data': dataset})
