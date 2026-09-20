from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.test import APITestCase


class LoginTests(APITestCase):
    def setUp(self):
        User = get_user_model()

        self.user = User.objects.create_user(
            email="test@example.com",
            password="correct-password",
            first_name="Test",
            last_name="User",
        )

    def test_login_with_valid_credentials(self):
        response = self.client.post(
            "/api/auth/login/",
            {
                "email": "test@example.com",
                "password": "correct-password",
            },
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(response.wsgi_request.user.is_authenticated)

    def test_login_with_invalid_credentials(self):
        response = self.client.post(
            "/api/auth/login/",
            {
                "email": "test@example.com",
                "password": "wrong-password",
            },
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertFalse(response.wsgi_request.user.is_authenticated)

    def test_login_with_nonexistent_user(self):
        response = self.client.post(
            "/api/auth/login/",
            {
                "email": "nonexistent@example.com",
                "password": "correct-password",
            },
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_login_without_email(self):
        response = self.client.post(
            "/api/auth/login/",
            {
                "password": "correct-password",
            },
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_login_without_password(self):
        response = self.client.post(
            "/api/auth/login/",
            {
                "email": "test@example.com",
            },
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_login_with_get_request(self):
        response = self.client.get("/api/auth/login/")

        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)


class RegistrationTests(APITestCase):
    def test_register_without_first_name(self):
        response = self.client.post(
            "/api/auth/register/",
            {
                "last_name": "User",
                "email": "test@example.com",
                "password": "correct-password",
            },
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_register_without_last_name(self):
        response = self.client.post(
            "/api/auth/register/",
            {
                "first_name": "Test",
                "email": "test@example.com",
                "password": "correct-password",
            },
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_register_without_email(self):
        response = self.client.post(
            "/api/auth/register/",
            {
                "first_name": "Test",
                "last_name": "User",
                "password": "correct-password",
            },
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_register_with_invalid_email(self):
        response = self.client.post(
            "/api/auth/register/",
            {
                "first_name": "Test",
                "last_name": "User",
                "email": "not-an-email",
                "password": "correct-password",
            },
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_register_without_password(self):
        response = self.client.post(
            "/api/auth/register/",
            {
                "first_name": "Test",
                "last_name": "User",
                "email": "test@example.com",
            },
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_register_with_existing_email(self):
        User = get_user_model()

        User.objects.create_user(
            email="test@example.com",
            password="correct-password",
            first_name="Test",
            last_name="User",
        )

        response = self.client.post(
            "/api/auth/register/",
            {
                "first_name": "Another",
                "last_name": "User",
                "email": "test@example.com",
                "password": "another-password",
            },
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_register_with_invalid_password(self):
        response = self.client.post(
            "/api/auth/register/",
            {
                "first_name": "Test",
                "last_name": "User",
                "email": "test@example.com",
                "password": "123",
            },
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_register_with_valid_data(self):
        response = self.client.post(
            "/api/auth/register/",
            {
                "first_name": "Test",
                "last_name": "User",
                "email": "test@example.com",
                "password": "correct-password",
            },
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        User = get_user_model()
        user = User.objects.get(email="test@example.com")

        self.assertEqual(user.first_name, "Test")
        self.assertEqual(user.last_name, "User")
        self.assertTrue(user.check_password("correct-password"))


class MeTests(APITestCase):
    def test_me_without_login(self):
        response = self.client.get("/api/auth/me/")

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_me_with_login(self):
        User = get_user_model()

        User.objects.create_user(
            email="test@example.com",
            password="correct-password",
            first_name="Test",
            last_name="User",
        )

        self.client.post(
            "/api/auth/login/",
            {
                "email": "test@example.com",
                "password": "correct-password",
            },
            format="json",
        )

        response = self.client.get("/api/auth/me/")

        self.assertEqual(
            response.status_code,
            status.HTTP_200_OK,
        )

        self.assertEqual(
            response.data,
            {
                "first_name": "Test",
                "last_name": "User",
                "email": "test@example.com",
            },
        )
