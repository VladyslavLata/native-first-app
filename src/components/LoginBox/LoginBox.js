import { View, StyleSheet, Text } from "react-native";

export const LoginBox = ({ registration, header, children }) => {
  return (
    <View
      style={[
        styles.box,
        {
          paddingTop: registration ? 90 : 30,
          paddingBottom: registration ? 60 : 130,
        },
      ]}
    >
      <Text style={styles.header}>{header}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  header: {
    marginBottom: 35,
    fontSize: 35,
    fontWeight: "500",
    lineHeight: 1.6,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
  },
});
