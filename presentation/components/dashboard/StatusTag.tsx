import { View, StyleSheet, Text } from "react-native"
import { statusTag } from "../../../utils/constants/statusTag"
import { backgroundColors } from "../../theme/colors"
import Incident from "../../../core/models/Incident"

const StatusTag = ({ status_id }: { status_id: Incident['status_id'] }) => {
  const tagObject = statusTag[status_id]

  return (
    <View style={styles.container}>
      <Text style={{ color: tagObject.color, ...styles.text }}>{tagObject.out}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColors.primary,
    borderRadius: 12,
    padding: 7
  },
  text: {
    fontWeight: 500,
    fontSize: 12

  }
})

export default StatusTag
