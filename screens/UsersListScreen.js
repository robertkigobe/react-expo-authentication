// screens/UsersListScreen.js
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { getAuth, listUsers } from "firebase/auth"; // Import Firebase methods for listing users

const UsersListScreen = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from Firebase (if needed)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const auth = getAuth();
        const userList = await listUsers(auth); // Firebase method to list users
        setUsers(userList.users); // Assume you fetch the list of users from Firebase
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);


  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Registered Users</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  userItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default UsersListScreen;
