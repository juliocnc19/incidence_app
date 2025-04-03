import { FontAwesome } from "@expo/vector-icons"
import { StyleSheet, TouchableOpacity } from "react-native"
import { fontColors } from "../../theme/colors"
import { authStorage } from "../../../data/storage/authStorage"

const MenuButton = () => {
  const { toggleSidebar } = authStorage()
  return (
    <TouchableOpacity style={styles.button} onPress={() => toggleSidebar()}>
      <FontAwesome name="list" size={22} color={fontColors.secondary} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginLeft: 15
  }
})

export default MenuButton
