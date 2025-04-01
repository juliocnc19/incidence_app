import { Text, StyleSheet, View } from "react-native"
import { fontColors } from "../../theme/colors"

const MessageError = ({ message }: { message: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: fontColors.ternary,
    fontWeight: 500,
    textAlign: "center"
  },
  container: {
    padding: 4,
    marginVertical:8,
    borderRadius: 12,
    backgroundColor: fontColors.error
  }
})

export default MessageError
