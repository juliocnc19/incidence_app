import { FontAwesome } from "@expo/vector-icons"
import { StyleSheet, TouchableOpacity } from "react-native"
import { fontColors } from "../../theme/colors"
import { useRouter } from "expo-router"

const CloseSessionButton = () => {
  const router = useRouter()
  
  const handlerOnpres = ()=>{
    router.replace("/(auth)/login")
  }

  return (
    <TouchableOpacity style={styles.button} onPress={()=>handlerOnpres()}>
      <FontAwesome name="sign-out" size={22} color={fontColors.secondary} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginLeft: 15
  }
})

export default CloseSessionButton
