import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEfLv-6uLuRbDQDcZ6E5MGYr8xc92cDQE",
  authDomain: "propertylistmanager-3151c.firebaseapp.com",
  projectId: "propertylistmanager-3151c",
  storageBucket: "propertylistmanager-3151c.appspot.com",
  messagingSenderId: "1074069996366",
  appId: "1:1074069996366:web:671382f709fe486cf6141f",
  measurementId: "G-WCGCVBZFBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Handle form submission
document.querySelector('.form').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent form submission and page reload

    // Get form values
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[email="email"]').value;
    const interest = document.querySelector('#interest').value;
    const phone = document.querySelector('input[phone="phone"]').value;
    const message = document.querySelector('input[message="message"]').value;

    // Add form data to Firestore
    try {
        await addDoc(collection(db, "contacts"), {
            name: name,
            email: email,
            interest: interest,
            phone: phone,
            message: message,
            timestamp: serverTimestamp() // Add a timestamp field
        });
        alert("Form submitted successfully!");
        // Reset form after submission
        document.querySelector('.form').reset();
    } catch (error) {
        console.error("Error adding document: ", error);
    }
});