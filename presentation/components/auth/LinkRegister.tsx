import { Link } from "expo-router"
import { View, Text, StyleSheet } from "react-native"
import { backgroundColors } from "../../theme/colors"

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
    color:backgroundColors.secondary
  }
}))

export default LinkRegister
