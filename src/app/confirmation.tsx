import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ConfirmationScreen() {
  const { firstName } = useLocalSearchParams<{ firstName: string }>();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Form Submitted Successfully, Account Created!
        </Text>

        <Text style={styles.message}>Thank you, {firstName}!</Text>

        <Pressable
          style={styles.button}
          onPress={() => router.replace("/(tabs)")}
        >
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
    backgroundColor: "#121212",
  },
  content: {
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff",
  },
  message: {
    fontSize: 20,
    marginTop: 20,
    color: "#ffffff",
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
