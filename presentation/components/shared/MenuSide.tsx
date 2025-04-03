import { Animated, TouchableOpacity, Text, StyleSheet } from "react-native"
import { authStorage } from "../../../data/storage/authStorage";
import { useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { backgroundColors, fontColors } from "../../theme/colors";

const MenuSide = () => {
  const { toggleSidebar, isSidebarVisible } = authStorage()
  const translateX = new Animated.Value(-300);

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [isSidebarVisible]);

  return (
    <Animated.View style={[styles.sidebar, { transform: [{ translateX }] }]}>
      <TouchableOpacity onPress={toggleSidebar} style={styles.closeButton}>
        <FontAwesome name="close" size={30} color="white" />
      </TouchableOpacity>
      <Text style={styles.menuText}>Menú</Text>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Inicio</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 300,
    backgroundColor: backgroundColors.secondary,
    paddingTop: 60,
    paddingHorizontal: 20,
    zIndex: 1000,
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  menuText: {
    color: fontColors.primary,
    fontSize: 18,
    marginBottom: 20,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
});

export default MenuSide
