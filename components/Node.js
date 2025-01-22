const admin = require("firebase-admin");

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

// Fetch all users
const listAllUsers = async (nextPageToken) => {
  try {
    const users = [];
    let result = await admin.auth().listUsers(1000, nextPageToken);
    users.push(...result.users);

    // If there are more users, fetch them recursively
    if (result.pageToken) {
      users.push(...await listAllUsers(result.pageToken));
    }

    return users.map((user) => ({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      phoneNumber: user.phoneNumber,
    }));
  } catch (error) {
    console.error("Error listing users:", error);
    return [];
  }
};

// Example endpoint using Express.js
const express = require("express");
const app = express();

app.get("/get-users", async (req, res) => {
  const users = await listAllUsers();
  res.json(users);
});

app.listen(3000, () => console.log("Server is running on port 3000"));
