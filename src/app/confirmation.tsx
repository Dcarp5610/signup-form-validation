import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ConfirmationScreen() {
  const { firstName } = useLocalSearchParams<{ firstName: string }>();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Account Created Successfully!</Text>

        <Text style={styles.message}>Welcome, {firstName}!</Text>

        <Text style={styles.description}>
          Your sign-up form was submitted successfully.
        </Text>

        <Pressable style={styles.button} onPress={() => router.replace("/")}>
          <Text style={styles.buttonText}>Back to Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  content: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  message: {
    fontSize: 20,
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    marginTop: 12,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 14,
    borderRadius: 8,
    marginTop: 24,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
