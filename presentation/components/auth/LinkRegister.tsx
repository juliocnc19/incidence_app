import { Link } from "expo-router"
import { View, Text, StyleSheet } from "react-native"

const LinkRegister = () => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
      >¿Aun no tienes cuenta?
        <Link style={styles.textLink}
          href="/(auth)/register"
        >  Registrate</Link></Text>
    </View>
  )
}

const styles = StyleSheet.create(({
  container: {
    marginTop:5,
    zIndex:20,
  },
  text: {
    fontSize:14,
    textAlign:"center"
  },
  textLink: {
    color:"#007bff"
  }
}))

export default LinkRegister
