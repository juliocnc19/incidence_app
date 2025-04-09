import { Text, StyleSheet, View } from "react-native"
import { backgroundColors, fontColors } from "../../theme/colors"

const MessageError = ({ message }: { message: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: fontColors.error,
    fontWeight: 500,
    textAlign: "center"
  },
  container: {
    padding: 8,
    marginVertical:8,
    borderRadius: 10,
    backgroundColor: backgroundColors.error
  }
})

export default MessageError
