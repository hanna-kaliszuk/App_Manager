from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

def home(request):
    return HttpResponse("App Manager")

@api_view(["GET"])
def health(request):
    return Response({"status": "ok"})

