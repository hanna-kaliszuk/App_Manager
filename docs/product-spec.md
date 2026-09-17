# Product Specification

## 1. Overview

### Project name

Application Manager (temporary)


### One-sentence description

An app to manage all of user's application records, including jobs and studies, with deadlines, location, fees / wages, requirements, links.


### Problem

Users often manage job and study applications across multiple websites, calendars, emails and files. This makes it difficult to keep track of deadlines, requirements, application status, documents and offer details and as a result difficult to compare different opportunities. 

Different deadlines also make it easier to ommit a submission, forget about getting a certain certificate beforehand, come to an interview unprepared, forget about a coding interview if so many happen in one week on different platforms. 


### Goal

collect information => organize it => track applications => compare opportunities => make better decisions; don't forget about the most important to you; 

to provide a single place to manage, track and compare job and study opportunities. 


### Target users

#### Students
Students looking for educational opportunities such as Bachelor's, Master's or PhD programmes. They can save opportunities they are interested in and track deadlines, requirements, fees and application status.

#### Job seekers
People looking for any type of job opportunity, including internships, part-time positions and full-time jobs. They can save opportunities, track their application progress, compare offers and keep application-specific documents and notes together with each opportunity.

### Why this application?

As a student I want to be able to track applications for a job / internship and studies in one place, without having to use traditional, ofter insufficient callendar. At the same time, you can stroe sent CV, cover letters and letters of recommendadion sent specifically as a response to an offer.  


### Product scope
The MVP focuses on two types of opportunities:
- Jobs
- Studies

The application may be extended in the future to support other types of opportunities, such as courses.

Users can save an opportunity before applying and later track its progress by changing its status.

---

## 2. Core Functionality

### Registration

**Why is it needed?**

To be able to track applications in one place.

### Log In / Out

Users can log in to their account and log out when needed.

### Add an application

**Description:**

Users can add an application record for either a job or a studies opportunity. An opportunity can be saved before applying and its status can be updated manually as the application progresses.

#### Job application

**Required fields:**
- Position — varchar, e.g. `Google SWE Intern`
- Company — varchar, e.g. `Google`
- Location — city, country / remote
- Date — date of the last status change; set automatically when the record is created or the status is changed
- Status

**Optional fields:**
- Min. wage
- Deadline

**Details:**
- Link
- Attachments
- Requirements
- Notes
- Recruiter / contact person

**Available statuses:**
- Interested
- Applied
- Assessment
- Interview
- Offer
- Accepted
- Rejected

#### Studies application

**Required fields:**
- University
- Location — city, country / remote
- Major
- Date — date of the last status change; set automatically when the record is created or the status is changed
- Status

**Optional fields:**
- Minor
- Deadline
- Fees

**Details:**
- Link
- Attachments
- Requirements
- Notes
- Contact person

**Available statuses:**
- Interested
- Applied
- Offer
- Accepted
- Rejected

Users can manually set the status to any available status.

### View applications

Applications are displayed in separate tables for jobs and studies.

#### Job table

The table displays:
- Position
- Company
- Location
- Min. wage
- Date
- Deadline
- Status

#### Studies table

The table displays:
- University
- Location
- Major
- Minor
- Date
- Deadline
- Fees
- Status

Clicking an application opens its details, including information that is not displayed in the table.

### Delete an application

**Why is it needed?**

To remove outdated or no longer needed applications.

---

## 3. Users

### Student

**Who are they?**
A student searching for educational opportunities, such as Bachelor's / Master's / PHD programmes.

**What do they want to achieve?**
Keep track of all the deadlines, fees, requirements on different universities. 

**What can they do in the application?**
Save the offers, add and manage application records, update status, view and manage application details, delete applications they no longer need.


### Job Seeker

**Who are they?**
A person looking for a job, sending out multiple CVs, searching for the perfect role, including internships, part-time, full-time. 

**What do they want to achieve?**
Track applications, save offers before applying, remember which CV/ cover letter was sent, compare salary, location, company, etc. 

**What can they do in the application?**
Save the offers, add and manage application records, update status, view and manage application details, delete applications they no longer need.


---

## 4. User Stories

