import { Stack } from "expo-router";
import { ComponentProps } from "react";
import { Platform, View } from "react-native";

type StackScreenOptionsObject = Exclude<
  NonNullable<ComponentProps<typeof Stack.Screen>["options"]>,
  (...args: any[]) => any
>;

export default function RootLayout() {
  const homeScreenStackOptions: Partial<StackScreenOptionsObject> = {
    title: "Home",
    headerBackVisible: false,
  };

  if (Platform.OS === "web") {
    homeScreenStackOptions.headerLeft = () => <View style={{ width: 24 }} />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={homeScreenStackOptions} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="+not-found" options={{ title: "Oops! Not Found" }} />
    </Stack>
  );
}
