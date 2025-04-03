import { FontAwesome } from "@expo/vector-icons"
import { StyleSheet, TouchableOpacity } from "react-native"
import { fontColors } from "../../theme/colors"

const NotificationButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <FontAwesome name="bell-o" size={22} color={fontColors.secondary}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button:{
    marginRight:15
  }
})

export default NotificationButton
