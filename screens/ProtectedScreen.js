import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { auth } from "../firebaseConfig";
import LogoutButton from "../components/LogoutButton";

export default function ProtectedScreen({ navigation }) {
  const handleLogout = () => {
    auth.signOut();
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to the Protected Screen!</Text>
      <LogoutButton />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});


