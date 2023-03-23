import {
  View,
  TouchableWithoutFeedback,
  ImageBackground,
  StyleSheet,
} from "react-native";

export const AuthLayout = ({ onKeybordHide, children }) => {
  return (
    <TouchableWithoutFeedback onPress={onKeybordHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../Img/BgApp.webp")}
          style={styles.bgImage}
        >
          {children}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  bgImage: {
    // flex: 1,
    // resizeMode: "cover",
  },
});
