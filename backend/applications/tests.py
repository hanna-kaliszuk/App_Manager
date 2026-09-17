from rest_framework.test import APITestCase


class TestApiResponse(APITestCase):
    def test_endpoint_only_receiving_get(self):
        response = self.client.get("/api/health/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, {"status": "ok"})

    def test_endpoint_rejecting_post(self):
        response = self.client.post("/api/health/")

        self.assertEqual(response.status_code, 405)