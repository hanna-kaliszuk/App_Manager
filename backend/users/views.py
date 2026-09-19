from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["POST"])
def login_view(request):
    email = request.data.get("email")
    if email is None:
        return Response(
            {"detail": "email must be provided"},
            status=status.HTTP_400_BAD_REQUEST,
        )

    password = request.data.get("password")
    if password is None:
        return Response(
            {"detail": "password must be provided"},
            status=status.HTTP_400_BAD_REQUEST,
        )

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
