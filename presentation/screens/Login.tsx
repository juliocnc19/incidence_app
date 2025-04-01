import { View, StyleSheet} from "react-native"
import LoginForm from "../components/auth/LoginForm"
import { backgroundColors } from "../theme/colors"

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <LoginForm/>
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
