import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { auth } from "../firebaseConfig";

const LogoutButton = () => {
  const navigation = useNavigation(); // Use the hook to get the navigation prop

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign out the user
      navigation.reset({
        index: 0,
        routes: [{ name: "Main" }], // Reset navigation to the Main screen
      });
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <View>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default LogoutButton;
