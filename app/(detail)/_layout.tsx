import { FontAwesome } from "@expo/vector-icons"
import { Stack, useRouter } from "expo-router"
import { StyleSheet, View } from "react-native"
import { fontColors } from "../../presentation/theme/colors"

const DetailLayout = () => {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerLeft: () => <FontAwesome name="arrow-left" color={fontColors.secondary} onPress={() => router.back()} size={22}/>,
        }}
      >
        <Stack.Screen
          name="detail"
          options={{
            title:""
          }}
        />
      </Stack>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default DetailLayout
