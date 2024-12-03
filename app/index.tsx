// app/index.tsx
import { Link } from "expo-router";
import { View, Text, Button, Pressable } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the Index Page!</Text>
      {/* Navigation Button to About Page */}
      <Link replace href="/(tabs)">
        <Text style={{ color: 'blue', padding: 10, backgroundColor: 'lightblue', borderRadius: 5 }}>
          Go to Details
        </Text>
      </Link>
    </View>
  );
}
