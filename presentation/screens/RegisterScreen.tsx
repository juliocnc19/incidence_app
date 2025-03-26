
import { View, StyleSheet} from "react-native"
import RegisterForm from "../components/auth/RegisterForm"

const RegisterScreen = () =>{
  return (
    <View style={styles.container}>
      <RegisterForm/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

export default RegisterScreen
