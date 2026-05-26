import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

import PlaceholderImage from "@/assets/images/background-image.png";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={PlaceholderImage}
          style={styles.image}
          contentFit="contain"
        />
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
