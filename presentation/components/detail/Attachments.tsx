import { View, Text, StyleSheet } from "react-native"
import { fontColors } from "../../theme/colors"

const Attachments = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Archivos adjuntos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "100%",
  },
  title: {
    textAlign: "left",
    color: fontColors.secondary,
    fontSize: 20,
    fontWeight: "400"
  }
})

export default Attachments
