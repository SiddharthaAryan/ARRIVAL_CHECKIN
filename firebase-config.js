// Firebase configuration for ARRIVAL_CHECKIN
// Firebase config is allowed to be public. Security comes from Firebase Auth + Firestore Rules.

export const firebaseConfig = {
  apiKey: "AIzaSyDYjmmo46xpJhf911Hi2cvOfabnxLGMEvI",
  authDomain: "mmi-oncology-arrival-checkin.firebaseapp.com",
  projectId: "mmi-oncology-arrival-checkin",
  storageBucket: "mmi-oncology-arrival-checkin.firebasestorage.app",
  messagingSenderId: "922842566682",
  appId: "1:922842566682:web:a9c3e55eb11eeabcfa01a3"
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
