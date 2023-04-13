import { View, Text, StyleSheet } from "react-native";

export const Header = ({ title, children }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 85,
    paddingTop: 42,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,.3)",
  },
  title: {
    color: "#212121",
    fontSize: 17,
    fontFamily: "Roboto-M",
    lineHeight: 22,
  },
});
