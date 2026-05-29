// Firebase configuration for ARRIVAL_CHECKIN
// Step: Replace the placeholder values below with your Firebase web app config.
// Important: Firebase config is allowed to be public. Security comes from Firebase Auth + Firestore Rules.

export const firebaseConfig = {
  apiKey: "PASTE_API_KEY_HERE",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_MESSAGING_SENDER_ID",
  appId: "PASTE_APP_ID"
};

// Only these emails should be allowed to open the security dashboard.
// Add your admin/security email IDs after enabling Firebase Authentication.
export const allowedAdminEmails = [
  "aryansiddhartha03@gmail.com"
];

export const eventConfig = {
  eventName: "Oncology Symposium 2026",
  hospitalName: "MMI Narayana Health, Raipur",
  collectionName: "arrivalCheckins"
};
