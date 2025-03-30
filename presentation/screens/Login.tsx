import { View, StyleSheet} from "react-native"
import FormLogin from "../components/auth/FormLogin"
import { backgroundColors } from "../theme/colors"

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <FormLogin/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:backgroundColors.primary,
    alignItems:"center"
  }
})

export default LoginScreen
