# ARRIVAL_CHECKIN

Ground-level guest arrival check-in system for Oncology Symposium 2026 at MMI Narayana Health, Raipur.

## What this does

- Guests scan a QR code and open `index.html`.
- They enter only:
  - Full Name
  - 10-digit Mobile Number
- Data is saved in Firebase Firestore.
- Security/admin opens `security.html` to see live check-ins and export CSV.

## Files

- `index.html` — public QR check-in page
- `security.html` — admin/security dashboard
- `firebase-config.js` — Firebase settings and allowed admin emails

## Step 1: Create Firebase project

1. Go to Firebase Console.
2. Create a project, for example:
   `arrival-checkin-oncology`
3. Add a web app.
4. Copy the Firebase web app config.
5. Replace the placeholder values in `firebase-config.js`.

## Step 2: Enable Firestore

1. In Firebase, go to Firestore Database.
2. Create database.
3. Start in production mode.
4. Select location.

## Step 3: Enable Authentication for dashboard

1. Go to Authentication.
2. Click Sign-in method.
3. Enable Email/Password.
4. Add a user manually, for example:
   `aryansiddhartha03@gmail.com`
5. Set a strong password.
6. Add the same email in `allowedAdminEmails` inside `firebase-config.js`.

## Step 4: Firestore Rules

Use these rules so guests can submit check-ins but only admin users can read the dashboard.

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /arrivalCheckins/{docId} {
      allow create: if request.resource.data.keys().hasOnly([
        'name',
        'phone',
        'eventName',
        'hospitalName',
        'createdAt',
        'createdAtLocal',
        'userAgent'
      ])
      && request.resource.data.name is string
      && request.resource.data.name.size() >= 2
      && request.resource.data.name.size() <= 80
      && request.resource.data.phone is string
      && request.resource.data.phone.matches('^[0-9]{10}$');

      allow read: if request.auth != null
      && request.auth.token.email in [
        'aryansiddhartha03@gmail.com'
      ];

      allow update, delete: if false;
    }
  }
}
```

If you add more admin/security emails, add them both in:

1. Firebase Authentication users
2. `allowedAdminEmails` in `firebase-config.js`
3. Firestore Rules email list

## Step 5: Enable GitHub Pages

1. Go to this repo's Settings.
2. Open Pages.
3. Source: Deploy from branch.
4. Branch: `main`.
5. Folder: `/root`.
6. Save.

After a minute, public check-in page will be:

`https://siddharthaaryan.github.io/ARRIVAL_CHECKIN/`

Security dashboard will be:

`https://siddharthaaryan.github.io/ARRIVAL_CHECKIN/security.html`

## Step 6: QR Code

Create QR for:

`https://siddharthaaryan.github.io/ARRIVAL_CHECKIN/`

Use that QR on the ground at the event registration desk.

## Privacy note

This system stores mobile numbers. Keep the security dashboard link and admin password restricted to authorized event/security team only.
