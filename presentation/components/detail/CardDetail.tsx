import { View, StyleSheet, Text } from "react-native"
import Incident from "../../../core/models/Incident"
import { backgroundColors, fontColors } from "../../theme/colors"
import StatusTag from "../shared/StatusTag"
import { formatData } from "../../../utils/lib/formatDate"

const CardDetail = ({ incident }: { incident: Incident }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerCard}>
        <Text style={styles.title}>{incident.title}</Text>
        <StatusTag status_id={incident.status_id} />
      </View>
      <View style={styles.divider}></View>
      <View>
        <View>
          <Text style={styles.field}>Description</Text>
          <Text style={styles.value}>{incident.description}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.field}>Fecha</Text>
          <Text style={styles.value}>{formatData(incident.created_at)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.field}>Solicitada por</Text>
          <Text style={styles.value}>{incident.user.username}</Text>
        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColors.secondary,
    borderRadius: 15,
    padding: 10,
    width: "100%",
  },
  headerCard: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "space-between",
    marginBottom:8
  },
  divider: {
    height: 2,
    backgroundColor: backgroundColors.primary
  },
  title: {
    color: fontColors.ternary,
    fontSize: 18,
    fontWeight: 500
  },
  field: {
    fontSize: 16,
    fontWeight: 500,
    color: fontColors.ternary
  },
  value: {
    color: fontColors.ternary
  },
  row: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  }
})

export default CardDetail
