from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.contrib.auth import authenticate, login, get_user_model
from django.contrib.auth.password_validation import validate_password
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

@api_view(["POST"])
def register_view(request):
    first_name = request.data.get("first_name")
    if first_name is None:
        return Response(
            {"detail": "first_name must be provided"},
            status=status.HTTP_400_BAD_REQUEST,
        )

    last_name = request.data.get("last_name")
    if last_name is None:
        return Response(
            {"detail": "last_name must be provided"},
            status=status.HTTP_400_BAD_REQUEST,
        )

    email = request.data.get("email")
    if email is None:
        return Response(
            {"detail": "email must be provided"},
            status=status.HTTP_400_BAD_REQUEST,
        )

    try:
        validate_email(email)
    except ValidationError:
        return Response(
            {"detail": "Invalid email address."},
            status=status.HTTP_400_BAD_REQUEST
        )

    User = get_user_model()
    if User.objects.filter(email=email).exists():
        return Response(
            {"detail": "Email is already in use."},
            status=status.HTTP_400_BAD_REQUEST,
        )

    password = request.data.get("password")
    if password is None:
        return Response(
            {"detail": "password must be provided"},
            status=status.HTTP_400_BAD_REQUEST,
        )



@ensure_csrf_cookie
def csrf_view(request):
    return JsonResponse({"detail": "CSRF cookie set."})
