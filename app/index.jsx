import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.jsx to edit this screen.</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{color: 'blue'}}>Go to Profile</Link>
    </View>
  );
}
