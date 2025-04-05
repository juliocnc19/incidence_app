import { FontAwesome } from "@expo/vector-icons"
import { View, StyleSheet, Text } from "react-native"
import { fontColors } from "../../theme/colors"

const EmptyIncident = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="info-circle" color={fontColors.secondary} size={28}/>
      <Text style={styles.text}>Aun no tienes incidencias creadas</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  text:{
    textAlign:"center",
    fontSize:20,
    color:fontColors.secondary,
    fontWeight:500
  },
})

export default EmptyIncident
