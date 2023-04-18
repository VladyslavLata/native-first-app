import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const Btn = ({ children, onPressBtn }) => {
  return (
    <TouchableOpacity
      style={styles.btn}
      activeOpacity={0.8}
      onPress={onPressBtn}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "100%",
    backgroundColor: "#ff6c00",
    borderRadius: 25,
  },
  text: {
    fontSize: 16,
    fontStyle: "Roboto-R",
    color: "#ffffff",
  },
});
