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
- [ ] Set up React with TypeScript.
- [ ] Set up Vite.
- [ ] Install and configure React Router.
- [ ] Set up the initial frontend structure.

### Database
- [X] Install / configure PostgreSQL.
- [X] Create the development database.
- [X] Connect Django to PostgreSQL.
- [X] Verify that Django can connect to the database.

### Development tools
- [ ] Configure formatting / linting tools.
- [ ] Configure backend testing tools.
- [ ] Configure frontend testing tools.
- [ ] Verify that the complete development environment runs locally.

---

## 3. Backend Foundation

- [ ] Create the basic Django project structure.
- [ ] Configure Django REST Framework.
- [ ] Configure CORS for the frontend.
- [ ] Set up the Django settings for development.
- [ ] Configure the database and migrations.
- [ ] Create a basic test API endpoint.
- [ ] Verify that the API can be accessed locally.
- [ ] Verify that the backend can communicate with PostgreSQL.
- [ ] Add initial backend tests.

---

## 4. Frontend Foundation

- [ ] Create the basic React application structure.
- [ ] Configure React Router.
- [ ] Create the initial application layout.
- [ ] Create the main application screens:
  - [ ] Home
  - [ ] Log In
  - [ ] Register
  - [ ] Welcome
  - [ ] Job Applications
  - [ ] Studies Applications
- [ ] Set up communication with the backend API.
- [ ] Verify that the frontend can communicate with the backend.
- [ ] Add initial frontend tests.

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