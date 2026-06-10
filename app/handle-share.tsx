import { Image } from "expo-image";
import { useIncomingShare } from "expo-sharing";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function ShareReceived() {
  const { resolvedSharedPayloads, isResolving } = useIncomingShare();

  if (isResolving) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {resolvedSharedPayloads.map((payload, index) => {
        if (payload.contentType === "image") {
          return (
            <Image
              source={{ uri: payload.contentUri }}
              style={styles.image}
              key={index}
            />
          );
        }
        return null;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
  },
});