- As a Bachelor's Student I want to keep track of all my Master's possibilities so that I don't miss a deadline while applying. 
- As a SWE I want to be able to compare salaries in different companies so that I choose the one that offers the most and is the nearest to my home. 
- As a Master's student I want to see the requirements on different universities for a PHD studies so that I can complete them beforehand. 


---

## 5. MVP

### Must have

<!-- Funkcje absolutnie konieczne do działania pierwszej wersji. -->

- Registration
- Log In / Log Out
- Add a job application 
- Add a studies application 
- View job applications
- View studies applications
- View application details
- Edit an application 
- Delete an application 
- Manually change the status
- Automatically update the last status change
- Sort application 
- Track deadlines


### Nice to have

<!-- Przydatne, ale aplikacja może działać bez nich. -->

- Filtering applications by date / location / wage / fees...
- Attachments
- Notes
- Requirements
- Recruiter / contact person 
- Dashboard
- Email from which the application was sent / response is supposed to be sent to
- Feedback form on the homepage / every page
- Password reminder


### Future

<!-- Pomysły na przyszłość. Nie implementujemy ich teraz. -->
- Calendar integration 
- Notifications
- Resume Tailor - scraping the job offer for key words and verifying them against the CV to ensure the best match possible
- Resume Builder
- Cover Letter / Resume Templates


---

## 6. Screens

<!-- Lista wszystkich ekranów, które przewidujesz. -->

### Screen 1 — Information Page

**Purpose:**
To inform unregistered users of the purpose of the app, its features and advantages of using it. 

**Main elements:**
Logo, visuals, short descriptions

**Available actions:**
Register / Log In 

### Screen 2 — Log In 

**Purpose:**
To log in 

**Main elements:**
Username, Password, "Don't rememeber the password?", "Don't have an account?", Log In with GitHub

**Available actions:**
Log In, remind password, register

### Screen 3 — Register

**Purpose:**
To register

**Main elements:**
"Already have an account?", Register button, register form, 

**Available actions:**
Register, go to logging in, register with github, ..., 

### Screen 4 — Welcome (future Dashboard)

**Purpose:**
To welcome the user and provide access to the main application sections.

**Main elements:**
Log out, nav bar, "Welcome XXX!"

**Available actions:**
Log out, go to Jobs / Studies

### Screen 4 — Job Applications

**Purpose:**
To track the job applications

**Main elements:**
Nav bar, Table with applications 

**Available actions:**
Add an offer, sort the current ones, go to studies, delete an application, select an application

After clicking on the offer an Application Details modal appears - user can close it.

### Screen 5 — Studies Applications

**Purpose:**
To track the studies applications

**Main elements:**
Nav bar, Table with applications 

**Available actions:**
Add an offer, sort the current ones, go to jobs, delete an application, select an application

After clicking on the offer an Application Details modal appears - user can close it.


---


## 7. Requirements

### Functional requirements

<!-- Co aplikacja MUSI robić. -->

- Allow users to create an account.
- Allow users to log in and log out.
- Store users' application records.
- Allow users to add job applications.
- Allow users to add studies applications.
- Show saved applications in separate job and studies tables.
- Show application details in a modal window.
- Allow users to edit applications.
- Allow users to delete applications.
- Allow users to manually change application status.
- Automatically update the date of the last status change.
- Allow users to sort applications.
- Allow users to specify an optional deadline.
- Use different available statuses for jobs and studies.
- Ensure that users can only access and manage their own application records.

### Non-functional requirements

<!-- Np. performance, security, accessibility, privacy. -->

- **Security** — users must only have access to their own data.
- **Privacy** — application data and stored information should remain private.
- **Usability** — important information should be easy to find, understand and compare.
- **Responsiveness** — the interface should work correctly on different screen sizes.
- **Reliability** — saved application records should persist between user sessions.


---

## 8. Constraints

<!-- Ograniczenia projektu. -->

### Technical constraints

- AI/LLM may be used to support development
- The architecture should allow the application to be extended with future features such as notifications, calendar integration and AI-assisted CV tailoring.

### Time constraints

- First MVP version due to 1st of October.

### Budget constraints

- Free / low-cost services and tools. 


---

## 9. Open Questions

<!-- Rzeczy, których jeszcze nie wiesz. -->

- [ ] 
- [ ] 
- [ ] 