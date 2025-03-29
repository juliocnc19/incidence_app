import { View, StyleSheet} from "react-native"
import FormLogin from "../components/auth/FormLogin"
import FontShape from "../components/auth/FontShape"
import LinkRegister from "../components/auth/LinkRegister"
import { backgroundColors } from "../theme/colors"

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <FontShape/>
      <FormLogin/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:backgroundColors.secondary,
    alignItems:"center"
  }
})

export default LoginScreen
