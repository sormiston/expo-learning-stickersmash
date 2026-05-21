import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type AppHeaderProps = {
  title: string;
  canGoBack: boolean;
  onBackPress: () => void;
};

function AppHeader({ title, canGoBack, onBackPress }: AppHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.headerContainer, { paddingTop: insets.top }]}>
      <View style={styles.headerRow}>
        <View style={styles.left}>
          {canGoBack ? (
            <Pressable
              onPress={onBackPress}
              hitSlop={10}
              accessibilityRole="button"
              accessibilityLabel="Go back"
            >
              <Ionicons name="chevron-back" size={24} color="#fff" />
            </Pressable>
          ) : (
            <View style={styles.backPlaceholder} />
          )}
        </View>

        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
      </View>
    </View>
  );
}

function defaultTitleForRoute(routeName: string) {
  if (routeName === "index") return "Home";
  if (routeName === "about/index") return "About";
  return "StickerSmash";
}

export default function RootLayout() {
  return (
    <Stack
      screenOptions={({ route }) => ({
        title: defaultTitleForRoute(route.name),
        header: ({ options, back, navigation }) => (
          <AppHeader
            title={
              typeof options.title === "string"
                ? options.title
                : defaultTitleForRoute(route.name)
            }
            canGoBack={Boolean(back)}
            onBackPress={navigation.goBack}
          />
        ),
      })}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about/index" options={{ title: "About" }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#444",
    backgroundColor: "#25292e",
  },
  headerRow: {
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  left: {
    width: 24,
    justifyContent: "center",
    alignItems: "flex-start",
    marginRight: 12
  },
  title: {
    flex: 1,
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  backPlaceholder: {
    width: 24,
    height: 24,
  },
});
