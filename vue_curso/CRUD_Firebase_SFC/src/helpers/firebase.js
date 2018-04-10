import { initializeApp } from "firebase";

// Initialize Firebase
const app = initializeApp({
    apiKey: "AIzaSyBykDRJ_bF0EqaQJa83bcuXY4OiW-KYRUw",
    authDomain: "crud-vue-firebase-ab4f8.firebaseapp.com",
    databaseURL: "https://crud-vue-firebase-ab4f8.firebaseio.com",
    projectId: "crud-vue-firebase-ab4f8",
    storageBucket: "",
    messagingSenderId: "495497000628"
})

export const db = app.database()
export const dbRef = db.ref('vueStudents')