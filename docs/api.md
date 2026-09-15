# API

## Authentication

- POST `/api/auth/register`
- POST `/api/auth/login`
- POST `/api/auth/logout`

The API will use Django session-based authentication.

### Registration

`POST /api/auth/register`

Creates a new user account.

**Request body:**
- `email` — required
- `password` — required

**Response:**
- `201 Created` — account created successfully
- `400 Bad Request` — invalid or incomplete data

### Log In

`POST /api/auth/login`

Authenticates the user and creates a session.

**Request body:**
- `email` — required
- `password` — required

**Response:**
- `200 OK` — login successful
- `400 Bad Request` — invalid credentials or data

After successful login, the client receives a session cookie. The cookie is automatically sent with subsequent requests to authenticated endpoints.

### Log Out

`POST /api/auth/logout`

Logs the user out and invalidates their current session.

**Response:**
- `204 No Content` — logout successful
- `401 Unauthorized` — user is not authenticated

### Authentication requirements

The following endpoints require an authenticated user:

- `/api/jobs`
- `/api/studies`

Users can only access and modify their own application records.

Unauthenticated requests to protected endpoints should return:

`401 Unauthorized`

---

## Jobs

- GET `/api/jobs`
- POST `/api/jobs`
- GET `/api/jobs/:id`
- PATCH `/api/jobs/:id`
- DELETE `/api/jobs/:id`

### View Job Applications

`GET /api/jobs`

Returns all job applications belonging to the authenticated user.

**Authentication:** Required

**Request body:**
None

**Response:**
- `200 OK` — applications returned successfully
- `401 Unauthorized` — user is not authenticated

**Response body:**
- `id`
- `position`
- `company`
- `location`
- `min_wage`
- `deadline`
- `date`
- `status`

### Add Job Application

`POST /api/jobs`

Creates a new job application.

**Authentication:** Required

**Request body:**
- `position` — required
- `company` — required
- `location` — required
- `min_wage` — optional
- `deadline` — optional
- `status` — required
- `link` — optional
- `attachments` — optional
- `requirements` — optional
- `notes` — optional
- `recruiter` — optional

`user_id` and `date` are set automatically by the backend.

**Response:**
- `201 Created` — application created successfully
- `400 Bad Request` — invalid or incomplete data
- `401 Unauthorized` — user is not authenticated

**Response body:**
- `id`
- `position`
- `company`
- `location`
- `min_wage`
- `deadline`
- `date`
- `status`
- `link`
- `attachments`
- `requirements`
- `notes`
- `recruiter`

### View Job Application

`GET /api/jobs/:id`

Returns the details of a specific job application belonging to the authenticated user.

**Authentication:** Required

**Request body:** None

**Response:**
- `200 OK` — application returned successfully
- `401 Unauthorized` — user is not authenticated
- `404 Not Found` — application does not exist or does not belong to the user

**Response body:**
- `id`
- `position`
- `company`
- `location`
- `min_wage`
- `deadline`
- `date`
- `status`
- `link`
- `attachments`
- `requirements`
- `notes`
- `recruiter`

### Edit Job Application

`PATCH /api/jobs/:id`

Updates one or more fields of a job application.

**Authentication:** Required

**Request body:**
- `position` — optional
- `company` — optional
- `location` — optional
- `min_wage` — optional
- `deadline` — optional
- `status` — optional
- `link` — optional
- `attachments` — optional
- `requirements` — optional
- `notes` — optional
- `recruiter` — optional

If the status is changed, `date` is updated automatically by the backend.

**Response:**
- `200 OK` — application updated successfully
- `400 Bad Request` — invalid data
- `401 Unauthorized` — user is not authenticated
- `404 Not Found` — application does not exist or does not belong to the user

**Response body:**
- `id`
- `position`
- `company`
- `location`
- `min_wage`
- `deadline`
- `date`
- `status`
- `link`
- `attachments`
- `requirements`
- `notes`
- `recruiter`

### Delete Job Application

`DELETE /api/jobs/:id`

Deletes a specific job application belonging to the authenticated user.

**Authentication:** Required

**Request body:** None

**Response:**
- `204 No Content` — application deleted successfully
- `401 Unauthorized` — user is not authenticated
- `404 Not Found` — application does not exist or does not belong to the user

---

## Studies

- GET `/api/studies`
- POST `/api/studies`
- GET `/api/studies/:id`
- PATCH `/api/studies/:id`
- DELETE `/api/studies/:id`

### View Studies Applications

`GET /api/studies`

Returns all studies applications belonging to the authenticated user.

**Authentication:** Required

**Request body:** None

**Response:**
- `200 OK` — applications returned successfully
- `401 Unauthorized` — user is not authenticated

**Response body:**
- `id`
- `university`
- `location`
- `major`
- `minor`
- `fees`
- `deadline`
- `date`
- `status`

### Add Studies Application

`POST /api/studies`

Creates a new studies application.

**Authentication:** Required

**Request body:**
- `university` — required
- `location` — required
- `major` — required
- `minor` — optional
- `fees` — optional
- `deadline` — optional
- `status` — required
- `link` — optional
- `attachments` — optional
- `requirements` — optional
- `notes` — optional
- `contact_person` — optional

`user_id` and `date` are set automatically by the backend.

**Response:**
- `201 Created` — application created successfully
- `400 Bad Request` — invalid or incomplete data
- `401 Unauthorized` — user is not authenticated

**Response body:**
- `id`
- `university`
- `location`
- `major`
- `minor`
- `fees`
- `deadline`
- `date`
- `status`
- `link`
- `attachments`
- `requirements`
- `notes`
- `contact_person`

### View Studies Application

`GET /api/studies/:id`

Returns the details of a specific studies application belonging to the authenticated user.

**Authentication:** Required

**Request body:** None

**Response:**
- `200 OK` — application returned successfully
- `401 Unauthorized` — user is not authenticated
- `404 Not Found` — application does not exist or does not belong to the user

**Response body:**
- `id`
- `university`
- `location`
- `major`
- `minor`
- `fees`
- `deadline`
- `date`
- `status`
- `link`
- `attachments`
- `requirements`
- `notes`
- `contact_person`

### Edit Studies Application

`PATCH /api/studies/:id`

Updates one or more fields of a studies application.

**Authentication:** Required

**Request body:**
- `university` — optional
- `location` — optional
- `major` — optional
- `minor` — optional
- `fees` — optional
- `deadline` — optional
- `status` — optional
- `link` — optional
- `attachments` — optional
- `requirements` — optional
- `notes` — optional
- `contact_person` — optional

If the status is changed, `date` is updated automatically by the backend.

**Response:**
- `200 OK` — application updated successfully
- `400 Bad Request` — invalid data
- `401 Unauthorized` — user is not authenticated
- `404 Not Found` — application does not exist or does not belong to the user

**Response body:**
- `id`
- `university`
- `location`
- `major`
- `minor`
- `fees`
- `deadline`
- `date`
- `status`
- `link`
- `attachments`
- `requirements`
- `notes`
- `contact_person`

### Delete Studies Application

`DELETE /api/studies/:id`

Deletes a specific studies application belonging to the authenticated user.

**Authentication:** Required

**Request body:** None

**Response:**
- `204 No Content` — application deleted successfully
- `401 Unauthorized` — user is not authenticated
- `404 Not Found` — application does not exist or does not belong to the user