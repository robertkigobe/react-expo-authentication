import React,{useState, useEffect} from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function HomeScreen({ navigation }) {

  const [user, setUser] = useState(null);

// Use useEffect to listen to Firebase auth changes
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return unsubscribe;
}, []);



// Example of how to navigate to Protected screen
const navigateToProtected = () => {
  if (user) {
    navigation.navigate("Protected");
  } else {
    navigation.navigate("Login"); // Redirect to login if not authenticated
  }
};



  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
      <Button
        title="Go to Protected Screen"
        onPress={navigateToProtected}
      />
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
