import { View, StyleSheet,Text } from "react-native"

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Prueba de login</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})

export default LoginScreen
