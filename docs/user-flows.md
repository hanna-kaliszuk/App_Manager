# User Flows

## 1. Authentication Flow

### 1.1 Unauthenticated user

Home
→ User is not logged in
→ Check whether the user has an account

**No account:**
Home → Register → Welcome

**Has an account:**
Home → Log In → Welcome

### 1.2 Authenticated user

Home
→ User is logged in
→ Welcome

## 2. Navigation Flow

Welcome
→ Choose Jobs or Studies
→ Applications table

From the applications table, the user can:
- Add an application
- View an application
- Edit an application
- Delete an application
- Sort applications

## 3. Add Application

### 3.1 Add Job Application

Job Applications
→ Click "Add"
→ Fill in required fields
→ Optionally fill in additional fields
→ Save
→ Application appears in the Jobs table

### 3.2 Add Studies Application

Studies Applications
→ Click "Add"
→ Fill in required fields
→ Optionally fill in additional fields
→ Save
→ Application appears in the Studies table

## 4. View Application

Job / Studies Applications
→ Click an application
→ Application details modal opens
→ User views application details
→ Close modal
→ Return to applications table

## 5. Edit Application

Job / Studies Applications
→ Select an application
→ Click "Edit"
→ Modify fields
→ Save
→ Updated application is displayed in the table

## 6. Delete Application

Job / Studies Applications
→ Select an application
→ Click "Delete"
→ Confirmation modal appears

**Cancel:**
→ Close modal
→ Application remains unchanged

**Confirm:**
→ Application is deleted
→ Return to applications table

## 7. Logout Flow

Welcome / any authenticated screen
→ Click "Log out"
→ User is logged out
→ Return to Home

## 8. Sort Applications

Job / Studies Applications
→ Select a sorting option
→ Applications are reordered
→ User remains on the current applications table