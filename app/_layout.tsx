import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ animation: "fade" }}>
    
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about/index" options={{ title: "About" }} />
    </Stack>
  );
}
