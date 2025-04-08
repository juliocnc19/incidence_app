import { FontAwesome } from "@expo/vector-icons"
import { Stack, useRouter } from "expo-router"
import { StyleSheet, View } from "react-native"
import { fontColors } from "../../presentation/theme/colors"

const DetailLayout = () => {
  const router = useRouter()
  return (
      <Stack
        screenOptions={{
          headerLeft: () =>
            <FontAwesome name="arrow-left" color={fontColors.secondary} onPress={() => router.back()} size={22} style={{ marginHorizontal: 5 }} />,
        }}
      >
        <Stack.Screen
          name="[id]"
          options={{
            title: "Detalle de la incidencia",
            headerTitleStyle: { color: fontColors.secondary, fontSize:18 },
            headerTitleAlign:"center"
          }}
        />
      </Stack>
  )
}



export default DetailLayout
