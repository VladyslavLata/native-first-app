import {
  View,
  TouchableWithoutFeedback,
  ImageBackground,
  StyleSheet,
} from "react-native";

export const AuthLayout = ({ onKeybordHide, children }) => {
  return (
    <TouchableWithoutFeedback onPress={(e) => onKeybordHide(e)}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../Img/BgApp.webp")}
          style={styles.bgImage}
          // imageStyle={{ resizeMode: "contain" }}
        >
          {/* <View
            style={{ width: 20, height: 20, backgroundColor: "red" }}
          ></View> */}
          {children}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE4B5",
  },
  bgImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
});
