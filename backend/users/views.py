from django.contrib.auth import authenticate, get_user_model, login
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


def require_field(value, field_name):
    if value is None:
        return Response(
            {"detail": f"{field_name} must be provided"},
            status=status.HTTP_400_BAD_REQUEST,
        )
    return None


def validate_login_data(request):
    email = request.data.get("email")
    error = require_field(email, "email")
    if error:
        return error

    password = request.data.get("password")
    error = require_field(password, "password")
    if error:
        return error

    return email, password


def validate_registration_data(request):
    first_name = request.data.get("first_name")
    error = require_field(first_name, "first_name")
    if error:
        return error

    last_name = request.data.get("last_name")
    error = require_field(last_name, "last_name")
    if error:
        return error

    email = request.data.get("email")
    error = require_field(email, "email")
    if error:
        return error

    try:
        validate_email(email)
    except ValidationError:
        return Response(
            {"detail": "Invalid email address."}, status=status.HTTP_400_BAD_REQUEST
        )

    password = request.data.get("password")
    error = require_field(password, "password")
    if error:
        return error

    try:
        validate_password(password)
    except ValidationError:
        return Response(
            {"detail": "Invalid password."},
            status=status.HTTP_400_BAD_REQUEST,
        )

    return first_name, last_name, email, password


@api_view(["POST"])
def login_view(request):
    data = validate_login_data(request)

    if isinstance(data, Response):
        return data

    email, password = data

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
    data = validate_registration_data(request)

    if isinstance(data, Response):
        return data

    first_name, last_name, email, password = data

    User = get_user_model()
    if User.objects.filter(email=email).exists():
        return Response(
            {"detail": "Email is already in use."},
            status=status.HTTP_400_BAD_REQUEST,
        )

    User.objects.create_user(
        email=email,
        password=password,
        first_name=first_name,
        last_name=last_name,
    )

    return Response(
        {"detail": "Registration successful."},
        status=status.HTTP_201_CREATED,
    )


@ensure_csrf_cookie
def csrf_view(request):
    return JsonResponse({"detail": "CSRF cookie set."})


@api_view(["GET"])
def me_view(request):
    if not request.user.is_authenticated:
        return Response(
            {"detail": "Login required."}, status=status.HTTP_401_UNAUTHORIZED
        )

    return Response(
        {
            "first_name": request.user.first_name,
            "last_name": request.user.last_name,
            "email": request.user.email,
        },
        status=status.HTTP_200_OK,
    )
