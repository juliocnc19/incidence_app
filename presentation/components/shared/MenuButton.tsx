import { FontAwesome } from "@expo/vector-icons"
import { StyleSheet, TouchableOpacity } from "react-native"
import { fontColors } from "../../theme/colors"

const MenuButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <FontAwesome name="list" size={22} color={fontColors.secondary}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button:{
    marginLeft:15
  }
})

export default MenuButton
