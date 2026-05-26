import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

type ImageViewerProps = {
  imgSource: React.ComponentPropsWithoutRef<typeof Image>["source"];
};

export default function ImageViewer({ imgSource }: ImageViewerProps) {
  return (
    <View style={styles.imageContainer}>
      <Image source={imgSource} style={styles.image} contentFit="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
