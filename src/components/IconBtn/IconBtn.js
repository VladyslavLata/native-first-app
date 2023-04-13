import { TouchableOpacity, StyleSheet } from "react-native";

export const IconBtn = ({
  icon: Icon,
  iconName,
  onPress,
  stylesBtn,
  color,
}) => {
  return (
    <TouchableOpacity
      style={[styles[stylesBtn], styles.headerBtn]}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <Icon name={iconName} size={24} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerBtn: {
    position: "absolute",
    bottom: 0,
    padding: 15,
    paddingBottom: 10,
  },
  backBtn: {
    left: 0,
  },
  logOutBtn: {
    right: 0,
  },
});
