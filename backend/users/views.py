from django.contrib.auth import authenticate, login
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie


@api_view(["POST"])
def login_view(request):
    email = request.data.get("email")
    password = request.data.get("password")

    user = authenticate(
        request,
        email=email,
        password=password,
    )

    if user is None:
        return Response(
            {"detail": "invalid credentials."},
            status=status.HTTP_401_UNAUTHORIZED,
        )

    login(request, user)
    return Response(
        {"detail": "valid credentials."},
        status=status.HTTP_200_OK,
    )

@ensure_csrf_cookie
def csrf_view(request):
    return JsonResponse({"detail": "CSRF cookie set."})