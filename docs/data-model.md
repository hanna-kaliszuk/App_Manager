# Data Model

## 1. User

| Field | Type | Required | Constraints / Description |
|---|---|---|---|
| `id` | integer / UUID | yes | Primary key |
| `name`| varchar | yes| |
| `email` | varchar | yes | Unique; used for login |
| `password` | hashed string | yes | Hashed password |
| `last_login` | datetime | no | Date and time of the user's last login |
| `date_joined` | datetime | yes | Date and time when the account was created |

A user can have multiple job applications and multiple studies applications.

---

## 2. Job Application

| Field | Type | Required | Constraints / Description |
|---|---|---|---|
| `id` | integer / UUID | yes | Primary key |
| `user_id` | integer / UUID | yes | Foreign key → User |
| `position` | varchar | yes | |
| `company` | varchar | yes | |
| `location` | varchar | yes | City, country / remote |
| `min_wage` | decimal | no | |
| `date` | datetime | yes | Date and time of the last status change |
| `deadline` | datetime | no | Application deadline |
| `status` | enum / varchar | yes | Interested, Applied, Assessment, Interview, Offer, Accepted, Rejected |
| `link` | varchar / URL | no | |
| `attachments` | — | no | Application-specific files |
| `requirements` | text | no | |
| `notes` | text | no | |
| `recruiter` | varchar | no | Recruiter / contact person |

Each job application belongs to exactly one user.

---

## 3. Studies Application

| Field | Type | Required | Constraints / Description |
|---|---|---|---|
| `id` | integer / UUID | yes | Primary key |
| `user_id` | integer / UUID | yes | Foreign key → User |
| `university` | varchar | yes | |
| `location` | varchar | yes | City, country / remote |
| `major` | varchar | yes | |
| `minor` | varchar | no | |
| `date` | datetime | yes | Date and time of the last status change |
| `deadline` | datetime | no | Application deadline |
| `fees` | decimal | no | |
| `status` | enum / varchar | yes | Interested, Applied, Offer, Accepted, Rejected |
| `link` | varchar / URL | no | |
| `attachments` | — | no | Application-specific files |
| `requirements` | text | no | |
| `notes` | text | no | |
| `contact_person` | varchar | no | Contact person |

Each studies application belongs to exactly one user.

---

## 4. Relationships

```text
User
 │
 ├── 0..* JobApplication
 │
 └── 0..* StudiesApplication
```

- One user can have multiple job applications.
- One user can have multiple studies applications.
- Each job application belongs to exactly one user.
- Each studies application belongs to exactly one user.

## 5. Notes

- `id` fields are generated automatically by the database / Django.
- `email` must be unique.
- `last_login` can be empty for users who have never logged in.
- `date` represents the date and time of the last status change and is updated automatically when the status changes.
- `attachments` are currently a Nice-to-have feature. If implemented, they will likely be represented by a separate `Attachment` entity rather than stored directly as a field on the application.