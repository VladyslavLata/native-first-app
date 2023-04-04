import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const BtnChangeAuthScreens = ({ onPressNavigate, children }) => {
  return (
    <TouchableOpacity
      style={styles.btnNavigate}
      activeOpacity={0.8}
      onPress={onPressNavigate}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnNavigate: {
    width: "100%",
    paddingTop: 15,
    paddingBottom: 15,
  },
  text: {
    fontFamily: "Roboto-R",
    fontSize: 16,
    textAlign: "center",
    color: "#1B4371",
  },
});
