import { View, StyleSheet} from "react-native"
import FormLogin from "../components/auth/Form"
import FontShape from "../components/auth/FontShape"

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
    backgroundColor:"#3e7de9",
    alignItems:"center"
  }
})

export default LoginScreen
