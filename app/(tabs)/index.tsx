import { StyleSheet, View } from "react-native";

import PlaceholderImage from "@/assets/images/background-image.png";
import ImageViewer from "@/components/ImageViewer";

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageViewer imgSource={PlaceholderImage} />
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
});
