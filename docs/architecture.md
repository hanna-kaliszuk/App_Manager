# Architecture

## 1. Overview

The application will use a client-server architecture.

The frontend will be responsible for the user interface and communication with the backend through a REST API. The backend will handle application logic, authentication and communication with the database.

```text
React + TypeScript
        ↓
      REST API
        ↓
   Django + DRF
        ↓
    PostgreSQL
```

## 2. Technology Stack

### Frontend

- React
- TypeScript
- Vite
- React Router
- CSS Modules

### Backend

- Python
- Django
- Django REST Framework

### Database

- PostgreSQL

### Testing

- Pytest
- Django / DRF tests
- Vitest
- React Testing Library

### Development

- Git
- GitHub

### Optional / Future

- Docker
- Object storage for application attachments
- LLM API for AI-assisted features

## 3. Application Architecture

The application will be divided into three main layers:

### Frontend

Responsible for:
- rendering the user interface
- handling user interactions
- displaying application records
- communicating with the backend API
- managing frontend state

### Backend

Responsible for:
- authentication and authorization
- application business logic
- validating user input
- managing application records
- exposing the REST API
- communicating with the database

### Database

Responsible for:
- storing user accounts
- storing job applications
- storing studies applications
- storing application-related data

Users must only be able to access their own application records.

## 4. Frontend

The frontend will be implemented using React and TypeScript.

React Router will be used for navigation between the main application screens:

- Home
- Log In
- Register
- Welcome
- Job Applications
- Studies Applications

Application details will be displayed in a modal rather than a separate page.

## 5. Backend

The backend will be implemented using Django and Django REST Framework.

Django will handle:
- user accounts
- authentication
- database models
- business logic

Django REST Framework will expose the data and functionality through a REST API consumed by the React frontend.

## 6. Database

PostgreSQL will be used as the primary database.

The database will store information about:
- users
- job applications
- studies applications
- application statuses
- deadlines
- application details

The exact data model and relationships will be defined separately in `data-model.md`.

## 7. Authentication

User authentication will be handled by Django.

The application will support:
- registration
- log in
- log out
- access control for authenticated users

The backend will ensure that users can only access and modify their own application records.

## 8. File Storage

Attachments are not part of the core MVP.

If file attachments are implemented later, application-specific files such as CVs, cover letters or recommendation letters will be stored separately from the main database.

The exact storage solution will be decided when attachments are implemented.

## 9. External Services

The MVP should not depend on external services beyond the required application infrastructure.

Future versions may use external services for:
- file storage
- deployment
- AI/LLM functionality
- calendar integration
- notifications

## 10. AI / LLM Integration

AI/LLM functionality is not required for the core application.

Future AI-assisted features may include **Resume Tailor**, which could analyze a job offer and compare its requirements with the user's CV.

AI functionality should be integrated through the backend rather than directly from the frontend.

This keeps API credentials and sensitive processing on the server side.

## 11. Security

The application should:
- keep authentication credentials secure
- protect user data from unauthorized access
- ensure that users can only access their own applications
- keep API credentials and other secrets outside the source code
- use environment variables for sensitive configuration