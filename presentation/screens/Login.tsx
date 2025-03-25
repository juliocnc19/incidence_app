import { Link } from "expo-router"
import { View } from "react-native"

const LoginScreen = () => {
  return (
    <View>
      <Link href="/(auth)/register">ir a registro</Link>
      <Link href="/(main)/dashboard">ir a main</Link>
    </View>
  )
}

export default LoginScreen
