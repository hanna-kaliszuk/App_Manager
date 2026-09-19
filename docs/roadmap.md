# Roadmap

## 1. Repository & Project Setup

### Repository structure
- [X] Create the basic repository structure.
- [X] Create `backend/`, `frontend/` and `docs/` directories.
- [X] Move and organize project documentation in `docs/`.

### Version control
- [X] Initialize Git repository.
- [X] Review and update `.gitignore`.
- [X] Add `.env.example` with required environment variables.


---

## 2. Development Environment

### Backend
- [X] Create Python virtual environment.
- [X] Install Django.
- [X] Install Django REST Framework.
- [X] Create the Django project.
- [X] Create the initial Django application(s).
- [X] Configure environment variables.
- [X] Configure PostgreSQL connection.

### Frontend
- [X] Set up React with TypeScript.
- [X] Set up Vite.
- [X] Install and configure React Router.
- [X] Set up the initial frontend structure.

### Database
- [X] Install / configure PostgreSQL.
- [X] Create the development database.
- [X] Connect Django to PostgreSQL.
- [X] Verify that Django can connect to the database.

### Development tools
- [X] Configure formatting / linting tools.
- [X] Configure backend testing tools.
- [X] Configure frontend testing tools.
- [X] Verify that the complete development environment runs locally.

---

## 3. Backend Foundation

- [X] Create the basic Django project structure.
- [X] Configure Django REST Framework.
- [X] Configure CORS for the frontend.
- [X] Set up the Django settings for development.
- [X] Configure the database and migrations.
- [X] Create a basic test API endpoint.
- [X] Verify that the API can be accessed locally.
- [X] Verify that the backend can communicate with PostgreSQL.
- [X] Add initial backend tests.
- [X] Model User


---

## 4. Frontend Foundation

- [X] Create the basic React application structure.
- [X] Configure React Router.
- [X] Create the initial application layout.
- [X] Create the main application screens:
  - [X] Home
  - [X] Log In
  - [X] Register
  - [X] Welcome
  - [X] Job Applications
  - [X] Studies Applications
- [ ] Set up communication with the backend API.
- [ ] Verify that the frontend can communicate with the backend.
- [X] Add initial frontend tests.
- [ ] Build the main screens:
  - [X] Home
  - [X] Log In
  - [ ] Register
  - [ ] Welcome
  - [ ] Jobs
  - [ ] Studies
---

## 5. Backend–Frontend Integration


- Connect the frontend and backend.
- Implement API communication.
- Handle authentication state.
- Handle API errors.

## 6. Authentication

- Implement registration.
- Implement login and logout.
- Implement session-based authentication.
- Protect authenticated endpoints.
- Test authentication and authorization.

## 7. Job Applications

- Implement the `JobApplication` model.
- Implement Jobs API.
- Implement adding, viewing, editing and deleting applications.
- Implement status handling and automatic status-change dates.
- Implement sorting.

## 8. Studies Applications

- Implement the `StudiesApplication` model.
- Implement Studies API.
- Implement adding, viewing, editing and deleting applications.
- Implement status handling and automatic status-change dates.
- Implement sorting.

## 9. Testing

- Expand backend tests.
- Expand frontend tests.
- Add integration tests.
- Test authentication and authorization.
- Test important edge cases.

## 10. UI/UX & Polish

- Improve visual design.
- Improve responsive behaviour.
- Improve validation and error messages.
- Polish application details modal.
- Review usability.

## 11. Deployment

- Prepare the application for production.
- Configure production environment.
- Deploy the backend.
- Deploy the frontend.
- Configure the production database.

## 12. Future Features

- Dashboard.
- Calendar integration.
- Notifications.
- Resume Tailor.
- Resume Builder.
- Cover Letter / Resume Templates.
- File attachments.