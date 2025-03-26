import { View, StyleSheet} from "react-native"
import FormLogin from "../components/auth/FormLogin"
import FontShape from "../components/auth/FontShape"
import LinkRegister from "../components/auth/LinkRegister"

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
    backgroundColor:"#007bff",
    alignItems:"center"
  }
})

export default LoginScreen
